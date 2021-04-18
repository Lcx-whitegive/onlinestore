<template>
  <div cart-bottom-bar>
    <div>
      <input type="checkbox" v-model="$store.state.cart.isAllChecked" @click="allCheckedClick">
      总计: ￥{{$store.getters.cartListCount}}
      </div>
    <div>去结算({{$store.getters.cartListCheckedLength}})</div>
  </div>
</template>

<script>
  import mutationTypes from 'store/mutationTypes'

  export default {
    name: 'CartBottomBar',
    methods: {
      // allCheckClick(event) {
      //   this.$bus.$emit('allCheckClick', event.target.checked)
      // }
      allCheckedClick() {
        this.$store.commit({
          type: mutationTypes.ALLCHECKEDCHANGE
        })
      }
    },
    mounted() {
      // this.$bus.$on('itemCheckClick', (isAllChecked) => {
      //   console.log(isAllChecked);
      //   this.$refs.allCheck.checked = isAllChecked
      // })
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
      display: flex;
      height: 50px;
      background-color: #fff;
  }
  .cart-bottom-bar div {
      flex: 1;
      line-height: 50px;
      text-align: center;
  }
  .cart-bottom-bar div:first-child {
      background-color: yellow;
      color: black;
  }
    .cart-bottom-bar div:last-child {
      background-color: #ff5777;
      color: #fff;
  }
</style>