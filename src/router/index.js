import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    redirect:'/home/1',
    children:[
      {path:"1",component:()=>import('../views/Home/HomeIndex'),name:'wangxuan'},
      {path:"2-1",meta:["数据管理","用户列表"],component:()=>import('../views/Home/HomeUser')},
      {path:"2-2",meta:["数据管理","商品列表"],component:()=>import('../views/Home/HomeShop')},
      {path:"2-3",meta:["数据管理","食品列表"],component:()=>import('../views/Home/HomeShop')},
      {path:"2-4",meta:["数据管理","订单列表"],component:()=>import('../views/Home/HomeOrder')},
      {path:"2-5",meta:["数据管理","管理员列表"],component:()=>import('../views/Home/HomePerson')}
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/login",
    name:"MyLogin",
    component:()=> import ('../views/login/MyLogin')
  }
];

const router = new VueRouter({
  routes,
});
router.beforeEach(function(to,from,next){
  const token=localStorage.getItem('key');
  if(to.name=='MyLogin'){
    return next()
  }else{
    if(!token) return next({name:'MyLogin'});
    if(token) return next();
  }
})


export default router;
