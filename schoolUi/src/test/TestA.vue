<template>
    <div id="testa" class="container">
        <button type="button" class="btn btn-primary btn-default" v-on:click="show">显示数据</button>
        <br/>
        <button type="button" class="btn btn-primary btn-default" @click="show">显示数据@</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:['fangh','hj','0001']
        }
    },
    methods:{
        show:function(){
            alert(this.msg);
        }
    }
}
</script>

