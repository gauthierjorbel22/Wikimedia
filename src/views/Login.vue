<template>
  <div class="container mt-5">
    <div class="col">
      <div class="row">
        <h3 class=""><b>Wikimedia Enterprise</b></h3>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <form class="mt-4" @submit.prevent="handleSubmit">
        <div class="form-group mt-5">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username or email address"
            required
            v-model="username"
          />
        </div>
        <div class="form-group pt-3">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            required
            v-model="password"
          />
        </div>
        <p class="text-danger">
          <i>{{ error }}</i>
        </p>
        <div class="pt-3">
          <input type="submit" value="login" class="btn btn-success" />
        </div>
        <p class="mt-3 message">
          <i>you need to have a valid wikimedia Enterprise account</i>
        </p>
        <a
          class="message"
          href="https://dashboard.enterprise.wikimedia.com/signup/"
          target="blank"
          >create one here</a
        >
      </form>
    </div>
    <img
      src="https://media0.giphy.com/media/MT93VRr8gheXETA1V0/giphy.gif?cid=6c09b952lnetymlao1vez64h7angkew7mcmrtfnhz3pwhjkg&rid=giphy.gif&ct=s"
      alt=""
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "/login",
          {
            username: this.username,
            password: this.password,
          },
          { headers: { "content-type": "application/json" } }
        );
        if (response.status == 200) {
          if (response.data.access_token) {
            console.log("my response", response);
            localStorage.setItem("access_token", response.data.access_token);
            this.$router.push("/home");
          }
        }
      } catch (err) {
        console.log(err.response.data.message);
        this.error = "Incorrect username or password";
      }
    },
  },
};
</script>

<style>
form {
  width: 500px;
  background-color: rgb(192, 238, 192);
  height: 350px;
  padding: 20px;
  border-radius: 3%;
}
img {
  height: 250px;
  width: 250px;
}
.message {
  font-size: 12px;
}
</style>