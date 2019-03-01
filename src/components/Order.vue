<template>
  <div id="box">
    <van-nav-bar title="填写订单" left-arrow :fixed='true' @click-left="onClickLeft"/>
    <div id="box1">
      <div class="van-address-edit">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>收货人</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="收货人姓名" value class="van-field__control">
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>手机号码</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="tel" placeholder="配送员联系您的电话" value class="van-field__control">
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>所在城市</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="text"
                placeholder="选择您所在的城市"
                readonly="readonly"
                value
                class="van-field__control"
                 @click="show=true" 
                 v-model="zhangbing"
              >
              <van-popup v-model="show">
                    <van-area :area-list="areaList" title="选择地区" @confirm="confirm" @cancel='delet'/>
            </van-popup>
            
            </div>
            
          </div>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
        <div class="van-cell van-address-edit-detail">
          <div class="van-cell__value van-cell__value--alone">
            <div class="van-cell van-field van-cell-address" style="width:356px;">
              <div class="van-cell__title van-field__label">
                <span class="van-cell_title-address">收货地址</span>
              </div>
              <div class="van-cell__value">
                <div class="van-field__body">
                  <i class="iconfont icon-shouhuodizhi"></i>
                  <textarea
                    rows="1"
                    maxlength="200"
                    placeholder="小区/写字楼"
                    class="van-field__control"
                  ></textarea>
                  <i class="iconfont icon-xiangyoujiantou"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>楼号门牌</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="tel"
                maxlength="6"
                placeholder="楼号/单元号/门牌号"
                value
                class="van-field__control"
              >
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>地址类型</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <span
                class="van-field_body-label"
                :class="{active:idx==isActive}"
                @click="changeClass(idx)"
                v-for="(item,idx) in menu"
                :key="idx"
              >{{item.name}}</span>
            </div>
          </div>
        </div>
        <button class="store">保存</button>
      </div>
      <img src="../assets/未标题-2.jpg" alt class="img1">
    </div>

    <div id="box2">
      <div class="body-top">
        <span>次日达</span>
        <span style="color:#999;font-weight:normal">次日送达</span>
      </div>
      <div class="body-bottom" >
        <img :src="item" alt class="img2" v-for="(item,index) in img" :key="index" style="border-radius:10%;">
        <div>
          <span calss="body-bottom_num" style="color:#000;">共{{msg}}件</span>
          <i class="iconfont icon-xiangyoujiantou" style="color:#000;"></i>
        </div>
      </div>
    </div>
    <div id="box3">
      <div class="body-center-top">
        <span>商品总价</span>
        <span>￥{{price}}</span>
      </div>
      <div class="body-center-center">
        <div class="center-1">
          <div class="center-1-left">
            <img src="../assets/未标题-4.jpg" alt>
            <span>商品券</span>
          </div>
          <div class="center-1-right" @click="show1">
            <span style="color:#999">无可用商品券</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
        <div class="center-2">
          <div class="center-2-left">
            <img src="../assets/未标题-5.jpg" alt>
            <span>红包</span>
          </div>
          <div class="center-2-right" @click="show2">
            <span style="color:#fe4a93;">1个红包可用</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
      </div>
      <div class="body-center-bottom">
        <div class="bottom-1">
          <span>商品实付</span>
          <span>￥{{price}}</span>
        </div>
        <div class="bottom-2">
          <span>配送费</span>
          <span>￥10</span>
        </div>
        <div class="bottom-3">
          <span style="margin-right:5px">合计</span>
          <span style="color:#fe4a93">￥{{total}}</span>
        </div>
      </div>
    </div>
    <div class="discount">
      <span>优惠说明</span>
      <i class="iconfont icon-iconset0143"></i>
    </div>
    <div id="box4">
      <div class="body-fottor-left">
        <span>储值支付（余额￥0）</span>
        <span style="color:#fe4a93">储值送红包+邮箱会员</span>
        
      </div>
      <div class="body-fottor-right">
        <span>去储值</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </div>
    </div>
    <div id="box5">
      <div class="body-louder-top">
        <span>还需支付</span>
        <span>￥{{total}}</span>
        
      </div>
      <div class="body-louder-center">
        <div class="body-louder-center-1">
          <img src="../assets/未标题-6.jpg" alt class="img4">
          <div class="pay">
            <span>
              微信支付
              <img src="../assets/未标题-7.jpg" alt style="width:30px;height:12px;">
            </span>
            <br>
            <span style="font-size:10px;color:#999999;">亿万用户的选择,更快更安全</span>
          </div>
        </div>
        <van-checkbox v-model="checked" style="float:right;line-height:55px;"></van-checkbox>
      </div>
      <div class="body-louder-bottom">
        <div class="pay1">
          <img src="../assets/未标题-8.jpg" alt style="width:32px;height:32px">
          <li>支付宝支付</li>
        </div>
        <van-checkbox v-model="checkeds" style="float:right;line-height:30px;"></van-checkbox>
      </div>
    </div>
    <div style="width:356px;height:60px;"></div>
    <div>
      <div class="van-submit-bar">
        <div class="van-submit-bar__bar">
          <div class="van-submit-bar__text">
            <span style="font-size:18px;float:left;margin-left:10px;line-height:50px">付款</span>
            <span class="van-submit-bar__price" style="color:#fe4a93;float:left;margin-left:10px;font-size:18px;line-height:50px">¥{{total}}</span>
          </div>
          <button
            class="van-button van-button--danger van-button--large van-button--square"
            style="background:#fe4a93">
            <span class="van-button__text">去支付</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaList from "../../node_modules/vant/packages/area/demo/area.js";
export default {
  data() {
    return {
      total:0,
      img:[],
      show:false,
      isActive: -1,
      areaList,
      searchResult: [],
      msg: 1,
      price: 0,
      checked: false,
      checkeds: false,
      zhangbing:'',

      menu: [
        { idx: 0, name: "公司" },
        { idx: 1, name: "住宅" },
        { idx: 2, name: "学校" },
        { idx: 3, name: "其他" }
      ]
    };
  },
    mounted(){
        // console.log(areaList)
      //  console.log(this.$route.query)
       var change = this.$route.query
       this.price = change.totalPrice
       this.img = change.img
       this.total = change.total
       this.msg = change.num
    },
  methods: {

    changeClass(idx) {
      this.isActive = idx;
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft(){
           this.$router.back(-1)
       } ,
    confirm(areaList){
        // console.log(areaList[0].name);
        this.zhangbing = areaList[0].name+areaList[1].name+areaList[2].name
        this.show = false;
    },
    delet(){
        this.show = false;
    },
    show1(){
      this.$router.push('/TradingStamps')
    },
    show2(){
      this.$router.push('/RedPacket')
    }
  }
};
</script>

<style>
.van-cell_title {
  float: left;
}
.active {
  background: #cddef8;
}
#box {
  width: 100%;
  background: #f7f7f7;
}

#box1 {
  width: 356px;
  height: 330px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 10px;
  background: #fff;
}
#box2 {
  width: 356px;
  height: 125px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  background: #fff;
}
#box3 {
  width: 356px;
  height: 250px;
  margin: 0 auto;
  border-radius: 10px;
  background: white;
  margin-top: 10px;
}
#box4 {
  width: 356px;
  height: 63px;
  margin: 30px auto;
  background: white;
  display: flex;
  justify-content: space-between;
}
#box5 {
  width: 356px;
  height: 152px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
}
.van-field_body-label {
  width: 46px;
  height: 25px;
  border-radius: 15px;
  text-align: center;
  line-height: 25px;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid #999;
}
.store {
  width: 336px;
  height: 40px;
  background: #fe4a93;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}
.van-cell_title-address {
  margin-left: 15px;
}
.van-cell-address {
  width: 356px;
}
.img1 {
  width: 356px;
  height: 5px;
}
.body-top {
  width: 340px;
  height: 43px;
  border-bottom: 1px solid #363636;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 43px;
  font-size: 15px;
  color: #000;
  font-weight: bold;
}
.body-bottom {
  width: 340px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 80px;
}
.img2 {
  width: 58px;
  height: 58px;
  margin-top: 10px;
}
.body-center-top {
  width: 346px;
  height: 55px;
  border-bottom: 1px solid #333;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 55px;
}
.body-center-center {
  width: 346px;
  height: 82px;
  margin: 0 auto;
  border-bottom: 1px solid #333;
  padding-top: 15px;
  box-sizing: border-box;
}
.center-1 {
  width: 328px;
  height: 18px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 18px;
}
.center-2 {
  width: 328px;
  height: 18px;

  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  line-height: 18px;
}
.center-1-left img {
  width: 17px;
  height: 17px;
}
.center-2-left img {
  width: 17px;
  height: 17px;
}
.body-center-bottom {
  height: 106px;
  width: 346px;
  margin: 0 auto;
  padding-top: 15px;
  box-sizing: border-box;
}
.bottom-1 {
  width: 328px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 18px;
}
.bottom-2 {
  width: 328px;
  height: 18px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  line-height: 18px;
}
.bottom-3 {
  float: right;
  margin-right: 10px;
}
.discount {
  float: right;
  margin-right: 20px;
  background: #f7f7f7;
  margin-top: 5px;
}
.body-fottor-left {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
}
.body-fottor-right {
  margin-top: 20px;
  margin-right: 10px;
}
.body-louder-top {
  width: 343px;
  height: 44px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  line-height: 44px;
  border-bottom: 1px solid #363636;
  margin: 0 auto;
}
.body-louder-center {
  width: 343px;
  height: 54px;
  border-bottom: 1px solid #363636;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.body-louder-center-1 {
  height: 40px;
  clear: both;
  margin-top: 10px;
}
.img4 {
  width: 32px;
  height: 32px;
  float: left;
  margin-left: 5px;
}
.pay {
  float: left;
  height: 40px;
}
.pay span {
  float: left;
  margin-left: 8px;
}
.body-louder-bottom {
  width: 343px;
  height: 54px;
  margin: 0 auto;
  margin-top: 10px;
}
.pay1 {
  float: left;
  height: 34px;
  line-height: 34px;
  clear: both;
}
.pay1 img {
  float: left;
  margin-left: 5px;
}
.pay1 li {
  list-style: none;
  float: left;
  margin-left: 8px;
}
</style>
