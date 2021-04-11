<template>
  <div class="detail">
      <detail-nav-bar @navBarClick="navBarClick" ref="navBar"/>
      <scroll 
      class="content"
      :pullUpLoad='true'
      :probeType='3'
      ref="scroll"
      @scroll="scroll"
      >
        <detail-swiper :banners="banners"/>
        <goods-detail :goods="goods"/>
        <shop-detail :shop="shop" @logoLoaded='logoLoaded'/>
        <detail-info :detailInfo="detailInfo" @imgLoaded="imgLoaded"/>
        <goods-parameters ref="parameters"/>
        <goods-comments ref="comments"/>
        <goods-recommends ref="recommends"/>
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
  import DetailInfo from './childrencomponents/DetailInfo'
  import GoodsRecommends from './childrencomponents/GoodsRecommends'
  import GoodsComments from './childrencomponents/GoodsComments'
  import GoodsParameters from './childrencomponents/GoodsParameters'

  import { getGoodsDetail, Goods, Shop } from 'network/detail'



  export default {
    name: 'Detail',
    components: {
         NavBar,
         DetailNavBar,
         DetailSwiper,
         GoodsDetail,
         ShopDetail,
         Scroll,
         DetailInfo,
         GoodsRecommends,
         GoodsParameters,
         GoodsComments
    },
    data() {
      return {
        iid: this.$route.query.iid,
        banners: [],
        goods: {},
        shop: {},
        detailInfo: {},
        scrollY: 0,
        currentIndex: 0
      }
    },
    methods: {
      getGoodsDetail(iid) {
        getGoodsDetail(iid)
          .then(res=>{
            console.log(res);
            const data = res.result
            this.banners = data.itemInfo.topImages
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            this.shop = new Shop(data.shopInfo)
            this.detailInfo = data.detailInfo
          })
      },
      logoLoaded() {
        this.$refs.scroll.refresh()
      },
      imgLoaded() {
        this.$refs.scroll.refresh()
      },
      navBarClick(index) {
        switch (index) {
          case 0:
            this.scrollY = 0  
            break;
          case 1:
            this.scrollY = -this.$refs.parameters.$el.offsetTop  
            break;
          case 2:
            this.scrollY = -this.$refs.comments.$el.offsetTop  
            break;
          case 3:
            this.scrollY = -this.$refs.recommends.$el.offsetTop  
            break;
        }
        this.$refs.scroll.scrollTo(0, this.scrollY, 500)
      },
      scroll(position) {
        const y = -position.y
        if(y >= 0 && y < this.$refs.parameters.$el.offsetTop){
          this.currentIndex = 0
          this.$refs.navBar.currentTabIndex = this.currentIndex
        }
        if(y >= this.$refs.parameters.$el.offsetTop && y < this.$refs.comments.$el.offsetTop){
          this.currentIndex = 1
          this.$refs.navBar.currentTabIndex = this.currentIndex
        }
        if (y >= this.$refs.comments.$el.offsetTop && y < this.$refs.recommends.$el.offsetTop){
          this.currentIndex = 2
          this.$refs.navBar.currentTabIndex = this.currentIndex
        }
        if(y >= this.$refs.recommends.$el.offsetTop){
          this.currentIndex = 3
          this.$refs.navBar.currentTabIndex = this.currentIndex
        }
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