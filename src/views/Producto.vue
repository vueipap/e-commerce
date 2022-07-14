<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <div class="card">
            <div class="card-header">Producto</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="d-flex justify-content-between">
                  <p>{{ producto.nombre }}</p>
                  <button
                    @click="agregarProductoCarrito(producto)"
                    type="button"
                    class="btn btn-secondary btn-sm"
                  >
                   + <i class="bi bi-cart-fill"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  name: "producto-app",
  props: ["id"],
  data() {
    return {
      producto: {},
    };
  },
  async created() {
    try {
      const response = await this.$http.get(
        `https://api-ecommerce-vue.herokuapp.com/productos/${this.id}`
      );
      this.producto = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapMutations(['agregarProductoCarrito'])
  }
};
</script>

<style></style>
