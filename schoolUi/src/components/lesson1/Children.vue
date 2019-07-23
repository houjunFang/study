<template>
    <div id="children">
        组件名称:{{compName}}
        <input type="button" value="send" @click="dj"/>
    </div>
    
</template>
<script>
export default {
    props:["compName"],
    methods:{
        dj:function(){
            this.$emit("testEvent");
        }
    }
}
</script>

<style scoped>

</style>
