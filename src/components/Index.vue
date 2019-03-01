<template>
  <div class="hello">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="scan" slot="right"/>
    </van-nav-bar>
    <div class="search">
      <input type="text" placeholder="汤圆" @click="seach">
    </div>
    
    <van-tabs v-model="active1" color="#ff4891" :line-width="15">
      <van-tab title="精选">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../common/1.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../common/1.png" alt="">
          </van-swipe-item>
        </van-swipe>
        <router-view></router-view>
        <div class="clearfix content">
          <div v-for="(item, index) in items" :key="index" class="product fl">
            <img :src="item.src" alt="">
            <div>
              <p>{{ item.text1 }}</p>
              <p class="text2">{{ item.text2 }}</p>
            </div>
            <div class="price">
              <span class="weight">{{ item.price }}</span>
              <span @click="add(index)" v-show="item.append" class="shop1"><van-icon name="cart-circle" color="#ff4891" size="25px" /></span>
              <!-- <van-stepper v-model="value" /> -->
              <div class="shopcar" v-show="item.appear">
                <button @click="decres(index)" class="check1 check">-</button>
                <input type="text" v-model="item.value">
                <button @click="incres(index)" class="check">+</button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="熟食">
        <Snack></Snack>
      </van-tab>
      <van-tab title="上新">内容 4</van-tab>
      <van-tab title="水果">内容 3</van-tab>
      <van-tab title="蔬菜">内容 4</van-tab>
      <van-tab title="肉食">内容 4</van-tab>
      <van-tab title="粮油">内容 4</van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import Snack from './Snack'
export default {
  name: "Index",
  data() {
    return {
      active1: 0,
      active: 2,
      items:[
        {
         src:require('../common/2.png'),
         text1: '【新人】烟台富士185..' ,
         text2:'天生耿直boy 让你一口脆...',
         price:'￥9.9',
         value:1,
         appear:false,
         append:true
        },
        {
         src:require('../common/2.png'),
         text1: '【新人】烟台富士185..' ,
         text2:'天生耿直boy 让你一口脆...',
         price:'￥9.9',
         value:1,
         appear:false,
         append:true
        },
        {
         src:require('../common/2.png'),
         text1: '【新人】烟台富士185..' ,
         text2:'天生耿直boy 让你一口脆...',
         price:'￥9.9',
         value:1,
         appear:false,
         append:true
        },
        {
         src:require('../common/2.png'),
         text1: '【新人】烟台富士185..' ,
         text2:'天生耿直boy 让你一口脆...',
         price:'￥9.9',
         value:1,
         appear:false,
         append:true
        }
      ]
    };
  },
  components:{
    Snack
  },
 
  methods:{
    add(index){
      this.items[index].appear = true;
      this.items[index].append = false;
    },
    incres(index){
      this.items[index].value++
    },
    decres(index){
      this.items[index].value--;
      if(this.items[index].value==0){
        this.items[index].append = true
        this.items[index].appear = false;
        this.items[index].value = 1;
        

      }
    },
    seach(){
      this.$router.push('/Seach')
    }
  },
  mounted(){
    this.$http({
      url:this.$path.position,
      method:'get',
      params:{
        latitude:11,
        longitude:22
      }
    }).then(res => {
      console.log(res)
    }).catch(res => {
      console.log(res)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop1{
  width: 75px;
  height: 22px;
  padding-left: 5px;
  box-sizing: border-box
}
.check{
  width:17px;
  height: 17px;
  background: #ff4891;
  color: #fff;
  border: none;
  /* font-weight: bold; */
  font-size:17px;
  text-align: center;
  line-height: 17px;
  border-radius: 50%;
  box-sizing: border-box

}
.check1{
  color: #ff4891;
  background: #fff;
  border: 1px solid #c6c6c6;
}
input{
  width: 20px;
  border: none;
  background: #fff;
  height: 15px;
  font-size:15px;
  border-radius: 0px;
  padding: 0;
  text-align: center;
  line-height: 15px;
}
.shopcar{
  width: 75px;
  height: 22px;
  /* background: red; */
}
.icon {
  margin-bottom: 10px;
}
.iconfont {
  font-size: 20px;
}
.search input{
  border: none;
  width: 280px;
  height: 30px;
  background: url(../common/3.png) no-repeat 10px #f0f0f0;
  background-size: 17px 17px;
  border-radius: 20px;
  box-sizing: border-box;
  padding-left: 35px;
  line-height: 30px;
  margin-left:12%;
}
.van-nav-bar {
  margin-bottom: 10px;
}
.active {
  font-size: 20px;
  font-weight: bold;
}
img{
  width:100%;
}
.product{
  width:49%;
  font-size: 14px;
  color: #474245;
  line-height: 20px;
  padding:0 5px 0 5px;
  box-sizing: border-box;
  /* margin-bottom: 60px; */
  border-radius: 10px;
}
.text2{
  font-size: 12px;
  color: #9a9a9a;
  margin-bottom: 5px;
}
.price{
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  box-sizing: border-box;margin-left: 14px;margin-bottom: 10px;
}
.weight{
  font-weight: bold;
  padding-top: 3px;
  box-sizing: border-box
}
.car{
  background: #ff4891;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  font-size:19px;
  margin-bottom: 10px;
}
.content{
  margin-bottom: 60px;
  background: #f8f8f8;
  padding-top: 15px;
  box-sizing: border-box
}
</style>
