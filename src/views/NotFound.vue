<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <h2 class="text-danger"><b>Page Not Found - 404</b></h2>
        </div>

        <p>Oops! you are lost.</p> 
        <br>
        <p>
            <button @click="goHome">Go To Login Page </button>
        </p>
       
    </div>
   
  </div>
</template>

<script>
export default {

    methods:{
        goHome(){
            this.$router.push("/");
        }
    }

}
</script>

<style scoped>
h2{
    margin: 10%;
}

</style>