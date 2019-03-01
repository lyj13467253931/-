<template>
  <div>
    <div class="header">
      <van-nav-bar title="优享会员专场" left-arrow @click-left="back"/>
      <div class="body">
        <div class="body-left">
          <img :src="img" width="60px">
          <div>
            <span class="font">{{font}}</span>
            <span class="member">{{member}}</span>
            <div class="time">{{time}}</div>
          </div>
        </div>
        <div class="body-right">{{right}}</div>
      </div>
      <div class="white">
        <div class="youxiang">
          <p class="juzhong">{{youxiang}}</p>
          <p class="xiaode">{{tiaozhuan}}</p>
        </div>
        <div>
          <ul class="fily">
            <li v-for="(item,index) in items" :key="index" class="for">
              <img :src="item.src" alt>
              <p>{{item.name}}</p>
            </li>
          </ul>
          <div class="card">
            <p class="cardone">{{membercard}}</p>
            <p class="cardtwo">{{txt}}</p>
          </div>
        </div>
      </div>
      <div class="radius">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(address, idx) in images" :key="idx">
            <img :src="address.ima" alt height="100%">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="packet">
        <div class="quire">
          <p class="red">{{packet}}</p>
          <p class="more">{{more}}</p>
        </div>
        <div class="pink">
          <div class="top">
            <span class="month">02月</span>
            <span>优享会员专属任务</span>
            <span class="xiangqing">查看详情 ></span>
          </div>
          <div class="bottom">
            <p class="onlyOne">做专属任务领专属红包</p>
            <img :src="photo" alt="">
            <p class="start">立即参与</p>
          </div>
        </div>
      </div>
      <div class="tupian">
        <more></more>
        <about></about>
      </div>
    </div>
  </div>
</template>

<script>
import about from './HelloWorld.vue'    
import more from './more.vue'
export default {
  name: "home",
  data() {
    return {
      img: require("@/assets/header.png"),
      font: "小鲜",
      member: "体验会员",
      time: "2019.02.26会员到期",
      right: "优享会员说明©",
      youxiang: "优享会员 享7大特权",
      tiaozhuan: "会员期间已为你节省00.00 ▶",
      packet: "会员任务红包",
      items: [
        { src: require("@/assets/car.png"), name: "一小时达" },
        { src: require("@/assets/car.png"), name: "会员任务" },
        { src: require("@/assets/car.png"), name: "超级会员日" },
        { src: require("@/assets/car.png"), name: "专属客服" },
        { src: require("@/assets/car.png"), name: "积分加倍" },
        { src: require("@/assets/car.png"), name: "会员专享价" },
        { src: require("@/assets/car.png"), name: "共享会员" },
        { src: require("@/assets/car.png"), name: "敬请期待" }
      ],
      membercard: "立即续费会员卡",
      txt: "会员做任务送红包",
      more: "|多买多省钱",
      images: [
        {
          ima:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2925604326,1915332394&fm=27&gp=0.jpg"
        },
        {
          ima:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=420673457,413645341&fm=27&gp=0.jpg"
        }
      ],
      photo:require('@/assets/photo.png')
    };
  },
  methods: {
    back(){
      this.$router.back(-1)
    }
  },
  components:{
    about,
    more
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 300px;
  border-radius: 0 0 20px 20px;
  background: #282020;
  .van-nav-bar {
    background: #282020;
    .van-icon {
      color: #fff;
    }
  }
  .van-nav-bar__title {
    color: #fff;
  }
  .van-hairline--bottom::after {
    border-bottom: none;
  }
  .body {
    height: 75px;
    // background: white;
    margin: 0px auto;
    padding: 0 17px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .body-left {
      height: 60px;
      display: flex;
      .font {
        font-size: 20px;
        color: #fff;
      }
      .member {
        width: 50px;
        height: 10px;
        border-radius: 4px;
        border: 1px solid #c9b893;
        padding: 1px;
        font-size: 4px;
        box-sizing: border-box;
        margin-left: 2px;
        color: #c9b893;
      }
      .time {
        font-size: 4px;
        margin-top: 15px;
        color: #fff;
      }
    }
    .body-right {
      margin-top: 35px;
      color: #f3ca7d;
      font-size: 13px;
    }
  }
  .white {
    width: 90%;
    height: 320px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 1px 2px gray;
    margin-left: 18px;
    .youxiang {
      color: #8e612e;
    }
    .juzhong {
      font-size: 20px;
      width: 190px;
      margin: 0 auto;
      padding-top: 20px;
      box-sizing: border-box;
    }
    .xiaode {
      width: 180px;
      font-size: 13px;
      margin: 3px auto 0;
      color: #6b3c12;
      text-decoration: underline;
    }
    .fily {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .for {
        width: 25%;
        height: 60px;
        margin: 15px 0px;
        text-align: center;
        img {
          width: 44px;
        }
        p {
          font-size: 10px;
        }
      }
    }
    .card {
      width: 90%;
      padding: 5px 0;
      margin: 0 auto;
      background: #fdbf53;
      border-radius: 20px;
      .cardone {
        font-size: 18px;
        color: #6b3c12;
        text-align: center;
        font-weight: bold;
      }
      .cardtwo {
        font-size: 10px;
        color: #6a3e18;
        text-align: center;
      }
    }
  }
  .radius {
    width: 90%;
    height: 72px;
    margin: 5px 17px;
    border-radius: 15px;
    .van-swipe__track {
      img {
        height: 72px;
        width: 100%;
      }
    }
  }
  .packet {
    width: 90%;
    margin-left: 17px;
    // background:red;
    background: #fff6e1;
    .red {
      font-size: 14px;
      color: #845329;
      margin-top: 10px;
    }
    .more {
      font-size: 10px;
      color: #474245;
      margin-top: 10px;
    }
    .quire {
      display: flex;
      border-bottom: 1px solid #fff;
    }
    .pink {
      height: 252px;
      background: #fff6e1;
      border-radius: 10px;
      // display: flex;
      margin-top: 15px;
      .top {
        height: 45px;
        font-size: 10px;
        color:#784d25;
        .month {
          width: 35px;
          height: 17px;
          background: #86501e;
          color: #ffd9b7;
          border-radius: 5px;
        }
        .xiangqing {
          float: right;
          color: #784d25;
        }
      }
      .bottom {
        font-size: 15px;
       
        img{
          width: 100%;
        }
        .onlyOne{
          color: #4a2d14;
         text-align: center;
        }
        .start{
          margin:15px auto 0;
          width: 230px;
          height: 40px;
          background: #febc49;
          border-radius: 20px;
          text-align: center;
          line-height: 40px;
          color: #895822;
        }
      }
    }
  }
  .tupian{
    width: 90%;
    margin-left:17px;
  }
}
</style>

