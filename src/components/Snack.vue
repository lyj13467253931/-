<template>
  <div class="snack">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="snack1">
          <img :src="msg" alt="">
        </div>  
        <div class="snack3">
          <van-row type="flex" justify="space-between" v-for="(item,index) in swiperlist" :key="index" class="snack2">
              <van-col span="12"  v-for="(count,value) in item.content" :key="value">
                <img :src="count.url" alt="" class="snack2-1" />
                <div>
                  <p v-text="count.text"></p>
                  <p v-text="count.present" class="snack2-2"></p>
                  <div class="icon-font">
                    <div class="icon-font1">
                      <p>￥{{count.price}}</p>
                      <div class="price">
                        <span v-show="count.ishow">￥{{count.price1}}</span>
                        <van-tag color="#f2826a" class="diamond" plain   v-show="count.ishow">
                          <p>{{count.sale}}</p>
                          <div class="diamond1">
                            <div></div>
                          </div>
                        </van-tag>
                      </div>
                    </div>
                    <van-icon v-show="count.iscart" name="cart-circle-o" @click="cart(value)" />
                    <div class="van-stepper"  v-show="count.isadd" :value="value" async-chang >
                      <button class="van-stepper__minus" @click="increa(value)"></button>
                      <input type="number" :value="count.value" class="van-stepper__input" onfocus=this.blur()>
                      <button class="van-stepper__plus" @click="decrea(value)"></button>
                    </div>
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
  name: 'Snack',
  data () {
    return {
      msg:require("@/assets/image/wkf3.png"),
      loading: false,
      finished: false,
      isLoading: false,
      swiperlist:[
        {
          content:[
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              price1:191.8,
              sale:"会员8.4折",
              ishow:true,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              price1:194.8,
              sale:"会员8.4折",
              ishow:true,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              price1:193.8,
              sale:"会员6.7折",
              ishow:true,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装小白心里软面包6个混装小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              price1:192.8,
              sale:"会员8.7折",
              ishow:true,
              iscart:true,
              isadd:false,
              value: 1
            },
            {
              url:require("../assets/image/wkf4.png"),
              text:"小白心里软面包6个混装",
              present:"你们最爱的小白回来啦",
              price:23.8,
              iscart:true,
              isadd:false,
              value: 1
            }
          ]
        }
      ]
    }
  },
  // mounted(){
    // for(var i = 0;i<this.swiperlist[0].content.length;i++){
    //   if(this.swiperlist[0].content[i].price1){
    //     console.log(this.swiperlist[0].content[i].price1)
    //     this.swiperlist[0].content[i].price1='￥'+this.swiperlist[0].content[i].price1;
    //   }
    // }
  // },
  methods:{
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.swiperlist[0].content.length <= 8) {
          this.finished = true;
        }
      }, 500)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    cart(value){
      this.swiperlist[0].content[value].iscart=false;
      this.swiperlist[0].content[value].isadd=true
    },
    increa(value){
      this.swiperlist[0].content[value].value--;
      if(this.swiperlist[0].content[value].value==0){
        this.swiperlist[0].content[value].iscart=true;
        this.swiperlist[0].content[value].isadd=false;
        this.swiperlist[0].content[value].value=1
      }
    },
    decrea(value){
      this.swiperlist[0].content[value].value++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
p{
  padding:0px;
  margin:0px;
  letter-spacing: 0.5px;
}
.van-row--flex {
  width:100%;
  display: flex!important;
  flex-wrap: wrap!important;
  // align-items:center!important;
}
.van-col--12 {
  width:49%!important;
  margin-bottom: 7px;
  text-align: center;
  position: relative;
}


.snack{
  width:100%;
  height:100%;
  // background-color: #f9f7f8;
  background: -webkit-linear-gradient(top,#ffecee,#f9f7f8 60%,#f9f7f8 40%);
  background-size: 100% 100%;
  .snack1{
    padding:0px;
    margin:0px;
    img{
      width:100%;
      height:100%;
      border:none;
    }
  }
  .snack3 {
    .snack2{
      font-size: 13px;
      color:#4d484b;
      padding:0px 8px;
      box-sizing: border-box;
      .van-col{
        padding:10px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 8px;
        >div{
          width: 150px;
          margin-top:10px;
          text-align: left;
          margin:0px auto;
          >p{
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1; 
          }
          .snack2-2{
            font-size: 11px;
            color: #969696;
          }
          .icon-font{
            display: flex;
            justify-content:space-between;
            margin-top:16px;
            .icon-font1{
              flex-direction:colun;
              // align-items:center!important;
              align-self:flex-end;
              font-weight: bold;
              font-size: 10px;
              height:30px;
              .price{
                color: #ff4891;
                font-size: 12px;
                position: relative;
                .van-tag{
                  color:#ff4891!important;
                  margin-left:4px;
                }
                .diamond1{
                  border-bottom: 5px dashed transparent;
                  border-top:5px dashed transparent;
                  border-right:5px solid #ff4891;
                  width: 0;
                  height:0;
                  font-size: 0;
                  position: absolute;
                  top:3.6px;
                  left:-5.2px;
                  div{
                    border-bottom: 5px dashed transparent;
                    border-top:5px dashed transparent;
                    border-right:5px solid #fff;
                    width: 0;
                    height:0;
                    font-size: 0;
                    position: absolute;
                    top:-5px;
                    left:1.2px;
                    z-index: 2;
                  }
                }
              }
            }
            .van-icon{
              font-size: 30px;
              color: #ff4891;
              // display: none;
            }
          }
        }
      }
      .snack2-1{
        width:150px!important;
      }
    }
  }
}
.van-stepper{
  // width:40px;
  height:30px;
  position: absolute;
  right:10px;
  bottom: 0px;
  button{
    width:20px;
    height: 20px;
    border-radius: 50%;
  }
  input{
    width:20px;
    height:10px;
    border:0px;
  }
}
.van-stepper__minus::after, .van-stepper__minus::before{
  background-color: #ff4891!important;
}
.van-stepper__minus{
  background-color: #fff!important;
}
.van-stepper__plus{
  background-color: #ff4891!important;
}
.van-stepper__plus::after, .van-stepper__plus::before{
  background-color: #fff!important;
}

</style>
