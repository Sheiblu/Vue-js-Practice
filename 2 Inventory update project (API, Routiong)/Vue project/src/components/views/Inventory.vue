<template>
  <div v-if="!loading" class="row">
    <div v-for="(item, index) in items" :key="index" class="card">
      <router-link tag="div" :to="{path: '/ItemDetails/'+item.id}">
        <img :src="item.photo" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
        </div>
      </router-link>
      <div class="card-footer">
        <span class="card-text">{{item.price}}</span>
        <a @click="addToSelectedItem(item)" class="btn btn-primary">+ Add</a>
      </div>
    </div>
  </div>
  <h2 v-else>Loading...</h2>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true
    };
  },
  methods: {
    addToSelectedItem(item) {
      this.$store.commit('addToCard',item);
    },
    fetchInventory() {
      let self = this;
      axios.get("http://localhost:3000/data").then(res => {
        self.$store.commit('setInventory', res.data)
        self.loading = false;
      });
    }
  },
  computed: {
    items(){
      return this.$store.getters.getInventory
    }
  },
  mounted() {
    this.fetchInventory();
  }
};
</script>

<style>
.card {
  padding-left: 10px;
  padding-top: 10px;
}
</style>