import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carrito from '../views/Carrito.vue'
import Favoritos from '../views/Favoritos.vue'
import Producto from '../views/Producto.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: Favoritos
  },
  {
    path: '/producto/:id',
    name: 'Producto',
    props: true,
    component: Producto
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
