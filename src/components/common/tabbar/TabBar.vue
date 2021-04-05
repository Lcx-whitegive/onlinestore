<template>
  <div class="tabbar">
      <slot></slot>
  </div>    
</template>

<script>
  export default {
    name: 'TabBar',
  }
</script>

<style scoped>
  .tabbar {
      display: flex;
      height: 49px;
      background-color: #ccc;
  }
</style>