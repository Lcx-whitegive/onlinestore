<template>
  <div class="detail">
      <detail-nav-bar />
      <scroll 
      class="content"
      :pullUpLoad='true'
      :probeType='3'
      ref="scroll"
      >
        <detail-swiper :banners="banners"/>
        <goods-detail :goods="goods"/>
        <shop-detail :shop="shop" @logoLoaded='logoLoaded'/>
      </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from '../../components/common/scroll/Scroll.vue'

  import DetailNavBar from './childrencomponents/DetailNavBar'
  import DetailSwiper from './childrencomponents/DetailSwiper'
  import GoodsDetail from './childrencomponents/GoodsDetail'
  import ShopDetail from './childrencomponents/ShopDetail'

  import { getGoodsDetail, Goods, Shop } from 'network/detail'


  export default {
    name: 'Detail',
    components: {
         NavBar,
         DetailNavBar,
         DetailSwiper,
         GoodsDetail,
         ShopDetail,
         Scroll
    },
    data() {
      return {
        iid: this.$route.query.iid,
        banners: [],
        goods: {},
        shop: {}
      }
    },
    methods: {
      getGoodsDetail(iid) {
        getGoodsDetail(iid)
          .then(res=>{
            const data = res.result
            this.banners = data.itemInfo.topImages
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
          })
      },
      logoLoaded() {
        this.$refs.scroll.refresh()
      }
    },
    mounted() {
      this.getGoodsDetail(this.iid)
    }
}
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>