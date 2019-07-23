<template>
    <div id="m">
        main组件<br/>
        ===============我接收到信息{{msg}}
        <br/>
        <Ca></Ca>
        <input type="button" value="getSend" @click="got"/>
    </div>

</template>

<script>
import Ca from './Ca.vue' 
import Cb from './Cb.vue'

// import vueParticleLine from 'vue-particle-line'
// import 'vue-particle-line/dist/vue-particle-line.css'
// Vue.use(vueParticleLine)

import Watermark from '../components/watermark'

export default {
    data(){
        return{
            msg:""
        }
    },
    mounted:function(){
        Watermark.set("汇金APP");
        console.log("listeng.....");
        Cb.$on("asend",(val)=>{
            console.log("我监听到M senda:"+val);
            this.msg=val;
        })
    },
    methods:{
        got(){
            console.log("got.....");
            Cb.$on("asend",(val)=>{
            console.log("我监听到M senda:"+val);
            this.msg=val;
        })
        }
    },
    components:{
        Ca
    }
}
</script>

