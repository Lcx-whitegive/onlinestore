<template>
  <div class="cart-list-item">
      <input type="checkbox" v-model="product.isChecked" @click="singleCheckedClick(product.iid)">
      <img :src="product.image" alt="" @load='cartImgLoaded'>
      <h4>{{product.title}}</h4>
      <div>{{product.price}} &nbsp; 
         数量: 
        <button @click="decrement(product.iid)">-</button>
       {{product.amount}}
        <button @click="increment(product.iid)">+</button>
        </div>
  </div>
</template>

<script>
  import actionTypes from 'store/actionTypes'
  import mutationTypes from 'store/mutationTypes'

  export default {
    name: 'CartListItem',
    props: {
        product: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
      cartImgLoaded() {
        this.$bus.$emit('cartImgLoaded')
      },
      increment(iid) {
        this.$store.dispatch({
          type: actionTypes.INCREMENTAMOUNT,
          iid
        })
      },
      decrement(iid) {
        this.$store.dispatch({
          type: actionTypes.DECREMENTAMOUNT,
          iid
        })
      },
      singleCheckedClick(iid) {
        this.$store.commit({
          type: mutationTypes.SINGLECHECKEDCHANGE,
          iid
        })
      }
      // itemCheckClick() {
      //   const isAllChecked = this.$refs.itemCheck.every(item => item.checked == true)
      //   this.$bus.$emit('itemCheckClick', isAllChecked)
      // }
    },
    // mounted() {
    //   this.$bus.$on('allCheckClick', (isChecked) => {
    //     this.$refs.itemCheck.checked = isChecked
    //   })
    // }
  }
</script>

<style scoped>
  .cart-list-item img {
      width: 100%;
      height: 200px;
  }
  button {
    width: 20px;
    height: 20px;
  }
</style>