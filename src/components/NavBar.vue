<template>
  <div class="container mb-2">
    <nav class="navbar navbar-dark bg-success">
      <router-link to="/home" class="text">Home</router-link> |
      <router-link to="/wikivoyage" class="text">Wikivoyage</router-link>
      <router-link to="/" class="text logout"> <button class="btn btn-danger">Logout</button></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
  .text:hover{
    color: white;
  }
.navbar {
  color: white;
  text-align: center;
  font-size: 15px;
  display: block;
}
.logout{
  text-align: right;
  margin-left: 5%;
}
.logout:hover{
  color: red;
}
</style>