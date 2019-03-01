<template>
  <van-swipe @change="onChange">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
    <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
  </van-swipe>
</template>
<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

