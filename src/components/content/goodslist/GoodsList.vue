<template>
  <div class="goods-list">
      <goods-list-item v-for="item in goodsList" :key="item.acm" :goodsItem='item'/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'

  export default {
  components: { GoodsListItem },
    name: 'GoodsList',
    props: {
        goodsList: {
            type: Array,
            default() {
                return []
            }
        }
    }
  }
</script>

<style scoped>
  .goods-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 8px;
  }
</style>