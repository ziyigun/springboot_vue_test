import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManager from '../views/BookManager'
import Index from '../views/Index'
import AddBook from "../views/AddBook";
import BookUpdate from "../views/BookUpdate";

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"图书管理",
    component:Index,
    redirect:"/BookManager",
    children:[
      {
        path:"/BookManager",
        name:"查询图书",
        component:BookManager
      },
      {
        path:"/AddBook",
        name:"添加图书",
        component:AddBook
      },
      {
        path:'/update',
        name:'修改图书',
        component: BookUpdate
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
