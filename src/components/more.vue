<template>
  <div class="snack">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="snack1">
          <img :src="msg" alt>
        </div>
        <div class="snack3">
          <van-row
            type="flex"
            justify="space-between"
            v-for="(item,index) in swiperlist"
            :key="index"
            class="snack2"
          >
            <van-col span="12" v-for="(count,value) in item.content" :key="value">
              <img :src="count.url" alt class="snack2-1">
              <div>
                <p v-text="count.text"></p>
                <p v-text="count.present" class="snack2-2"></p>
                <div class="icon-font">
                  <div>
                    <p>￥{{count.price}}</p>
                    <div class="price">
                      <span v-show="count.ishow">￥{{count.price1}}</span>
                      <van-tag color="#f2826a" class="diamond" plain v-show="count.ishow">
                        <p>{{count.sale}}</p>
                        <div class="diamond1">
                          <div></div>
                        </div>
                      </van-tag>
                    </div>
                  </div>
                  <van-icon name="cart-circle-o"/>
                </div>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "more",
  data() {
    return {
      msg: require("@/assets/wk3.png"),
      loading: false,
      finished: false,
      isLoading: false,
      swiperlist: [
        {
          content: [
            {
              url: require("../assets/wk4.png"),
              text: "小白心里软面包6个混装",
              present: "你们最爱的小白回来啦",
              price: 23.8,
              price1: 191.8,
              sale: "会员8.4折",
              ishow: true
            },
            {
              url: require("../assets/wk4.png"),
              text: "小白心里软面包6个混装",
              present: "你们最爱的小白回来啦",
              price: 23.8
            },
            {
              url: require("../assets/wk4.png"),
              text: "小白心里软面包6个混装",
              present: "你们最爱的小白回来啦",
              price: 23.8
            },
            {
              url: require("../assets/wk4.png"),
              text: "小白心里软面包6个混装",
              present: "你们最爱的小白回来啦",
              price: 23.8,
              price1: 194.8,
              sale: "会员8.4折",
              ishow: true
            }
          ]
        }
      ]
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        // this.list.push(this.list.length + 1);
        // }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.swiperlist[0].content.length <= 8) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style scoped lang="less">
p {
  padding: 0px;
  margin: 0px;
  letter-spacing: 0.5px;
}
.van-row--flex {
  width: 100%;
  display: flex !important;
  flex-wrap: wrap !important;
  // align-items:center!important;
}
.van-col--12 {
  width: 49% !important;
  margin-bottom: 7px;
  text-align: center;
}
.snack {
  width: 100%;
  height: 100%;
  // background-color: #f9f7f8;
  background-image: -webkit-linear-gradient(
    top,
    #ffecee,
    #f9f7f8 60%,
    #f9f7f8 40%
  );
  background-size: 100% 100%;
  .snack1 {
    padding: 0px;
    margin: 0px;
    img {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  .snack3 {
    .snack2 {
      font-size: 13px;
      color: #4d484b;
      padding: 0px 8px;
      box-sizing: border-box;
      .van-col {
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 8px;
        > div {
          width: 150px;
          margin-top: 10px;
          text-align: left;
          margin: 0px auto;
          > p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .snack2-2 {
            font-size: 11px;
            color: #969696;
          }
          .icon-font {
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            div {
              flex-direction: column;
              // align-items:center!important;
              align-self: flex-end;
              font-weight: bold;
              font-size: 10px;
              .price {
                color: #ff4891;
                font-size: 12px;
                position: relative;
                .van-tag {
                  color: #ff4891 !important;
                  margin-left: 4px;
                }
                .diamond1 {
                  border-bottom: 5px dashed transparent;
                  border-top: 5px dashed transparent;
                  border-right: 5px solid #ff4891;
                  width: 0;
                  height: 0;
                  font-size: 0;
                  position: absolute;
                  top: 3.6px;
                  left: -5.2px;
                  div {
                    border-bottom: 5px dashed transparent;
                    border-top: 5px dashed transparent;
                    border-right: 5px solid #fff;
                    width: 0;
                    height: 0;
                    font-size: 0;
                    position: absolute;
                    top: -5px;
                    left: 1.2px;
                    z-index: 2;
                  }
                }
              }
            }
            .van-icon {
              font-size: 30px;
              color: #ff4891;
            }
          }
        }
      }
      .snack2-1 {
        width: 150px !important;
      }
    }
  }
}
</style>
