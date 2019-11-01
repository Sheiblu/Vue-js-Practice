<template>
  <div v-if="!loading" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="photo">
    </div>

    <div class="col-sm-6">
      <h1> {{item.title}} </h1>
      <p> this is a title. CDEscription </p>
      <div class="card- footer">
        <span class="card-text">Price: {{item.price}}</span> 
      <button @click="addToSelectedItem(item)" class="btn btn-sm btn-primary float-right" >
      + add</button>
      </div>

    </div>
  </div>
  <h1 v-else> Loading </h1>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item: null,
      loading: true
    };
  },
  methods: {
    fetchItem() {
      let self = this;
      axios
        .get("http://localhost:3000/DataById/?id=" + this.$route.params.id)
        .then(res => {
          self.item = res.data;
          self.loading = false;
        });
    },
    addToSelectedItem(item){
      this.$store.commit('addToCard',item);
    }
  },
  mounted() {
    this.fetchItem()
  },
};
</script>

<style>
</style>