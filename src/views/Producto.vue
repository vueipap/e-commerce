<template>
<div>
  <h1>Producto</h1>
  <CardProducto :producto="producto" />
</div>
</template>

<script>
import CardProducto from '@/components/CardProducto'
export default {
    name:'producto-app',
    props:['id'],
    components: {CardProducto},
    data(){
      return {
        producto:{}
      }
    },
    async created(){
      try {
        const response = await this.$http.get(`https://api-ecommerce-vue.herokuapp.com/productos/${this.id}`)
        this.producto = response.data;
      } catch (error) {
        console.log(error)
      }
    }
}
</script>

<style>

</style>