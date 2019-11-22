const home = resolve => require(['../page/home'], resolve)  
const find = resolve => require(['../page/find'], resolve)  
const newhome = resolve => require(['../page/newhome'], resolve)  
const details = resolve => require(['./../page/details'], resolve)  
const sechome = resolve => require(['./../page/sechome'], resolve) 
const lease = resolve => require(['./../page/lease'], resolve)  
const leaselist = resolve => require(['./../page/leaselist'], resolve)  
const common = resolve => require(['./../page/common'], resolve)  
const condition = resolve => require(['./../page/condition'], resolve)  
const commonDetails = resolve => require(['./../page/commondetails'], resolve) 
const chart = resolve => require(['./../page/chart'], resolve) 
const fund = resolve => require(['./../page/fund'], resolve) 
const teach = resolve => require(['./../page/teach'], resolve) 
const routes=[
    {
        path:"/",component:home,name:'home',
        meta:{ title:'首页', keeplive:false }
    },
    {
        path:"/find",omponent:find,name:'find',
        meta:{ title:'搜素', keeplive:false }
    },
    {
        path:"/newhome",component:newhome,name:'newhome',
        meta:{ title:'新房', keeplive:false }
    },
    {
        path:"/details",component:details,name:'details',
        meta:{ title:'新房信息',keeplive:false }
    },
    {
        path:"/sechome",component:sechome,name:'sechome',
        meta:{ title:'二手房', keeplive:false }
    },
    {
        path:"/lease",component:lease, name:'lease',
        meta:{ title:'租房', keeplive:false}
    },
    {
        path:"/leaselist",component:leaselist, name:'leaselist',
        meta:{ title:'普通租房', keeplive:false}
    },
    {
        path:"/common",component:common, name:'common',
        meta:{ title:'公租房', keeplive:false}
    },
    {
        path:"/condition",component:condition, name:'condition',
        meta:{ title:'公租房申请条件', keeplive:false}
    },
    {
        path:"/common/details",component:commonDetails, name:'commonDetails',
        meta:{ title:'受理点详情', keeplive:false}
    },
    {
        path:"/chart",component:chart, name:'chart',
        meta:{ title:'房价走势', keeplive:false}
    },
    {
        path:"/fund",component:fund, name:'fund',
        meta:{ title:'公积金查询', keeplive:false}
    },
    {
        path:"/teach",component:teach, name:'teach',
        meta:{ title:'家政服务', keeplive:false}
    },
]
export default routes;