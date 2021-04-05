<template>
  <div id="app">
    <main-tab-bar />
    <router-view/>
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
  }
</style>
