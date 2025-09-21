import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: () => import('../pages/HomePage.vue') 
},
{ path: '/catalogo', 
    name: 'catalog', 
    component: () => import('../pages/CatalogPage.vue') 
},
{ 
  path: '/auto/:id', 
  name: 'car-detail', 
  component: () => import('../pages/CarDetailPage.vue') 
},
{ 
  path: '/reservar/:id', 
  name: 'reserve', 
  component: () => import('../pages/ReservationPage.vue') 
},
{ 
  path: '/confirmacion/:resId', 
  name: 'confirmation', 
  component: () => import('../pages/ConfirmationPage.vue') 
}
]

export default createRouter({
  history: createWebHistory(),
  routes
})