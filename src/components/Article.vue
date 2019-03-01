<template>
  <div class="ARticle" @click="run">
    <div class="Article">
      <div class="imgs">
        <img src="../common/1.jpg" alt>
      </div>
      <p>朱莉生活日记</p>
    </div>
    <div class="bn">
      <img src="../common/2.jpg" alt>
    </div>
    <p class="Ap">【生活百科】 味精对身体是否有害呢？现在来带
      <br>你一探究竟~
    </p>
    <div class="Apt">
      <p>浏览 23022</p>
      <div class="rt">
        <i class="iconfont icon-fenxiang"></i>&nbsp分享
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
      run(){
      this.$router.push('./Find_q')
    }
  }
};
</script>
<style lang="less" scoped>
.ARticle {
  padding-left: 3%;
  padding-right: 3%;
  .Article {
    width: 100%;
    height: 40px;
    display: flex;

    margin-top: 15px;
    .imgs {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #f4f4f4;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    p {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-family: "Courier New", Courier, monospace;
      margin-left: 8px;
    }
  }
  .bn {
    width: 92%;
    height: 140px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .Ap {
    font-weight: 300;
  }
  .Apt {
    display: flex;
    justify-content: space-between;
    height: 100%;
    border-bottom: 1px solid #c4c4c4;
    box-sizing: border-box;
    p {
      color: #c4c4c4;
      font-size: 12px;
    }
    .rt {
      display: flex;
      align-items: center;
      color: #c4c4c4;
      font-size: 12px;
    }
  }
}
</style>
