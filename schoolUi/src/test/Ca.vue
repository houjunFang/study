<template>
    <div id="a">
        <h1>{{compName}}</h1>
        <br/>
        <input value="send" type="button" @click="send"/>
    </div>
</template>
<script>
import Cb from './Cb.vue'
export default {
    data:function(){
        return {
            compName:"我是A组件"
        }
    },
    methods:{
        send(){
            console.log("send ing.....")
            Cb.$emit("asend",this.compName);
        }
    }
}
</script>

