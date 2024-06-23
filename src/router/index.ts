
import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
import FirstMap from "../components/FirstMap.vue";


const router =createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'start',
      component:HelloWorld
    },
    {
     path:'/first',
     name:'first_map',
     component: FirstMap
    }
  ]
})

export default router
