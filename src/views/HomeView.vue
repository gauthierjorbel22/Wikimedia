<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <NavBar/>
        <h3>Wikimedia Enterprise Projects</h3>
        <h6><i>Filter projects by language</i></h6>
        <div class="row">
          <div class="col">
            <button class="btn btn-success" @click="setEngl()">English</button>
            | <button class="btn btn-success" @click="setFr()">French</button> |
            <button class="btn btn-success" @click="setCh()">Chinese</button> |
            <button class="btn btn-success" @click="setSp()">Spanish</button> |
            <button class="btn btn-success" @click="setRu()">Russian</button>
          </div>
        </div>

        <div class="container mt-3 mb-2">
          <div class="card" v-if="en == true">
            <div v-for="project in projects" :key="project.identifier">
              <ul
                class="card-header"
                v-show="project.in_language.name == 'English'"
              >
                <li><b>Name:</b> <i>{{ project.name }}</i></li>
                <li><b>Idenfifier: </b>{{ project.identifier }}</li>
                <li>
                  <b>Url: </b><a :href="project.url" target="blank">{{ project.url }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="card" v-if="fr == true">
            <div v-for="project in projects" :key="project.identifier">
              <ul
                class="card-header"
                v-show="project.in_language.name == 'French'"
              >
              <li><b>Name:</b> <i>{{ project.name }}</i></li>
                <li><b>Idenfifier: </b>{{ project.identifier }}</li>
                <li>
                  <b>Url: </b><a :href="project.url" target="blank">{{ project.url }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="card" v-if="sp == true">
            <div v-for="project in projects" :key="project.identifier">
              <ul
                class="card-header"
                v-show="project.in_language.name == 'Spanish'"
              >
              <li><b>Name:</b> <i>{{ project.name }}</i></li>
                <li><b>Idenfifier: </b>{{ project.identifier }}</li>
                <li>
                  <b>Url: </b><a :href="project.url" target="blank">{{ project.url }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="card" v-if="ch == true">
            <div v-for="project in projects" :key="project.identifier">
              <ul
                class="card-header"
                v-show="project.in_language.name == 'Chinese'"
              >
              <li><b>Name:</b> <i>{{ project.name }}</i></li>
                <li><b>Idenfifier: </b>{{ project.identifier }}</li>
                <li>
                  <b>Url: </b><a :href="project.url" target="blank">{{ project.url }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="card" v-if="ru == true">
            <div v-for="project in projects" :key="project.identifier">
              <ul
                class="card-header"
                v-show="project.in_language.name == 'Russian'"
              >
              <li><b>Name:</b> <i>{{ project.name }}</i></li>
                <li><b>Idenfifier: </b>{{ project.identifier }}</li>
                <li>
                  <b>Url: </b><a :href="project.url" target="blank">{{ project.url }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// @ is an alias to /src

import axios from "axios";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
  },
  data() {
    return {
      projects: [],
      en: false,
      fr: false,
      sp: false,
      ch: false,
      ru: false,
    };
  },
  mounted() {
    this.getProjects();
    this.setEngl();
    this.setFr();
    this.setSp();
    this.setCh();
    this.setRu();
  },
  methods: {
    async getProjects() {
      const res = await axios.get(
        "https://api.enterprise.wikimedia.com/v1/projects"
      );
      this.projects = res.data;
      console.log(typeof res);
    },
    // set english 
    setEngl() {
      (this.fr = false),
        (this.sp = false),
        (this.ch = false),
        (this.ru = false);
      this.en = true;
      console.log("English");
    },
    // set french
    setFr() {
      (this.ru = false),
        (this.ch = false),
        (this.sp = false),
        (this.en = false);
      this.fr = true;
      console.log("French");
    },
    // set chinese
    setCh() {
      (this.ru = false),
        (this.sp = false),
        (this.fr = false),
        (this.en = false);
      this.ch = true;
      console.log("Chinese");
    },
    // set spanish
    setSp() {
      (this.ru = false),
        (this.ch = false),
        (this.fr = false),
        (this.en = false);
      this.sp = true;
      console.log("Spanish");
    },
    // set russian
    setRu() {
      (this.ch = false),
        (this.sp = false),
        (this.fr = false),
        (this.en = false);
      (this.ru = true), console.log("Russian");
    },
  },
};
</script>
<style scoped>
.btn-success {
  margin: 0.2%;
}
ul {
  list-style: none;
}
.card {
  background-color: rgb(186, 243, 186);
}
</style>