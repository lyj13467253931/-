<template>
  <div>
    <van-nav-bar title="开票历史" left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="two">
      <img src="../assets/MyOrder.png" alt>
      <span class="top">咦？</span>
      <span class="bottom">这里没有可以开发票的历史记录呢~</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.go(-1);
    }
  }
};
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