<template>
	<div style="padding: 20px;"> 
        <!-- -------------------------------------------查询条件--------------------------------------------- -->			
		<el-collapse v-model='activeCollapse'>
			<el-collapse-item title='查询条件' name='search'>
				<el-form ref='searchCondition' :model='filter' label-width='80px' label-position=‘left’>
					<el-row>
						<el-col :span='6'>
							<el-form-item label='班级名称' prop='className'>
								<el-input v-model='filter.className' :clearable='true'></el-input>
							</el-form-item>
						</el-col> 
						<el-col :span='6' style="marginLeft:20px;">
                            <el-button @click='handleSearch' type='primary'>查询</el-button>
					        <el-button @click='resetForm("searchCondition")'>重置</el-button>
						</el-col>
					</el-row> 
				</el-form> 
			</el-collapse-item>
		</el-collapse> 
		<!-- -------------------------------------------班级列表--------------------------------------------- -->
			<div>
				<el-row type='flex' justify='end'  style='margin: 20px 0 10px 0'>
					<el-button @click='dialogCreateClass=true' type='primary'>新建班级</el-button>
					<!-- <el-button @click='handleCancelPlan' type='danger'>删除巡检计划</el-button> -->
				</el-row>
				
				<div style='margin-bottom: 20px'>
					<el-table :data='classData' width='100%' border>
						<el-table-column type='index' width='65'></el-table-column>
						<el-table-column label='班级编号' prop='classNo' width='200'></el-table-column>
						<el-table-column label='班级名称' prop='className' width='200'></el-table-column>
						<el-table-column label='所属年级' prop='gradge' width='200'></el-table-column>  
						<el-table-column label='班主任' prop='masterName' width='200'></el-table-column> 
						<el-table-column label='班级描述' prop='message'></el-table-column> 
						<el-table-column label='操作' prop='operate'>
							<template slot-scope="scope">
						        <el-button @click="editClass(scope)" type="button" size="primary">编辑</el-button>
						        <el-button @click="delClass(scope)" type="danger" size="primary">删除</el-button> 
						        <el-button @click="addStudent(scope)" type="success" size="primary">添加学生</el-button> 
						    </template>
						</el-table-column> 
					</el-table>
				</div>
				
				<el-row type='flex' justify='end'>
					<el-pagination
						@size-change='handlePageSizeChange'
						@current-change='handleCurrentChange'
						:current-page='pagination.current'
						:page-sizes='[10, 20, 50, 100]'
						:page-size='pagination.pageSize'
						:total='pagination.total'
						layout='prev,pager,next,jumper,total,sizes'
					></el-pagination>
				</el-row>
			</div> 
			<!-- -------------------------------------------------新建班级----------------------------------------------- -->
			<el-dialog title='新建班级' size='large' ref='createClass' v-model='dialogCreateClass' style="width:800px;padding: 50px;marginLeft:400px;">
				<div style='padding: 20px 50px'>
					<el-form label-width='100px' ref='addClassForm' :model='classFrom'>
						<el-row type='flex' justify='space-between'>
							<el-col :span='11'>
								<el-form-item
									label='班级名称'
									prop='className'
									required
									:rules='{
								      	required: true, message: "名称不能为空！"
								    }'
								>
									<el-input v-model='classFrom.className' :maxlength='50'></el-input>
								</el-form-item>
							</el-col>
							<el-col  :span='11'>
								 <el-form-item
									label='所属年级'
									prop='gradge'
									required
									:rules='{
								      	required: true, message: "年级不能为空！"
								    }'
								>
									<el-input v-model='classFrom.gradge' :maxlength='50'></el-input>
								</el-form-item>
							</el-col>
						</el-row> 
						<el-row type='flex' justify='space-between'>
							<el-col :span='11'>
								<el-form-item
									label='班主任'
									prop='masterName'
									required
									:rules='{
								      	required: true, message: "班主任不能为空！"
								    }'
								>
									<el-input v-model='classFrom.masterName' :maxlength='50'></el-input>
								</el-form-item>
							</el-col>
							<el-col  :span='11'>
								 <el-form-item
									label='班级描述'
									prop='message'
									required
									:rules='{
								      	required: true, message: "班级描述不能为空！"
								    }'
								>
									<el-input v-model='classFrom.message' :maxlength='128'></el-input>
								</el-form-item>
							</el-col>
						</el-row> 
					</el-form>
					<el-row type='flex' justify='end'>
						<el-button @click='handleCloseAddDialog'>取消</el-button>
						<el-button type='info' @click='handleSave'>保存</el-button>
					</el-row>
				</div>
			</el-dialog>

			<!-- -------------------------------------------------添加学生----------------------------------------------- -->
			<el-dialog title='添加学生' size='large' ref='createStudent' v-model='dialogCreateStu' style="width:800px;padding: 50px;marginLeft:400px;">
				<div style='padding: 20px 50px'>
					<el-form label-width='100px' ref='addStuForm' :model='stuFrom'>
						<el-row type='flex' justify='space-between'>
							<el-col :span='11'>
								<el-form-item
									label='学生姓名'
									prop='studentName'
									required
									:rules='{
								      	required: true, message: "名称不能为空！"
								    }'
								>
									<el-input v-model='stuFrom.studentName' :maxlength='50'></el-input>
								</el-form-item>
							</el-col> 
						</el-row>
					</el-form>
					<el-row type='flex' justify='end'>
						<el-button @click='handleCloseAddStuDialog'>取消</el-button>
						<el-button type='info' @click='handleSaveStu'>保存</el-button>
					</el-row>
				</div>
			</el-dialog>

			<!-- -------------------------------------------------编辑班级----------------------------------------------- -->
			<el-dialog title='新建班级' size='large' ref='editClass' v-model='dialogEditClass' style="width:800px;padding: 50px;marginLeft:400px;">
				<div style='padding: 20px 50px'>
					<el-form label-width='100px' ref='editClassForm' :model='editFrom'>
						<el-row type='flex' justify='space-between'>
							<el-col :span='11'>
								<el-form-item
									label='班级名称'
									prop='className'
									required
									:rules='{
								      	required: true, message: "名称不能为空！"
								    }'
								>
									<el-input v-model='editFrom.className' :maxlength='50'></el-input>
								</el-form-item>
							</el-col>
							<el-col  :span='11'>
								 <el-form-item
									label='所属年级'
									prop='gradge'
									required
									:rules='{
								      	required: true, message: "年级不能为空！"
								    }'
								>
									<el-input v-model='editFrom.gradge' :maxlength='50'></el-input>
								</el-form-item>
							</el-col>
						</el-row> 
						<el-row type='flex' justify='space-between'>
							<el-col :span='11'>
								<el-form-item
									label='班主任'
									prop='masterName'
									required
									:rules='{
								      	required: true, message: "班主任不能为空！"
								    }'
								>
									<el-input v-model='editFrom.masterName' :maxlength='50'></el-input>
								</el-form-item>
							</el-col>
							<el-col  :span='11'>
								 <el-form-item
									label='班级描述'
									prop='message'
									required
									:rules='{
								      	required: true, message: "班级描述不能为空！"
								    }'
								>
									<el-input v-model='editFrom.message' :maxlength='128'></el-input>
								</el-form-item>
							</el-col>
						</el-row> 
					</el-form>
					<el-row type='flex' justify='end'>
						<el-button @click='handleCloseEditDialog'>取消</el-button>
						<el-button type='info' @click='udpateClassesById'>保存</el-button>
					</el-row>
				</div>
			</el-dialog>
	</div>
</template>
<script type="text/javascript">
 
    import methods from './method'
    import data from './data'

	export default{
		data(){
			return data.init();
		},
		methods: methods,
		mounted(){ 
			this.getTableData();
		}
	}
</script>
<style type="text/css"> 
</style>