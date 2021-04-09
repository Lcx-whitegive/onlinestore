<template>
  <div class="goods-list-item" @click="toDetail">
    <img :src="goodsItem.show.img" alt="" @load="imgLoaded">
    <p>{{goodsItem.title}}</p>
    <p>
        <span class="price">{{goodsItem.price}}</span>
        <span>{{goodsItem.cfav}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
      imgLoaded() {
        this.$bus.$emit('imgLoaded')
      },
      toDetail() {
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
      width: 49%;
  }
  .goods-list-item img {
      width: 100%;
      height: 200px;
  }
  .goods-list-item p {
      height: 24px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
  }
  .price {
      margin-right: 5px;
      color: pink;
  }
</style>