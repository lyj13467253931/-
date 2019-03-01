<template>
    <div>
        <div class="head">
             <div></div>
             <span>男朋友。</span>
        </div>
        <van-tabs v-model="active">
            <van-tab title="标签 1" style="margin:4rem auto;text-align: center;font-size:0.4rem;">暂无订单</van-tab>
            <van-tab title="标签 2" style="margin:4rem auto;text-align: center;font-size:0.4rem;">暂无订单</van-tab>
            <van-tab title="标签 3" style="margin:4rem auto;text-align: center;font-size:0.4rem;">暂无订单</van-tab>
            <van-tab title="标签 4" style="margin:4rem auto;text-align: center;font-size:0.4rem;">暂无订单</van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default{
    components:{
      
    },
      data() {
    return {
      active: 0
    };
  }
}
</script>
<style lang="less" scoped> 
.head{
    width: 100%;
    height: 3.5rem;
    background:#fe5447; 
    position: relative;
    div{
        width: 80px;
        height: 80px;
        background:#fff;
        position: absolute;top: 50px;left: 30px;
        border-radius: 50%;
    } 
    span{
        font-size: 16px;
        position: absolute;bottom: 30px;left:120px;
    }
}

</style>
