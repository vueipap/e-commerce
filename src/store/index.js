import Vue from 'vue'
import Vuex from 'vuex'
import http  from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    carrito: [],
    favoritos: [],
  },
  getters: {
    productos(state){
      return state.productos
    },
    carrito(state){
      return state.carrito
    },
    favoritos(state){
      return state.favoritos
    },
    cantidadProductosCarrito(state){
      return state.carrito.length
    },
    cantidadFavoritos(state){
      return state.favoritos.length
    }
  },
  mutations: {
    setProductos(state,value){
      state.productos = value
    },
    agregarProductoCarrito(state,value){
      state.carrito.push(value)
    },
    eliminarProductoCarrito(state,value) {
      state.carrito = state.carrito.filter(valor => valor != value)
    },

    agregarFavorito(state,value){
      state.favoritos.push(value)
    },
    eliminarFavorito(state,value) {
      state.favoritos = state.favoritos.filter(valor => valor.id != value.id)
    },
  },
  actions: {
    async fetchProductos({commit},parametros={}){
      try {
        const response = await http.get(
          "https://api-ecommerce-vue.herokuapp.com/productos",
          {params: parametros}
        );
        commit('setProductos',response.data)  
      } catch (error) {
        console.log(error) 
      }
    }
  }
})
