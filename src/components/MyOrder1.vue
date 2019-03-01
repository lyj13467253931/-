<template>
  <van-nav-bar
    title="我的订单"
    left-text
    left-arrow
    right-text="开发票"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  ></van-nav-bar>
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
      this.$router.push('./Draw');
    }
  }
};
</script>
<style scoped>
div.van-nav-bar.van-hairline--bottom {
  width: 100%;
}
i.van-icon.van-icon-arrow-left.van-nav-bar__arrow {
  color: #323233;
}
div.van-nav-bar__title.van-ellipsis {
  font-size: 20px;
}
span.van-nav-bar__text {
  color: #323233;
}
</style>
