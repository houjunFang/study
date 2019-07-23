<template>
  <div class="container">
    <div :class="{'style1': this.styleType == 1, 'style2': this.styleType == 2}">测试箭头函数</div>
  </div>
</template>
<script>
export default {
  name: 'class3',
  data () {
    return {
      styleType: 1
    }
  },
  // created () {
  //   let that = this;
  //   // setTimeout(function () { // 使用setTimeout(()=> {this.styleType = 2},2000),2秒后页面渲染会改变，使用function不会。
  //   //   that.styleType = 2
  //   // }, 2000)
  //   setTimeout(() => {
  //     this.styleType=2;
  //   }, 1000);
  // }
  // created(){
  //   setTimeout(this.setStyleType,2000);
  // },
  // methods:{
  //   setStyleType(){
  //     this.styleType = 2;
  //   }
  // }

  created(){
    this.testFunc();
  },
  methods:{
    testFunc:()=>{setTimeout(()=>{this.styleType=2},2000)}
  }

}
</script>
<style scoped>
.style1{
  font-size: 20px;
  color: red;
}
.style2{  
  font-size: 40px;
  color: green;
}
</style>
