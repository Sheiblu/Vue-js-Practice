<template>
  <div id="app">
    
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view> </router-view>
        </div>

        <div class="col-sm-3">
          <SelectedCardItem></SelectedCardItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default {
  components: {
    Navbar,
    SelectedCardItem: Card
  },
};
</script>

<style>
.container {
  padding-top: 10px;
}
</style>
