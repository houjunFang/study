export default{
	init:function(){
		let filter = {
				className: ''
			};
			return{
				classData:[],
                filter: filter,													//查询条件 
				activeCollapse: 'search',										//开关查询折叠面板
				pagination: {
					total: 0,
					current: 1,
					pageSize: 10
				},																//巡检计划列表分页数据
				editVisible: false,
				dialogCreateClass: false,
				dialogEditClass: false,
				classFrom:{
                   className:'',
                   gradge:'',
                   masterName:'',
                   message:''
				},
				editFrom:{
                   className:'',
                   gradge:'',
                   masterName:'',
                   message:'',
                   id:''
				},
				defaultClassFrom:{
                   className:'',
                   gradge:'',
                   masterName:'',
                   message:''
				},
				stuFrom:{
					studentName:'',
					classesId:''
				},
				defaultstuFrom:{
					studentName:'',
					classesId:''
				},
				dialogCreateStu:false
			}
	}
}