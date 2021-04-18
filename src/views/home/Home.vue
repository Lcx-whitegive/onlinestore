<template>
  <div class="home">
      <nav-bar class="nav-bar">
        <template #center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <tab-control 
        ref="tabControlTop"
        :titles="['流行', '新款', '精选']" 
        class="tab-control"
        @changeTab='changeTab'
        v-show="isShowTabControl"
        ></tab-control>
      <scroll class="content" 
        @scroll="scroll"
        @pullingUp='pullingUp'
        :pullUpLoad='true'
        :probeType='3'
        ref="scroll"
      >
        <home-swiper :banners='banners' class="home-swiper"></home-swiper>
        <home-recommend :recommends='recommends'/>
        <feature></feature>
        <tab-control 
        :titles="['流行', '新款', '精选']" 
        @changeTab='changeTab'
        ref="tabControl"
        ></tab-control>
        <goods-list :goodsList="currentGoodsList"/>
      </scroll>
      <back-top class="back-top" v-show="isShowBackTop" @click.native="backToTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childrencomponents/HomeSwiper'
import HomeRecommend from './childrencomponents/HomeRecommend'
import Feature from './childrencomponents/Feature'

import { debounce } from 'common/utils'

import { getHomeMultidata, getHomeGoods } from 'network/home'

import { backToTop } from 'common/mixins'

  export default {
    name: 'Home',
    components: { NavBar, HomeSwiper, HomeRecommend, Feature, TabControl, GoodsList, Scroll },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page:0,
            list: []
          },
          'new': {
            page:0,
            list: []
          },
          'sell': {
            page:0,
            list: []
          }
        },
        currentType: 'pop',
        isShowTabControl: false,
      }
    },
    computed: {
      currentGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata()
        .then(res=>{
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page)
        .then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = res.data.page
          //重置上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      },
      changeTab(index) {
        this.$refs.tabControlTop.currentIndex = index
        this.$refs.tabControl.currentIndex = index
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break  
        }
      },
      scroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        this.isShowTabControl = (-position.y) > this.$refs.tabControl.$el.offsetTop
      },
      pullingUp() {
        // console.log(this.goods[this.currentType].page);
        // console.log("上拉加载更多");
        this.getHomeGoods(this.currentType)
      },
    },
    mounted() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on('imgLoaded', () => {
        refresh()
      })
    },
    mixins: [backToTop]
  }
</script>

<style scoped>
  .nav-bar {
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100; */
    background-color: #ff5777;
    color: #fff;
  }  
  .home {
    position: relative;
    height: 100vh;
    /* padding: 44px 0 49px 0 */
  }
  .tab-control {
    position: relative;
    top: -1px;
    z-index: 100;
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