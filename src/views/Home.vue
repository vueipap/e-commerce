<template>
  <div class="row">
    <div class="container">
      <div class="row">
        <div class="col justify-content-center">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              @click="filtrarCategorias(categoria.id)"
              class="btn btn-outline-primary"
              v-for="categoria in categorias"
              :key="categoria.id"
            >
              {{categoria.nombre | lower}}
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" v-for="(producto, index) in productos" :key="index">
          <CardProducto :producto="producto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      productos: [],
      categorias: [],
    };
  },
  async created() {
    try {
      const response = await this.$http.get(
        "https://api-ecommerce-vue.herokuapp.com/productos"
      );
      this.productos = response.data;

      const responseCategorias = await this.$http.get(
        "https://api-ecommerce-vue.herokuapp.com/categorias"
      );
      this.categorias = responseCategorias.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async filtrarCategorias(categoria){
      const response = await this.$http.get(`https://api-ecommerce-vue.herokuapp.com/productos?categoria=${categoria}`)
      this.productos = response.data
    }
  }
};
</script>

<style></style>
