<template id="sjld">
    <div>{{msg}}
    <label >
        <select v-model="selected" prop="selected"  >
          <option v-for="option in sheng" :value="option.id" :label="option.name" :key="option.id"> {{option.name}} </option>
        </select>

        <select v-model="selecteds"  prop="selecteds">
          <option  v-for="v in shi" :value="v.id" :label="v.name" :key="v.id"> {{v.name}} </option>
        </select>

        <select v-model="selectedss" prop="selectedss">
          <option v-for="n in xian" :value="n.id" :label="n.name" :key="n.id"> {{n.name}} </option>
        </select>
        <button type="info" @click="tijiao">提交</button>
    </label>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                shi:[],
                xian:[],
                selected:'',
                selecteds:'',
                selectedss:'',
                msg:"test by fanghj!",
                sheng:[{id:'001',name:'北京',upid:'001'},{id:'002',name:'南京',upid:'002'}],
                citys:[{id:'00101',name:'北京市',upid:'001'},{id:'002001',name:'南京',upid:'002'}]
            }
        },
        // props:{
        //     citys:Array,
        //     sheng:Array,
        // },
        watch:{
            selected:function(val, old){
                const self=this;
                if(val != old){
                    self.shi=[];
                    let upid = self.selected;
                    let len = self.citys.length;
                    for (var i = 0; i < len; i++) {
                        if(self.citys[i].upid == upid){
                            self.shi.push(self.citys[i])
                        }
                    };
                }
            },
            selecteds:function(val, old){
                const self=this;
                if(val != old){
                    self.xian=[];
                    let upid = self.selecteds;
                    let len = self.citys.length;
                    for (var i = 0; i < len; i++) {
                        if(self.citys[i].upid == upid){
                            self.xian.push(self.citys[i])
                        }
                    };
                }
            },
        },
        methods:{
            getcitys(){
                const self=this;
                self.citys=JSON.parse(localStorage.getItem('citys'))
                self.sheng=JSON.parse(localStorage.getItem('sheng'))
            },
            tijiao(){
                const self=this;
                let data={
                    sheng:self.selected,
                    shi:self.selecteds,
                    xian:self.selectedss,
                }
                self.$emit('change', data);
                //console.log(data)
            },
        },
        mounted(){
            //this.getcitys();
        },
        computed: {
        }
    }
</script>