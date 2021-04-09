<template>
  <div class="detail">
      <detail-nav-bar />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import DetailNavBar from './childrencomponents/DetailNavBar.vue'

  export default {
    name: 'Detail',
    components: {
         NavBar,
         DetailNavBar
    },
}
</script>

<style scoped>
  
</style>