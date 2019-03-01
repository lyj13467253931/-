<template>
  <div class="hello">
    <van-nav-bar title="返回" left-arrow :fixed="true"   @click-left="onClickLeft"></van-nav-bar>
    <div :style="{width:'100%' , height:'45px', background:'red'}"></div>
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
    <div class="hell">
      <p class="mj">【麻将巧克力】 妈妈爱不释手的创意甜品</p>
      <div class="shen">
        <div class="sgj">
          <img :src="sgimg" alt class="sgj1">
          <p class="shj2">{{sgjname}}</p>
        </div>
        <div @click="gzactive" :class="idx%2==1?hehe:jgz1" :id="idx">{{jgz}}</div>
      </div>
      <div class="xx"></div>
      <p class="sm">{{sm}}</p>
      <div class="sx"></div>
      <div class="scpl">
        <div class="plhz">
          <img src="../common/3_1.jpg" alt class="plhzimg" @click="change">
          <span>{{pl2}}</span>
        </div>
        <div class="schz">
          <img
            src="../common/3_5.png"
            alt
            @click="change1"
            :id="idxc"
            :class="idxc%2==0?'scstyle':'schzimg'"
          >
          <span>{{sc}}</span>
        </div>
      </div>
      <p class="winnow">精选留言</p>
      <div v-for="(item,index) in items" :key="index" class="liuyanqu">
        <div>
          <img :src="item.img" alt class="touxiang">
        </div>
        <div class="hezi">
          <div class="ming">
            <div class="wez">
              <p class="wez1">{{item.name}}</p>
              <p class="wez2">{{item.time}}</p>
            </div>
            <div class="dianzan">
              <img :src="item.dianzan" alt width="17px" height="17px">
              <p>{{item.zannum}}</p>
            </div>
          </div>
          <p class="yuyan">{{item.yu}}</p>
        </div>
      </div>
      <div></div>
      <div class="btn">
        <p>我要留言</p>
      </div>

      <!-- 热门推荐 -->
      <div class="ret">
        <span class="ret1">热门推荐</span>
        <span class="ret2">看的不过瘾？Pick更多好滋味</span>
      </div>
      <div class="pp" v-for="(item,index) in rename" :key="'ac'+index">
        <img :src="item.reimg" alt class="xplimg">
        <div class="cplnum">
          <div class="cpltou">
            <img :src="item.tx" alt class="cpltou1">
            <span class="cpltou2">{{item.user}}</span>
          </div>
          <div class="cpname">
            <p>{{item.spname}}</p>
          </div>
          <div class="liu">
            <p class="liu3">浏览 {{item.num}}</p>
            <img src="../common/3_4.jpg" alt class="liu4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      sgimg: require("../common/3_2.jpg"),
      sgjname: "miu的食光记",
      sm:
        '每一个叱咤麻坛的妈妈都会爱不释手的创意甜品，想必打了再多年麻将的妈妈也没尝过麻将的“滋味"',
      sc: 1546,
      pl2: 488,
      jgz: "+ 关注",
      idx: 0,
      idxc: 1,
      hehe: "hehe",
      jgz1: "jgz",
      items: [
        {
          img: require("../common/3_3.jpg"),
          name: "曼达君",
          time: "2018-09-21 17:52",
          dianzan: require("../common/3_4.jpg"),
          zannum: 6,
          yu: "厉害"
        },
        {
          img: require("../common/3_3.jpg"),
          name: "曼达君",
          time: "2018-09-21 17:52",
          dianzan: require("../common/3_4.jpg"),
          zannum: 6,
          yu: "厉害"
        },
        {
          img: require("../common/3_3.jpg"),
          name: "曼达君",
          time: "2018-09-21 17:52",
          dianzan: require("../common/3_4.jpg"),
          zannum: 6,
          yu: "厉害"
        },
        {
          img: require("../common/3_3.jpg"),
          name: "曼达君",
          time: "2018-09-21 17:52",
          dianzan: require("../common/3_4.jpg"),
          zannum: 6,
          yu: "厉害"
        }
      ],
      rename: [
        {
          reimg: require("../common/3.jpg"),
          tx: require("../common/3_6.jpg"),
          user: "豹纹儿er",
          spname: "【咖喱猪排饭】奶香浓郁，金黄酥脆的异国美食",
          num: 81569
        }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "" //url地址
          }
        ],
        poster: "../common/3.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  methods: {
    gzactive() {
      this.idx = this.idx + 1;
      // console.log(this.idx)
      if (this.idx % 2 == 1) {
        this.jgz = "已关注";
      } else {
        this.jgz = "+ 关注";
      }
    },
    change() {
      this.pl2++;
    },
    change1() {
      this.idxc = this.idxc + 1;
      if (this.idxc % 2 == 0) {
        this.sc++;
      } else {
        this.sc--;
      }
    },
    onClickLeft(){
      this.$router.back(-1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hehe {
  width: 45px;
  height: 25px;
  background: #999;
  border-radius: 4px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  line-height: 25px;
}
.scstyle {
  background: #ff4891;
  width: 15px;
  height: 15px;
  display: block;
  margin: left auto;
  margin-right: 6px;
  border-radius: 6px;
}
* {
  margin: 0;
  padding: 0;
}
.hell {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 0;
}
.mj {
  font-size: 20px;
  font-weight: bold;
  color: #474245;
  margin-top: 30px;
  margin-bottom: 30px;
}

.shen {
  width: 100%;
  height: 25px;
  background: #f8f8f8;
  display: flex;
  margin-bottom: 23px;
  border-radius: 6px;
}
.sgj {
  width: 240px;
  display: flex;
  /* background:red; */
}
.sgj1 {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 6px;
}
.sgj2 {
  font-size: 15px;
  color: #474245;
}
.jgz {
  width: 45px;
  height: 25px;
  background: #ff4891;
  border-radius: 4px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  line-height: 25px;
}

.xx {
  width: 100%;
  border-bottom: 1px solid #fafafa;
  margin-bottom: 15px;
}

.sm {
  font-size: 12px;
  color: #000;
  margin-bottom: 25px;
}

.sx {
  width: 100%;
  border-bottom: 1px solid #fafafa;
  margin-bottom: 15px;
}

.scpl {
  display: flex;
  flex-direction: row-reverse;
  font-size: 10px;
  color: #000;
}
.schz {
  width: 70px;
  height: 15px;
  display: flex;
  align-items: center;
}
.plhz {
  width: 40px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.plhzimg {
  width: 15px;
  height: 15px;
}
.schzimg {
  width: 15px;
  height: 15px;
  display: block;
  margin: left auto;
  margin-right: 6px;
  border-radius: 9px;
}

.winnow {
  font-size: 16px;
  color: #474245;
  font-weight: bold;
  flex: 1;
  margin-top: 25px;
}
.liuyanqu {
  width: 100%;
  height: 112px;
  display: flex;
  align-items: center;
}
.touxiang {
  width: 42px;
  height: 42px;
}

.hezi {
  width: 289px;
  height: 100%;
  border-bottom: 1px solid #f5f5f5;
  /* border-top:1px solid #f5f5f5;  */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 14px;
}
.ming {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -66px;
}
.wez {
  color: #9e9e9e;
  font-size: 10px;
}
.wez1 {
  margin-bottom: 10px;
}
.dianzan {
  display: flex;
}
.dianzan p {
  font-size: 10px;
  color: #474245;
  margin-left: 10px;
  align-self: center;
}
.yuyan {
  margin-top: 30px;
  font-size: 15px;
  color: #474245;
  font-weight: 500;
}

.btn {
  width: 90px;
  height: 32px;
  border: 2px solid #ff4891;
  margin: 0 auto;
  color: #ff4891;
  text-align: center;
  line-height: 32px;
  border-radius: 10px;
  font-size: 12px;
  margin-top: 26px;
  margin-bottom: 40px;
}

/* 热门推荐 */
.ret {
  width: 100%;
  height: 36px;
  letter-spacing: 2px;
  border-bottom: 1px solid #fafafa;
}
.ret .ret1 {
  font-weight: bold;
  color: #474245;
  font-size: 20px;
}
.ret .ret2 {
  width: 165px;
  height: 12px;
  font-size: 10px;
  color: #969696;
  border-left: 2px solid #d8d8d8;
  margin-left: 6px;
  padding-left: 4px;
  box-sizing: border-box;
}
.pp {
  width: 100%;
  height: 104px;
  display: flex;
  margin-top: 25px;
}
.xplimg {
  width: 140px;
  height: 104px;
  margin-right: 15px;
}
.cpltou {
  display: flex;
  align-items: center;
}
.cpltou .cpltou1 {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 6px;
}
.cpltou .cpltou2 {
  font-size: 12px;
  color: #474245;
}
.cpname {
  width: 125px;
  font-size: 14px;
  color: #474346;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-top: 14px;
  margin-bottom: 12px;
}
.liu {
  display: flex;
  justify-content: space-between;
}
.liu .liu3 {
  font-size: 8px;
  color: #9c9c9c;
}
.liu .liu4 {
  width: 16px;
  height: 16px;
}
</style>
