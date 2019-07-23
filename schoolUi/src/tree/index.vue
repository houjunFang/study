<template>
	<div style="padding: 20px">
       <el-tree
       	ref='schooltree'
		  :data="data"
		  show-checkbox
		  node-key="id"
		  :default-expanded-keys="expandkey"
		  :default-checked-keys="checkkey"
		  @check-change="select"
		  :props="defaultProps">
		</el-tree>
	</div>
</template>
<script type="text/javascript">
	export default{
		  data() {
		      return {
		        data: [{
		          id: 1,
		          label: '小学',
		          children: [{
		            id: 25,
		            label: '一年级'
		          }, {
		            id: 26,
		            label: '二年级'
		          }, {
		            id: 29,
		            label: '三年级'
		          },{
		            id: 35,
		            label: '四年级'
		          }, {
		            id: 36,
		            label: '五年级'
		          }, {
		            id: 39,
		            label: '六年级'
		          }]
		        }, {
		          id: 2,
		          label: '初中',
		          children: [{
		            id: 5,
		            label: '一年级'
		          }, {
		            id: 6,
		            label: '二年级'
		          }, {
		            id: 9,
		            label: '三年级'
		          }]
		        }, {
		          id: 3,
		          label: '高中',
		          children: [{
		            id: 15,
		            label: '一年级'
		          }, {
		            id: 16,
		            label: '二年级'
		          }, {
		            id: 19,
		            label: '三年级'
		          }]
		        }],
		        defaultProps: {
		          children: 'children',
		          label: 'label'
		        },
		        expandkey:[2],
		        checkkey:[5]
		      } 
	    },
	    methods:{
	    	select(id,s,t){ 
               console.log(this.$refs['schooltree'].getCheckedNodes());
	    	}
	    }
  };
</script>
<style type="text/css">
</style>