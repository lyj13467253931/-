<template>
  <div class="myBottom">
    <div class="my-num">
      <ul>
        <li v-for="(item,index) in som " :key="index" @click="tiao">
          <div class="my-num-num">{{item.num}}</div>
          <div class="my-num-text">{{item.text}}</div>
        </li>
      </ul>
    </div>
    <div class="my-order">
      <div class="my-order-top">
        <div class="my-order-top-left">我的订单</div>
        <div class="my-order-top-right" @click="allOrder">全部订单
          <span>></span>
        </div>
      </div>
      <div class="my-order-bto">
        <ul>
          <li v-for="(item,index) in orders" :key="index" @click="myO(index)">
            <!-- <img :src="item.src" alt=""> -->
            <!-- <img src="../../static/images/daifukuan.png" alt=""> -->
            <img :src="item.src" alt>
            <div>{{item.text}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="my-images">
      <div v-for="(item,index) in imageList" :key="index">
        <router-link :to="item.to">
          <img :src="item.src" alt>
        </router-link>
      </div>
    </div>
    <div class="my-service">
      <div class="my-service-title">我的服务</div>
      <ul>
        <router-link
          v-for="(item,index) in serv"
          :key="index"
          @click="service"
          :to="item.to"
          class="q"
        >
          <li>
            <img :src="item.src" alt>
            <div>{{item.text}}</div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "myBottom",
  data() {
    return {
      som: [
        {
          num: "￥0",
          text: "余额"
        },
        {
          num: 2,
          text: "红包"
        },
        {
          num: 0,
          text: "商品券"
        },
        {
          num: 2,
          text: "积分兑换"
        }
      ],
      orders: [
        { src: require("../../static/images/daifukuan.png"), text: "待付款" },
        { src: require("../../static/images/daifahuo.png"), text: "待发货" },
        {
          src: require("../../static/images/peisongzhong.png"),
          text: "配送中"
        },
        { src: require("../../static/images/daipingjia.png"), text: "待评价" },
        { src: require("../../static/images/tuikuan.png"), text: "退款/售后" }
      ],
      imageList: [
        { src: require("../../static/images/lxl-swiper1.jpg"),to:'/YY' },
        { src: require("../../static/images/lxl-swiper1.jpg"),to:'/YY' },
        { src: require("../../static/images/lxl-swiper1.jpg"),to:'/YY'}
      ],
      serv: [
        {
          src: require("../../static/images/tuijianyouli.png"),
          text: "推荐有礼",
          to: ""
        },
        {
          src: require("../../static/images/hongbao.png"),
          text: "邀请的红包",
          to: ""
        },
        {
          src: require("../../static/images/wodepintuan.png"),
          text: "我的拼团",
          to: ""
        },
        {
          src: require("../../static/images/chizhiyouli.png"),
          text: "储值有礼",
          to: ""
        },
        {
          src: require("../../static/images/jifen.png"),
          text: "福利积分",
          to: ""
        },
        {
          src: require("../../static/images/qiandao.png"),
          text: "签到",
          to: ""
        },
        {
          src: require("../../static/images/shouhuodizhi.png"),
          text: "收货地址",
          to: "/Address"
        },
        {
          src: require("../../static/images/kefu.png"),
          text: "客服帮助",
          to: "/Kf"
        },
        { src: require("../../static/images/shezhi.png"), text: "设置", to: "" }
      ]
    };
  },
  methods: {
    tiao() {},
    myO(index) {
      if(index<4){
        this.$router.push({path:'/MyOrder0',query:{
            index:index
        }})
      }
      if(index == 4){

      }
    },
    service() {},
    allOrder() {
      // this.$router.push({path:'/myOrder',})
      // this.$router.push("/myOrder");

      this.$router.push("/MyOrder0");
    }
  }
};
</script>
<style lang="less" scoped>
.myBottom {
  background: #eee;
  width: 100%;
  height: 100%;
  padding: 20px 10px 0 10px;
  box-sizing: border-box;

  .my-num {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 12px;
        .my-num-num {
          font-weight: bold;
        }
        .my-num-text {
          margin-top: 5px;
        }
      }
    }
  }
  .my-order {
    width: 100%;
    background: #fff;
    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    .my-order-top {
      display: flex;
      justify-content: space-between;
      .my-order-top-left {
        font-size: 30px;
        font-weight: bold;
      }
      .my-order-top-right {
        font-size: 12px;
        color: #959595;
        margin-top: 8px;
      }
    }
    .my-order-bto {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        li {
          text-align: center;
          img {
            width: 20px;
            height: 20px;
          }
          div {
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
    }
  }
  .my-images {
    width: 100%;
    margin-top: 20px;
    display: flex;
    overflow-x: scroll;
    div {
      width: 180px;
      margin-right: 10px;
      img {
        width: 180px;
        border-radius: 10px;
      }
    }
  }
  .my-service {
    width: 100%;
    background: #fff;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    .my-service-title {
      font-size: 30px;
      font-weight: bold;
    }
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 10px;
      .q {
        width: 30%;
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>
