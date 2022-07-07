<template>

  <div class="card" style="width: 18rem">
    <img :src="producto.imagen" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{producto.nombre}}</h5>
      <p class="card-text">
        {{producto.descripcion}}
      </p>
      <router-link :to="`/producto/${producto.id}`" class="btn btn-primary">Detalle</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'Producto-app',
    props:{
        producto:{
            type:Object
        }
    }
};
</script>

<style></style>
