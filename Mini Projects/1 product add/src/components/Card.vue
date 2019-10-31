<template>
  <div class="row">
    <div v-for="(item, index) in items" :key="index" class="card">
      <img
        :src="item.photo"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p
          class="card-text">{{item.price}}</p>
        <a  @click="addToSelectedItem(item)" class="btn btn-primary">+ Add</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props : ['items'],
    methods: {
        addToSelectedItem(item) {
            this.$emit('newItemAdded', item);
        }
    }
};
</script>

<style>
.card {
    padding-left: 10px;
    padding-top: 10px;
}
</style>