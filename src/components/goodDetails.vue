<template>

    <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-dec">{{goods.dec}}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        <van-col span="12" class="goods-price2">￥{{goods.price2}}</van-col>
        <van-col span="6" class="goods-dec1">好评率96.6%</van-col>
        <van-col span="6" class="goods-dec1">已售58609</van-col>
        <img src="../assets/imgs/d4.jpg" alt="" class="image">
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="8" tag="li">{{city}}</van-col>
        <van-col span="8" tag="li">{{time}}</van-col>
        <van-col span="8" tag="li">{{baoyou}}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-bottom:15px;">
      <van-cell>
        <img src="../assets/imgs/d5.jpg" alt="" class="image">
        <div class="penum">已经有{{penum}}人分享了该商品</div>
      </van-cell>
    </van-cell-group>
    
    <van-cell-group style="margin-bottom:15px;">
      <van-cell>
        <van-col span="18" style="font-size:22px;">安心指纹</van-col>
        <van-col span="6" style="font-size:12px;color:#999;">点击查看<van-icon name="arrow" /></van-col>
        <div style="font-size:12px;color:#999;">经十四项感官排查,17项农残检测,100%可溯,为你见证每一口安心。</div>
          <van-row type="flex" justify="center">
            <van-col span="6"><img src="../assets/imgs/d6.png" alt="" class="image1"><p class="pdec">优鲜安心检测</p></van-col>
            <van-col span="6"><img src="../assets/imgs/d6.png" alt="" class="image1"><p class="pdec">100%品控检测</p></van-col>
            <van-col span="6"><img src="../assets/imgs/d6.png" alt="" class="image1"><p class="pdec">经营证件</p></van-col>
          </van-row> 
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-bottom:15px;">
      <van-cell>
        <van-col span="18" style="font-size:22px;">商品评价</van-col>
        <van-col span="6" style="font-size:12px;color:#999;">点击查看<van-icon name="arrow" /></van-col>
      </van-cell>
    </van-cell-group>
     
     <div style="padding-left:13px;">推荐商品</div>
    <slider></slider>
    <!-- <slider1></slider1> -->
    
    <van-cell>
      <div class="details">
        <p>商品详情</p>
        <p class="detail">规格：1盒</p>
        <p class="detail">重量：125g*1盒</p>
        <p class="detail">包装：盒装</p>
        <p class="detail">保质期：到货可立即食用</p>
        <p class="detail">贮存方法：冷藏</p>
      </div>
      <img class="lazyimg" v-for="(img,index) in imageList" v-lazy="img" :key="'a'+index">
    </van-cell>
    

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="attend">
        加入购物车
      </van-goods-action-big-btn>
      <!--  -->
    </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue'
import slider from './slider'
// import slider1 from './slider1'
import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn
    } from 'vant';
    import { Lazyload } from 'vant';
    Vue.use(Lazyload);
export default {
    name: 'goodDetails',
    components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      goods: {
        title: '蓝莓界的小巨蛋 果肉多多',
        dec:'进口蓝莓125g*1盒',
        price: 2680,
        price2:26,
        express: '免运费',
        remain: 19,
        thumb: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550664704586&di=21bcd71b77bcb5453c8c8cd416623851&imgtype=0&src=http%3A%2F%2Fimg005.hc360.cn%2Fhb%2FMTQ3MTU1ODU1MTM2NjgwOTkwNTQ4Nw%3D%3D.jpg',
          'http://img0.imgtn.bdimg.com/it/u=2496547608,2724757984&fm=11&gp=0.jpg'
        ],
        // thumb1:[
        //   '../assets/imgs/4.jpg'
        // ]
      },
      imageList: [
        'http://img2.imgtn.bdimg.com/it/u=1094691599,4076587549&fm=200&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=4260816983,741001206&fm=200&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3095246737,550315867&fm=200&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1094691599,4076587549&fm=200&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=3095246737,550315867&fm=200&gp=0.jpg'
      ],
      // thumb2:[
      //   '../assets/imgs/5.jpg'
      // ]
      city:'智利',
      time:'1小时达',
      baoyou:'实付满49包邮',
      penum:6974,
    };
  },
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push('shopcar');
    },
    attend() {
      Toast('已加入购物车');
    }
  },
  components:{
    slider,
    // slider1
  }
};
</script>

<style lang="less" scoped>
  
  .goods {
  padding-bottom: 50px;
  background-color: #f3f3f3;
  margin:0 auto;
//   .header{
//       position:fixed;
//       top:0;
//       left:0;
//   }
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
    }
  &-title {
    font-size: 16px;
    font-weight:bold;
  }
  &-dec{
      font-size:13px;
      margin-bottom:13px;
  }
  &-price {
    // color: #f44;
    font-size:12px;
  }
  &-price2{
      color: #f44;
      font-size:16px;
  }
  &-dec1{
      color:#999;
      font-size:11px;
  }
  .image{
      width:100%;
      height:50px;
  }
  &-express {
    // color: #999;
    font-size: 10px;
    // padding: 5px 15px;
    margin-bottom: 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
  .penum{
    font-size: 10px;
    color: #999;
  }
  .image1{
    width:36px;
    height:44px;
    margin-left:10px;
  }
  .pdec{
    font-size:12px;
  }
  .lazyimg{
      width:100%;
  }
  .details{
    padding-top: 6px;
    .detail{
      font-size: 11px;
      color: #999;
    }
  }
}
</style>


