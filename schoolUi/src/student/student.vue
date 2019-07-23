<template>
	<div style="padding: 20px;"> 
        <!-- -------------------------------------------查询条件--------------------------------------------- -->			
		<el-collapse v-model='activeCollapse'>
			<el-collapse-item title='查询条件' name='search'>
				<el-form ref='searchCondition' :model='filter' label-width='80px' label-position=‘left’>
					<el-row>
						<el-col :span='6'>
							<el-form-item label='学生姓名' prop='studentName'>
								<el-input v-model='filter.studentName' :clearable='true'></el-input>
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
		<!-- -------------------------------------------学生列表--------------------------------------------- -->
			<div>  
				<div style='margin-bottom: 20px'>
					<el-table :data='studentData' width='100%' border>
						<el-table-column type='index' width='65'></el-table-column>
						<el-table-column label='学生编号' prop='studentNo' width='200'></el-table-column>
						<el-table-column label='学生姓名' prop='studentName' width='200'></el-table-column>
						<el-table-column label='班级名称' prop='className' width='200'></el-table-column>
						<el-table-column label='所属年级' prop='gradge' width='200'></el-table-column>  
						<el-table-column label='班主任' prop='masterName' width='200'></el-table-column>
						<el-table-column label='操作' prop='operate'>
							<template slot-scope="scope">
						        <el-button @click="delStu(scope)" type="danger" size="primary">删除</el-button> 
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
	</div>
</template>
<script type="text/javascript">
  
    import data from './data'
    import methods from './method'

	export default{
		data(){
			return data.init();
		},
		methods:methods,
		mounted(){
			this.getTableData();
		}
	}
</script>
<style type="text/css"> 
</style>