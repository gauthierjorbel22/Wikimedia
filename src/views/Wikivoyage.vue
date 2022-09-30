<template>
  <NavBar />
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h5><b>Welcome to Wikivoyage</b></h5>
        <div class="form-control mt-5 mb-2">
          <input
            type="text"
            v-model="searchVal"
            placeholder="Type here..."
            required
          />
          <button class="btn btn-success" @click="getProjects()">Search</button>

          <p class="text-danger mt-1" v-show="isEmpty == true">
            <i>{{ error }}</i>
          </p>
        </div>
        <div class="card">
          <p>
            <b>Article Identifier:</b> <i>{{ projects.identifier }}</i>
          </p>
          <p>
            <b>Article Name:</b> <i>{{ projects.name }}</i>
          </p>
          <p>
            <b>Date Modified:</b> <i>{{ new Date(projects.date_modified) }}</i>
          </p>
          <p>
            <b>Article Url:</b>
            <a :href="projects.url" target="blank"
              ><i>{{ projects.url }}</i></a
            >
          </p>
          <b>Editor:</b>
          <p
            v-for="projectEditor in projects.version"
            :key="projectEditor.identifier"
          >
            <i>{{ projectEditor.name }}</i>
          </p>

          <p class="mt-3"><b>Licence:</b></p>
          <p v-for="license in projects.license" :key="license.identifier">
            {{ license.name }} - {{ license.identifier }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      searchVal: "",
      projects: [],
      isEmpty: false,
      error: "",
    };
  },
  components: {
    NavBar,
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const searchWord = this.searchVal.trim();
      this.error = "Please enter valid name";

      const finalWord = (searchWord) => {
        return searchWord
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };
      const validFinalSearch = finalWord(searchWord);

      try {
        if (searchWord !== "") {
          //check if the submitted field is not empty.
          const res = await axios.get(
            `https://api.enterprise.wikimedia.com/v1/pages/meta/enwikivoyage/${validFinalSearch}`
          );
          if (res.status == 200) {
            this.projects = res.data;
            console.log(res);
          }
        } else {
          console.log("Empty name");
          this.isEmpty = true;
        }
      } catch (err) {
        console.log(err);
        if (err.message == "Request failed with status code 404") {
          this.error =
            "Oops, we couldn't find " + searchWord + ". Try a valid name";
          console.log(this.error);
        }
      }
    },
  },
};
</script>

<style scoped>
.card {
  background-color: whitesmoke;
}
input {
  height: 35px;
  border: 2px solid black;
  border-radius: 5%;
  margin-right: 0.2%;
}
input:focus {
  border-color: green;
}
.text-danger {
  font-size: 12px;
}
</style>