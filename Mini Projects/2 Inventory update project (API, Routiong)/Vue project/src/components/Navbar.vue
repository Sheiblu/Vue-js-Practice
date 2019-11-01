<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{path: '/'}">Fast Damo</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form @submit="submit" class="form-inline my-2 my-lg-0">
        <input
          v-model="productName"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productName: ""
    };
  },
  methods: {
    submit() {
      var self = this;
      axios
        .get("http://localhost:3000/DataSearch/?search=" + this.productName)
        .then(res => {
          self.$store.commit("setInventory", res.data);
        });
    }
  }
};
</script>

<style scoped>
</style>