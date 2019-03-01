<template>
    <div class="myOrder">
        <van-nav-bar title="我的订单" left-text="" right-text="开发票" left-arrow
  @click-left="onBack" @click-right="onBill"/>
        <van-tabs v-model="active" :swipe-threshold="swipeThreshold">
            <van-tab title="全部">  
                <div class="one">
                    <div class="top">
                    <img src="../assets/MyOrder1.jpg" alt>
                        <div>
                            <span class="le">{{msg}}</span>
                            <span class="ri">{{msg1}}</span>
                        </div>
                    </div>
                    <div class="center">
                        <div v-for="(item,index) in items" :key="index" class="lee">
                            <img :src="item.name" alt>
                        </div>
                        <div class="lee1">{{msg2}}</div>
                    </div>
                    <div class="bottom">
                        <div class="see" @click="see">查看详情</div>
                        </div>
                    <div class="bottom1" @click="show">已经全部加载完毕</div> 
                </div>
            </van-tab>
            <van-tab title="待付款">
                <div class="two">
                    <img src="../assets/MyOrder.png" alt>
                    <span class="top">这里没有相关记录呦</span>
                    <span class="bottom">返回上一级页面逛一逛吧~</span>
                </div>

            </van-tab>
            <van-tab title="待发货">内容 3</van-tab>
            <van-tab title="配送中">内容 4</van-tab>
            <van-tab title="待评价">内容 5</van-tab>
        </van-tabs>
    </div>

</template>
<script>
import 'vant/lib/index.css';
export default {
    name:'myOrder',
    data(){
        return{
            active:0,
            swipeThreshold:5,
            time:'2019-02-21 17:11:18'
        }
    },
    methods:{
        onBack(){
            // this.$router.push({path:'/my'})
            this.$router.push('/my')
        },
        onBill(){
            this.$router.push('/Draw')
        }
    }

}
</script>
<style lang="less" scoped>
div.van-tabs__line {
  // width: 20%!important;
  background: #ff4891;
  border-radius: 0px;
}
div.van-tab {
  color: #333;
  padding: 0;
}
div.van-tab--active {
  color: #ff4891;
}
.one {
  .top:after {
    display: block;
    content: "";
    clear: both;
  }
  .top {
    zoom: 1;
    width: 100%;
    background: #fff;
    border-top: 10px solid #f5f5f5;
    padding: 13px;
    box-sizing: border-box;
    img {
      width: 18%;
      float: left;
    }
    div {
      width: 75%;
      float: right;
      padding-left: 10%;
      box-sizing: border-box;
      .le {
        float: left;
        color: #969696;
        font-size: 14px;
      }
      .ri {
        float: right;
        color: #ff4891;
      }
    }
  }
  .center:after {
    display: block;
    content: "";
    clear: both;
  }
  .center {
    position: relative;
    zoom: 1;
    background: #fff;
    border-top: 2px solid #f5f5f5;
    border-bottom: 2px solid #f5f5f5;
    margin: 0 15px;
    padding: 15px 0 12px 0;
    box-sizing: border-box;
    .lee {
      float: left;
      display: flex;
      flex: 1;
      img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
    }
    .lee1 {
      float: right;
      position: absolute;
      bottom: 12px;
      right: 0;
    }
  }
  .bottom {
    position: relative;
    height: 70px;
    margin: 0 15px;
    .see {
      position: absolute;
      right: 0;
      bottom: 17px;
      padding: 8px 10px;
      box-sizing: border-box;
      border: 1px solid #f5f5f5;
    }
  }
  .bottom1 {
    width:100%;
    text-align: center;
    color:#333;
  }
}
.two {
  text-align: center;
  img {
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
