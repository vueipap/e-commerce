<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">ecommerce</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div>
        <button type="button" class="btn btn-secondary btn-sm me-2"><i class="bi bi-heart-fill"></i></button>
        <button type="button" class="btn btn-secondary btn-sm"><i class="bi bi-cart-fill"></i></button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:'Header-app'
}
</script>

<style>

</style>