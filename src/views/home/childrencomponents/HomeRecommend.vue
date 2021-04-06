<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.title">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
  }
</script>

<style scoped>
  .recommend {
      display: flex;
      padding: 15px 0 20px;
      text-align: center;
      font-size: 12px;
      border-bottom: 8px solid #eee;
  }
  .recommend-item {
      flex: 1;
  }
  .recommend-item img {
      width: 68px;
      margin-bottom: 10px;
  }
</style>