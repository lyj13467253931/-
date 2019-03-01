<template>
  <van-tabs animated swipeable>
    <van-tab title="精选" class="A">
      <van-swipe @change="onChange" class="swipe" :autoplay="3000">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>      
      </van-swipe>
      <Article ></Article>
      <Article ></Article>
      <Article ></Article>
    </van-tab>
    <van-tab title="快手食谱">
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </van-tab>
    <van-tab title="甜点饮品">
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </van-tab>
    <van-tab title="生活百科">
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </van-tab>
  </van-tabs>
</template>
<script>
import Article from "../components/Article";

export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    run(){
      this.$router.push('./Find_q')
    }
  },
  components: {
    Article
  }
};
</script>
<style lang="less" scoped>
.A {
    height:100%;
  .swipe {
    width: 92%;
    height: 100px;
    background: skyblue;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 10px;
  }
}
</style>

