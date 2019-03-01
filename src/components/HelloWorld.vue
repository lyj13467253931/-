<template>
  <div>
    <div class="hello">
      <div v-for="(item,index) in items" :key="index">
        <div class="quire">
          <p class="red"> {{item.red}}</p>
          <p class="more"> | {{item.moe}}</p>
        </div>
        <img :src="item.src" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
     return {
       items:[
         {src:require('@/assets/one.png'),red:"会员专享价",moe:"省心又省钱"},
         {src:require('@/assets/one.png'),red:"积分加倍",moe:"轻兑换商品"},
         {src:require('@/assets/one.png'),red:"共享会员",moe:"邀请好友领取"},
         {src:require('@/assets/one.png'),red:"会员专享价",moe:"省心又省钱"}    
       ]
     }
   }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .red {
      font-size: 14px;
      color: #845329;
      margin-top: 20px;
       margin-right: 2px;
    }
    .more {
      font-size: 10px;
      color: #474245;
      margin-top: 20px;
   
    }
    .quire {
      margin-left: 5px;
      display: flex;
      border-bottom: 1px solid #fff;
    }
    img{
      width: 100%;
    }
</style>
