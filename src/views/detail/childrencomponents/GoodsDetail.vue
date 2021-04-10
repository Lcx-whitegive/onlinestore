<template>
  <div v-if="Object.keys(goods).length !== 0" class="goods-detail">
      <h4>{{goods.title}}</h4>
      <div class="price">
          <span>{{goods.price}}</span>
          <span class="old-price">{{goods.oldPrice}}</span>
          <span :style="{'background-color': goods.discountBgColor}">{{goods.discountDesc}}</span>
      </div>
      <div class="other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="services">
          <div v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsDetail',
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }
  }
</script>

<style scoped>
  .goods-detail {
      padding: 8px 3px 15px;
  }
  .price {
      display: flex;
      justify-content: left;
      margin-top: 10px;
      height: 35px;
      line-height: 35px;
      text-align: center;
  }
  .price span {
      margin-right: 8px;
  }
  .price span:first-child {
      font-size: 20px;
      color: #ff5777;
  }
  .price span:last-child {
      padding: 4px;
      height: 20px;
      line-height: 12px;
      color: #fff;
      border-radius: 6px;
      font-size: 12px;
  }
  .price .old-price {
      font-size: 14px;
      text-decoration: line-through;
  }
  .other {
      display: flex;
      padding: 0 3px 8px;
      margin-top: 13px;
      justify-content: space-between;
      border-bottom: 2px solid #dedede;
  }
  .other span {
      flex: 1;
      text-align: center;
      font-size: 14px;
  }
  .other span:first-child {
      text-align: left;
  }
  .other span:last-child {
      text-align: right;
  }
  .services {
      display: flex;
      padding: 0 3px 15px;
      margin-top: 10px;
      border-bottom: 2px solid #dedede;
      text-align: center;
      font-size: 15px;
      justify-content: space-between;
  }
  .services div {
      flex: 1;
      height: 20px;
      font-size: 13px;
      text-align: center;
      line-height: 20px;
  }
  .services div:first-child {
      text-align: left;
  }
  .services div:last-child {
      text-align: right;
  }
  .services img {
      width: 15px;
      vertical-align: text-top;
  }
</style>