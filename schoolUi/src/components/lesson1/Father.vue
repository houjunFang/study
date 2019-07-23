<template>
    <div id="father">
        组件名称:{{compName}}
        <br/>
        <children :compName="sendName" v-on:testEvent="fatherFunc"/>
    </div>
</template>
<script>
import Children from './Children.vue'
export default {
    data(){
        return{
            compName:"我是父组件",
            sendName:'这个发送名称'
        }
    },
    components:{Children},
    methods:{
        fatherFunc:function(){
            console.log("子组件触发了我！");
        }
    }
}
</script>

