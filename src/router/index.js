import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Details from '../views/Details.vue'
import Tag from '../views/Tag.vue'

const routes=[
    {path:"/", name:'Home', component:Home},
    {path:"/create", name:'Create', component:Create},
    {path:"/posts/:id", name:'Details', component:Details, props:true},
    {path:"/tag/:tag", name:'Tag', component:Tag},
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router