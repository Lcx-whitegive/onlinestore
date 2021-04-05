<template>
  <div class="tabbar-item" @click="itemClick">
      <div v-if="!isActive">
          <slot name='itemIcon'></slot>
      </div>
      <div v-else>
          <slot name='itemIconActive'></slot>
      </div>
      <div class="item-name" :style=isActiveColor>
          <slot name="itemName"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
        return {
            
        }
    },
    props: {
        link: {
            type: String
        },
        itemNameActiveColor: {
            type: String,
            default: 'green'
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.link) !== -1
        },
        isActiveColor() {
            return this.isActive ? {color: this.itemNameActiveColor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.link)
        }
    }
  }
</script>

<style scoped>
    .tabbar-item {
        flex: 1;
        text-align: center;
    }
    .tabbar-item img {
        width: 24px;
        vertical-align: middle;
    }
    .tabbar-item .item-name {
        margin-top: 5px;
        font-size: 16px;
        color: black;
    }
</style>