<template>
  <div id="app">
    <!-- Nav var -->
    <Navbar @search="search"></Navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <Card @newItemAdded="addSelectedItem" :items="items"></Card>
        </div>

        <div class="col-sm-3">
          <SelectedItem @removeSelectedIndex="removeSelectedItem" :selectedItem="selectedItem"></SelectedItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Item from "./components/Item";
import data from "./data.js";

export default {
  components: {
    Navbar,
    Card,
    SelectedItem: Item
  },
  data() {
   return {
     items: [],
     itemMain: [],
     selectedItem: []
   }
  },
  mounted() {
    this.items = data;
    this.itemMain = data;
  },
  methods: {
    search(product){
      this.items = this.itemMain.filter(item => {
        return item.title.toLowerCase().indexOf(product.toLowerCase()) !== -1
      })
    },
    addSelectedItem(item){
      this.selectedItem.push(item);
    },
    removeSelectedItem(index){
      this.selectedItem.splice(index,1);
    }
  }
};
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
