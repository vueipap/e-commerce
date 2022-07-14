<template>
    <div class="container">
      <div class="row mt-4 mb-2">
        <div class="col d-flex justify-content-center">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              @click="fetchProductos({categoria:categoria.id})"
              class="btn btn-outline-success"
              v-for="categoria in categorias"
              :key="categoria.id"
            >
              {{categoria.nombre | lower}}
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-md-4" v-for="(producto, index) in productos" :key="index">
          <CardProducto :producto="producto" />
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import CardProducto from "@/components/CardProducto";
export default {
  name: "home-app",
  components: { CardProducto },
  filters:{
    lower(value){
      return value.toLowerCase()
    }
  },
  data() {
    return {
      categorias: [],
    };
  },

  computed: {
    ...mapGetters(['productos'])
  },
  async created() {
    try {
      this.fetchProductos();
      const responseCategorias = await this.$http.get(
        "https://api-ecommerce-vue.herokuapp.com/categorias"
      );
      this.categorias = responseCategorias.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    ...mapActions(['fetchProductos']),
    async filtrarCategorias(categoria){
      const response = await this.$http.get(`https://api-ecommerce-vue.herokuapp.com/productos?categoria=${categoria}`)
      this.productos = response.data
    }
  }
};
</script>

<style></style>
