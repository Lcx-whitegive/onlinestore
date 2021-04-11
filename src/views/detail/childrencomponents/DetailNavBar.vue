<template>
  <div>
      <nav-bar>
          <template #left>
              <div class="back" @click="goBack"></div>
          </template>
          <template #center>
              <ul class='tab'>
                  <li v-for="(item, index) in tabs" 
                  :key="item" 
                  @click="changeTab(index)" 
                  :class="{active: currentTabIndex == index}">{{item}}</li>
              </ul>
          </template>
      </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data() {
        return {
            tabs: ['商品', '参数', '评论', '推荐'],
            currentTabIndex: 0
        }
    },
    methods: {
        changeTab(index) {
            this.currentTabIndex = index
            this.$emit('navBarClick', index)
        },
        goBack() {
            this.$router.back()
        }
    }
  }
</script>

<style scoped>
  .back {
      height: 100%;
      background: url('~assets/img/common/back.svg') no-repeat center;
  }
  .tab {
      height: 100%;
      display: flex;
      line-height: 44px;
  }
  .tab li {
      flex: 1;
  }
  .active {
      color: #ff5777;
  }
</style>