<template>
  <div>
      <swiper>
        <swiper-item v-for="item in banners" :key="item" class="swiper-item">
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper'
  import SwiperItem from 'components/common/swiper/SwiperItem'

  export default {
    name: 'DetailSwiper',
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
     
    }
  }
</script>

<style scoped>
  .swiper-item {
      height: 200px;
      overflow: hidden;
  }
</style>