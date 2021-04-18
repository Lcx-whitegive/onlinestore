<template>
  <div>
      <nav-bar class="nav-bar">
        <template #center>
          <div>购物车({{$store.getters.cartListLength}})</div>
        </template>
      </nav-bar>
      <scroll
        :pullUpLoad='true'
        :probeType='3'
        ref="scroll"
        class="content"
      >
        <cart-list />
      </scroll>
      <cart-bottom-bar class="cart-bottom-bar"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartList from './childrencomponents/CartList'
  import CartBottomBar from './childrencomponents/CartBottomBar'

  export default {
    name: 'Cart',
    components: { NavBar, CartList, Scroll, CartBottomBar },
    mounted() {
      this.$bus.$on('cartImgLoaded', () => {
        this.$refs.scroll.refresh()
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #ff5777;
    color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .cart-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;
  }
</style>