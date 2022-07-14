<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <div class="card">
          <div class="card-header">Carrito</div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(c, index) in carrito"
              :key="index"
            >
            <div class="d-flex justify-content-between">
              {{c.nombre}}
              <i @click="eliminarProductoCarrito(c)" class="bi bi-trash-fill"></i>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "carrito-app",
  computed: {
    ...mapGetters(["carrito"]),
  },
  methods: {
    ...mapMutations(["eliminarProductoCarrito"])
  }
};
</script>

<style></style>
