<template>
  <div>
    <van-tabbar v-model="active" active-color="#ff0e64" style="z-index:333;">
      <van-tabbar-item icon="home-o" to="/tab">首页拼团</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my_w">我的拼团</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name:'bottom',
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style>
</style>

