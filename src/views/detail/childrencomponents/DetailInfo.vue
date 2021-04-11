<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
      <div class="info-desc">
          <h4>{{detailInfo.desc}}</h4>
      </div>
      <div class="info-key">
          <h5 v-if="detailInfo.detailImage[0].desc">{{detailInfo.detailImage[0].desc}}</h5>
          <h5>{{detailInfo.detailImage[0].key}}</h5>
      </div>
      <img v-for="item in detailInfo.detailImage[0].list" :key="item" :src="item" alt="" @load="imgLoaded">
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imgLoaded() {
            this.$emit('imgLoaded')
        }
    }
  }
</script>

<style scoped>
  .detail-info img {
      width: 100%;
  }
  .detail-info .info-desc {
      margin-top: 20px;
  }
  .detail-info .info-key {
      margin: 10px 0;
  }
</style>