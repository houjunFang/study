
import Home from './Home' 
import classes from './class/classes' 
import student from './student/student' 
import tree from './tree' 
import test from './test/test' 
import TestA from './test/TestA' 
import TestB from './test/B' 
import Father from './components/lesson1/Father.vue'
import Mc from './test/M.vue'
import ST from './components/lesson2/StyleTest.vue'

let router = [
   {
      path: '/',
      name: '学校',
      component: Home,
      redirect: '/classes',
	  iconCls: 'fa fa-id-card-o',
	  children: [
    		{ path: '/classes', component: classes, name: '班级管理' },
        { path: '/student', component: student, name: '学生管理' },
        { path: '/test', component: test, name: '测试块' },
        { path: '/testa', component: TestA, name: 'Test-a' },
        { path: '/bb', component: TestB, name: 'bbb' },
        {path:'/father',component:Father,name:'父子组件测试'},
        {path:'/Mc',component:Mc,name:'监听子组件事件测试'},
        {path:'/ST',component:ST,name:'样式使用方法'}
      ] 
    }
]; 
export default router;
