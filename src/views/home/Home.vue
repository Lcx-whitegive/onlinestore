<template>
  <div>
      <nav-bar class="nav-bar">
        <template #center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <home-swiper :banners='banners'></home-swiper>
      <home-recommend :recommends='recommends'/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrencomponents/HomeSwiper'
import HomeRecommend from './childrencomponents/HomeRecommend'
import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Home',
    components: { NavBar, HomeSwiper, HomeRecommend },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata()
        .then(res=>{
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #ff5777;
    color: #fff;
  }  
</style>