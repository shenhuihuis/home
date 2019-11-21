const home = resolve => require(['../page/home'], resolve)  
const routes=[
    {
        path:"/home",
        component:home,
        name:'home',
        meta:{
            title:'首页',
            keeplive:false
        }
    },
]
export default routes;