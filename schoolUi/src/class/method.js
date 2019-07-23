 import {getClassesList,removeClassById, addClasses, updateClasses} from '../api/class'
 import {addStudent} from '../api/student'
 export default{
 	    //条件搜索
		handleSearch() {
			this.pagination.current = 1;
			this.getTableData()
		},
		//重置搜索条件
		resetForm(formName) {
	        this.$refs[formName].resetFields();
	    },
	     //设置分页大小
		handlePageSizeChange(pageSize) {
			this.pagination.pageSize = pageSize;
			this.getTableData();
		},
		//设置页码
		handleCurrentChange (current) {
			this.pagination.current = current; 
			this.getTableData();
		}, 
		handleCloseAddDialog() { 
			this.classFrom =  Object.assign({}, this.defaultClassFrom); 
			this.$refs.addClassForm.resetFields();
			this.$refs.createClass.close();
		},
		handleCloseEditDialog(){
			this.editFrom =  Object.assign({}, this.defaultClassFrom); 
			this.$refs.editClassForm.resetFields();
			this.$refs.editClass.close();
		}, 
		handleSave() {                                //---------------------提交新建表单
			this.$refs.addClassForm.validate((valid) => {
		          	if (valid) {
		          		const params = Object.assign({}, this.classFrom);
		          		addClasses(params).then((res) => {
		          			this.$message({
				            	type: 'info',
				            	message: '新建成功'
				          	}); 
		          			this.$refs.createClass.close();
		          			this.classFrom =  Object.assign({}, this.defaultClassFrom);
							this.$refs.addClassForm.resetFields();
							this.getTableData();
		          		}).catch((err) => {
		          			this.$message({
				            	type: 'warning',
				            	message: '新建失败'
				          	}); 
		          			console.log(err);
		          		});
		          	} else {
		            	console.log('error submit!!');
		            	return false;
		     	    }
		     });
		}, 
		editClass(scope){                         //---------------------编辑操作
			this.dialogEditClass = true;  
			this.editFrom = Object.assign({}, {
				className: scope.row.className,
				gradge: scope.row.gradge,
				masterName: scope.row.masterName,
				message: scope.row.message,
				id:scope.row.id
			}); 
		}, 
		udpateClassesById(){
			console.log(this.classData);
			let params = Object.assign({}, this.editFrom);

			console.log(params); 

			updateClasses(params).then((res) => {
				console.log(res);
				this.dialogEditClass = false;
				this.getTableData();
				this.$message.info('修改班级信息成功');
			}).catch((err) => {
				console.log(err);
				this.$message.error('修改班级信息失败');
			});
		},
		delClass(scope){                         //---------------------删除操作
            this.$confirm('此操作将删除选中项, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		     }).then(() => {
		     		this.removeClass(scope);
		     }).catch(() => {
		          this.$message({
		            type: 'warning',
		            message: '已取消删除'
		          });          
		     });
		}, 
		removeClass(scope) {
			const params = {
				id: scope.row.id
			};
			console.log(scope);
			removeClassById(params).then((res) => {
				this.getTableData();
				this.$message({
					type: 'info',
					message: '删除成功'
				});
			}).catch((err) => {
				console.log(err);
			})
		}, 
		getTableData(){                           //---------------------获取列表数据
			let para = {
				pageNum: this.pagination.current,
				pageSize: this.pagination.pageSize,
				...this.filter
			};
			console.log(para);
			getClassesList(para).then((res) => {
				console.log(res);
				this.classData = res.data.records;
				this.pagination.total = res.data.total;
			});
		},
		handleCloseAddStuDialog(){
            this.stuFrom =  Object.assign({}, this.defaultstuFrom); 
			this.$refs.addStuForm.resetFields();
			this.$refs.createStudent.close();
		},
		addStudent(scope){
           this.dialogCreateStu = true;
           this.stuFrom.classesId = scope.row.id;
           console.log("------------------"+this.stuFrom.classesId);
        },
		handleSaveStu(){
            this.$refs.addStuForm.validate((valid) => {
		          	if (valid) {
		          		const params = Object.assign({}, this.stuFrom);
		          		addStudent(params).then((res) => {
		          			this.$message({
				            	type: 'info',
				            	message: '新建成功'
				          	}); 
		          			this.$refs.createStudent.close();
		          			this.stuFrom =  Object.assign({}, this.defaultstuFrom);
							this.$refs.addStuForm.resetFields(); 
		          		}).catch((err) => {
		          			this.$message({
				            	type: 'warning',
				            	message: '新建失败'
				          	}); 
		          			console.log(err);
		          		});
		          	} else {
		            	console.log('error submit!!');
		            	return false;
		     	    }
		     });
		}
 }