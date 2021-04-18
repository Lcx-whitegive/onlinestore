<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
        return {
            isShow: false,
            message: '',
        }
    },
    methods: {
        show(message='默认文字', duration=2000) {
            this.isShow = true
            this.message = message,
            setTimeout(() => {
                this.isShow = false
            }, duration)
        }
    }
  }
</script>

<style scoped>
  .toast {
      position: fixed;
      top: 50%;
      left: 50%;
      height: 30px;
      padding: 10px;
      background-color: rgba(0, 0, 0, .6);
      border-radius: 8px;
      transform: translateX(-50%) translateY(-50%);
      z-index: 1000;
      color: #fff;
      line-height: 10px;
  }
</style>