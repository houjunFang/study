<template>
    <div id="styleTest">
        <input type="text" v-model="msg"/>
        <p>当前输入是：{{msg}}</p>

        <strong :class="[reds,blues]">Test by fanghj!</strong>
        <br>
        <p :class="{red:true,blue:true}">ahahahahah</p>
        <br>
        <p :class="{red:a,blue:b}">使用样式方式三</p>
        <br>
        <p :class="cl">使用样式四</p>
        <br>
        <myButton/>
        <br>

         <el-button type="primary">主要按钮</el-button>
         <el-input-number v-model="num" :min="1" :max="10" @change="handleChange"></el-input-number>
        

    </div>
</template>


<script>
import Vue from 'vue';

Vue.component("myButton",{
    template:"<button @click='inrc' value='点我' type='button'>点我 {{cnt}}</button>",
    //template:"<input type='button' value='点我计数' {{cnt}} @click='inrc' />",
    data(){
        return {
            cnt:0
        }
    },
    methods:{
        inrc:function(){
            this.cnt+=1;
            console.log(this.cnt);
        }
    }

});

export default {
    // data(){
    //     return {
    //         reds:"red",
    //         blues:"blue"
    //     }
    // }

    data:function(){
        return {
             reds:"red",
             blues:"blue",
             a:true,
             b:false,
             cl:{
                 blue:true
             },
             msg:'',
             num:5
        }
    },
    methods:{
        handleChange(value){
            console.log(value);
        }
    }
}
</script>

<style scoped>
.red{color:red;}
.blue{background-color:blue;}
</style>



