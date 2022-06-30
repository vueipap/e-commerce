<template>
  <div>
    <Header />
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col" v-for="(producto, index) in productos" :key="index">
            <CardProducto :producto="producto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import CardProducto from "@/components/CardProducto";
export default {
  components: { Header, CardProducto },
  data() {
    return {
      productos: [
        {
          nombre: "Pelota de futbol",
          precio: 15000,
          imagen: "pelota.jpg",
          descripcion: "Esta es una descripcion de una pelota",
        },
        {
          nombre: "Guitarra",
          precio: 8000,
          imagen: "guitarra.jpg",
          descripcion: "Esta es una descripcion de una guitarra",
        },
        {
          nombre: "Sofa",
          precio: 25000,
          imagen: "sillon.jpg",
          descripcion: "Esta es una descripcion de una sofa",
        },
      ],
    };
  },
};
</script>

<style></style>
