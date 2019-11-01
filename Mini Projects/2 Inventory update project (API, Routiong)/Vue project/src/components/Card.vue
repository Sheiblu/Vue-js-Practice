<template>
  <div>
    <h3>Selected Item</h3>
    <ul class="list-group">
      <li class="list-group-item">Name - Price</li>
      <li v-for="(item, index) in selectedItem" :key="index" class="list-group-item">
        <span class="item-name">{{item.title}}:</span>
        <button
          @click="removeItem(index)"
          class="btn btn-sm btn-danger float-right"
          style="margin-left: 10px"
        >-</button>
        <span class="item-price float-right">{{item.price}}</span>
      </li>
      <hr />
      <li class="list-group-item">Total: {{total}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    selectedItem() {
      return this.$store.getters.getCard;
    },
    total() {
      var total = 0;
      this.selectedItem.forEach(item => {
        total += parseFloat(item.price);
      });
      return total.toFixed(2);
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit("removeToCard", index);
    }
  }
};
</script>

<style>
</style>