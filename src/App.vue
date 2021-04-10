<template>
  <div id="app">
    <main-tab-bar />
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from './components/content/maintabbar/MainTabBar'
  export default {
  components: { MainTabBar },
    name: 'app'
  }
</script>

<style>
  @import 'assets/css/base.css';
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
</style>
