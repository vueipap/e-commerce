<template>
  <div class="card">
    <img :src="producto.imagen" class="card-img-top" />
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{ producto.nombre }}</h5>
        <i v-if="!esFavorito()" class="bi bi-heart" @click="agregarFavorito(producto)"></i>
        <i v-else @click="eliminarFavorito(producto)" class="bi bi-heart-fill"></i>
      </div>
      <router-link :to="`/producto/${producto.id}`" class="btn btn-primary"
        >Detalle</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Producto-app",
  props: {
    producto: {
      type: Object,
    },
  },

  computed: {
    ...mapGetters(['favoritos'])
  },
  methods: {
    ...mapMutations(["agregarFavorito", "eliminarFavorito"]),
    esFavorito(){
      return this.favoritos.find(f=>f.id == this.producto.id)
    }
  },
};
</script>

<style></style>
