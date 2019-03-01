<template>
    <div>
        <van-nav-bar title="按订单开票" left-text="" left-arrow right-text="开票历史"  @click-left="onClickLeft"
  @click-right="onClickRight">
  </van-nav-bar>
        <div class="two">
          <img src="../assets/MyOrder.png" alt>
          <span class="top">这里没有相关记录呦</span>
          <span class="bottom">想吃啥快点下一单！</span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
    onClickLeft() {
    //   Toast("返回");
    this.$router.go(-1);
    },
    onClickRight() {
    //   Toast("按钮");
    this.$router.push('./Draw1');

    }
  }
}
</script>
<style  lang="less">
  .two{
    text-align: center;
    img{
      width: 100%;
      margin-top:80px;
    }
    .top{
      color:#ce9fa7;
      display: block;
    }
    .bottom{
      color:#e2869b;
      font-size:18px;
    }
  }
</style>
