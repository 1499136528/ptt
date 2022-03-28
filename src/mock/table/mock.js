
let Mock=require('mockjs');

let arrs=[
    {id:0,name:'黄安',text:'我是黄安,我最恶心'},
    {id:1,name:'掌握',text:'我是掌握,我最恶心'},
    {id:2,name:'我萧天',text:'我是啸天,我最恶心'},
    {id:3,name:'我小弟',text:'我是小弟,我最恶心'},
]
Mock.mock('/api/homeindex',function(config){
    return arrs
})


Mock.mock(/\/api\/homeindex\/\d/,'delete',function(config){
    let id=config.url.split('/').pop();
    arrs.splice(id,1)
    return {
        message:"删除了",
        data:arrs,
        status:200
    }
})