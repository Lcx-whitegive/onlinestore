<template>
  <div>
    <tab-bar class="tabbar">
      <tab-bar-item link="/home" itemNameActiveColor="deeppink">
        <template #itemIcon>
          <img src="~assets/img/tabbar/home.png" alt="" />
        </template>
        <template #itemIconActive>
          <img src="~assets/img/tabbar/home-active.png" alt="" />
        </template>
        <template #itemName>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/category" itemNameActiveColor="deeppink">
        <template #itemIcon>
          <img src="~assets/img/tabbar/category.png" alt="" />
        </template>
        <template #itemIconActive>
          <img src="~assets/img/tabbar/category-active.png" alt="" />
        </template>
        <template #itemName>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/cart" itemNameActiveColor="deeppink">
        <template #itemIcon>
          <img src="~assets/img/tabbar/cart.png" alt="" />
        </template>
        <template #itemIconActive>
          <img src="~assets/img/tabbar/cart-active.png" alt="" />
        </template>
        <template #itemName>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/profile" itemNameActiveColor="deeppink">
        <template #itemIcon>
          <img src="~assets/img/tabbar/profile.png" alt="" />
        </template>
        <template #itemIconActive>
          <img src="~assets/img/tabbar/profile-active.png" alt="" />
        </template>
        <template #itemName>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>