import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// const router = createRouter ([
//   history: createWebHistory(),
//   routes: [{
//     path: '/',
//     redirect: '/home' 
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/About.vue')
//   },
//  ],
// }]


const router = createRouter({
  history: createWebHistory(),
  routes: [{
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue')
          
      },
      {
          name: 'About',
          path: '/About',
          component: () => import('../views/About.vue')
          
      },
  ],
  
});




export default router
