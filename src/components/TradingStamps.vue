<template>
  <div class="box">
    <van-nav-bar
      title="商品券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed='true'
    />
    <div class="shopping">
        <span style="margin-left:10px">不使用券</span>
        <van-checkbox v-model="checked" style="margin-right:10px"></van-checkbox>
    </div>
    <div class="photo">
        <img src="../assets/未标题-9.jpg" alt="" style="width:370px;height:300px">
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            checked:true
        }
    },
    methods:{
       onClickLeft(){
           this.$router.back(-1)
       } 
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
        background: #f7f7f7;
        height: 600px;
    }
    .shopping{
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        background: white;
        display: flex;
        justify-content: space-between;

    }
    .photo{
        width: 100%;
        height: 530px;
        background: white;
        padding-top: 115px;
        box-sizing: border-box;
    }
</style>
