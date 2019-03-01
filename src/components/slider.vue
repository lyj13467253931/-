<template>
 <div class="tab" ref="tab">
  <ul class="tab_content" ref="tabWrapper">
   <li class="tab_item" v-for="(item,index) in itemList" :key="'b'+index" ref="tabitem">
     <!-- {{item.title}} -->
     <img src="../assets/imgs/d3.jpg" alt="" style="width:100%;height:150px;">
     <div class="ctitle">{{item.title}}</div>
     <div class="decp">{{item.dec}}</div>
     <div class="cprice">{{item.price}}</div>
     <div class="cprice1">
       <span>{{item.price1}}</span>
       <i>会员8.5折</i>
       <img src="../assets/imgs/d7.png" alt="" class="cart" @click="attend">
      </div>
     <!-- <img src="../assets/imgs/d7.png" alt="" class="cart"> -->
   </li>
  </ul>
 </div>
 </template>
 <script>
 import BScroll from 'better-scroll';
 import {Toast} from 'vant';
  export default {
   data() {
    return{
     itemList:[
     {
      'title':'皇冠梨4个880g起',
      'dec':'天气这么热，吃个脆梨吧',
      'price':'￥19.9',
      'price1':'￥16.9'
     },
     {
      'title':'皇冠梨4个880g起',
      'dec':'天气这么热，吃个脆梨吧',
      'price':'￥19.9',
      'price1':'￥16.9'
     },
     {
      'title':'皇冠梨4个880g起',
      'dec':'天气这么热，吃个脆梨吧',
      'price':'￥19.9',
      'price1':'￥16.9'
     },
     {
      'title':'皇冠梨4个880g起',
      'dec':'天气这么热，吃个脆梨吧',
      'price':'￥19.9',
      'price1':'￥16.9'
     },
     {
      'title':'皇冠梨4个880g起',
      'dec':'天气这么热，吃个脆梨吧',
      'price':'￥19.9',
      'price1':'￥16.9'
     }
     ]
    }
   },
   created() {
    this.$nextTick(() => {
     this.InitTabScroll();
    });
   },
   methods:{
    InitTabScroll(){
     let width=0
     for (let i = 0; i <this.itemList.length; i++) {
       width+=this.$refs.tabitem[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
     }
     this.$refs.tabWrapper.style.width=width+'px'
     this.$nextTick(()=>{
       if (!this.scroll) {
        this.scroll=new BScroll(this.$refs.tab, {
         startX:0,
         click:true,
         scrollX:true,
         scrollY:false,
         eventPassthrough:'vertical'
        });
       }else{
        this.scroll.refresh()
       }
     });
    },
    attend() {
      Toast('已加入购物车');
    }
   }
  };
 </script>
 <style lang="less" scoped>
 .tab{
  width: 364px;
  overflow: hidden;
  padding:5px;
  white-space :nowrap;
  .tab_content{
//    line-height: 2rem;
   display: flex;
   .tab_item{
    flex: 0 0 215px;
    // width:215px;
    height:300px;
    margin-right:10px;
    background-color: #fff;
    border-radius: 5px;
    .ctitle{
      font-size: 16px;
      //  font-weight:bold;
      padding-left: 10px;
    }
    .decp{
      font-size:13px;
      margin-bottom:30px;
      padding-left: 10px;
      color:#999;
    }
    .cprice{
       font-size:12px;
       padding-left: 10px;
    }
    .cprice1{
      padding-left: 9px;
      span{
        font-size: 20px;
        color: #f24e97;
      }
      i{
        font-style: normal;
        font-size: 10px;
        color: #f24e97;
        border: 1px solid #f24e97;
        border-radius: 2px;
        text-align: center;
        line-height: 10px;
        margin-left: 2px;
        margin-right: 40px;
      }
    }
    .cart{
      // position: absolute;
      // right: 10px;
      // bottom: 0px;
      width: 46px;
      height: 42px;
      display: inline-block;
    }
   } 
  }
 } 
 </style>

