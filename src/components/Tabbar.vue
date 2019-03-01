<template>
  <van-tabbar v-model="active" active-color="#e8158f" class="icon" >
    <van-tabbar-item to="/Index"><i class="iconfont icon-yemian"></i>首页</van-tabbar-item>
    <van-tabbar-item to="/Classify"><i class="iconfont icon-fenleixuanzhong"></i>分类</van-tabbar-item>
    <van-tabbar-item  to ="/Find"><i class="iconfont icon-faxian"></i>发现</van-tabbar-item>
    <van-tabbar-item to="/Shop"><i class="iconfont icon-icon_huabanfuben"></i>购物车</van-tabbar-item>
    <van-tabbar-item to='/Loggin'><i class="iconfont icon-wodedangxuan  "></i>我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  }
};
</script>
<style lang="less" scoped>
    .icon{ 
        i{
            display: flex;
            flex-direction:column;
            font-size: 22px;box-sizing: border-box;
            padding-bottom: 5px;
            align-items: center;
        }

    }
</style>
