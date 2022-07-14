<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <div class="card">
          <div class="card-header">Favoritos</div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(favorito, index) in favoritos"
              :key="index"
            >
            <div class="d-flex justify-content-between">
              {{favorito.nombre}}
              <i @click="eliminarFavorito(favorito)" class="bi bi-trash-fill"></i>
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
  name: "favoritos-app",
  computed: {
    ...mapGetters(["favoritos"]),
  },
  methods: {
    ...mapMutations(["eliminarFavorito"])
  }
};
</script>

<style></style>
