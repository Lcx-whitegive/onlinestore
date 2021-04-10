<template>
  <div class="shop-detail">
      <div class="shop-logo">
          <img :src="shop.logo" alt="" @load="logoLoaded">
          <span>{{shop.name}}</span>
      </div>
      <div class="shop-info">
          <div class="left">
              <div>
                  <h3>{{shop.sells}}</h3>
                  <h4>总销量</h4>
              </div>
              <div>
                  <h3>{{shop.goodsCount}}</h3>
                  <h4>全部宝贝</h4>
              </div>
          </div>
          <div class="line"></div>
          <div class="right">
              <ul>
                  <li v-for="item in shop.score" :key="item.name">
                      <span>{{item.name}} &nbsp;</span>
                      <span :style="{'color': item.isBetter ? 'red' : 'greenyellow'}">{{item.score}} &nbsp;</span>
                      <span v-if="item.isBetter" class="high">高</span>
                      <span v-else class="low">底</span>
                  </li>
              </ul>
          </div>
      </div>
      <div class="btn">
          进店逛逛
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopDetail',
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        logoLoaded() {
            console.log('---');
            this.$emit('logoLoaded')
        }
    }
  }
</script>

<style scoped>
  .shop-logo {
      height: 30px;
      padding-left: 5px;
      line-height: 30px;
  }
  .shop-logo img {
      width: 30px;
      margin-right: 5px;
      vertical-align: middle;
  }
  .shop-info {
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      height: 90px;
  }
  .left {
      display: flex;
      height: 40px;
      text-align: center;
  }
  .left div:first-child {
      margin-right: 16px;
  }
  .line {
      width: 3px;
      height: 30px;
      background-color: #ccc;
  }
  .right {
      height: 100%;
  }
  .right ul li {
      margin-bottom: 18px;
  }
  .right ul li:last-child {
      margin-bottom: 0;
  }
  .high {
      background-color: red;
  }
  .low {
      background-color: greenyellow;
  }
  .btn {
      height: 30px;
      width: 120px;
      margin: 0 auto;
      margin-top: 15px;
      background-color: #dedede;
      line-height: 30px;
      text-align: center;
      border-radius: 10px;
  }
</style>