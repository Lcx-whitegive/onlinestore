<template>
  <div>
      <cart-list-item v-for="item in $store.state.cart.cartList" :key="item.iid" :product='item'/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

  export default {
    name: 'CartList',
    components: { CartListItem },
  }
</script>

<style scoped>
</style>