<template>
  <div class="bottom-bar">
      <div class="left">
          <div class="out">
              <div></div>
              <span>客服</span>
          </div>
          <div class="out">
              <div></div>
              <span>店铺</span>
          </div>
          <div class="out">
              <div></div>
              <span>收藏</span>
          </div>
      </div>
      <div class="right">
          <div @click="addToCart">加入购物车</div>
          <div>购买</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'BottomBar',
    methods: {
      addToCart() {
          this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
      height: 50px;
      background-color: #fff;
  }
  .bottom-bar .left, .bottom-bar .right {
      display: flex;
      width: 50%;
      height: 100%;
  }
  .bottom-bar .left .out {
      flex: 1;
      height: 100%;
      text-align: center;
  }
  .bottom-bar .left .out div {
      height: 30px;
      background: url('~assets/img/detail/detail_bottom.png') no-repeat center -108px;
      background-size: 25px;
  }
  .bottom-bar .left .out:first-child div {
      background: url('~assets/img/detail/detail_bottom.png') no-repeat center -56px;
      background-size: 25px;
  }
  .bottom-bar .left .out:last-child div {
      background: url('~assets/img/detail/detail_bottom.png') no-repeat center 5px;
      background-size: 25px;
  }
  .bottom-bar .right div {
      flex: 1;
      height: 100%;
      line-height: 50px;
      text-align: center;
  }
  .bottom-bar .right div:first-child {
      background-color: yellow;
      color: black;
  }
  .bottom-bar .right div:last-child {
      background-color: #ff5777;
      color: #fff;
  }
</style>