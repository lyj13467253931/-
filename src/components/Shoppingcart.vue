<template>
  <div class="shop">
     <van-nav-bar title="购物车"  style="margin-bottom:15px;" />
    <div class="header">
      <Noshop style="display:none;"/>
      <div class="slip">
          <van-checkbox v-model="checked" checked-color="#ff4891" @click="checkAll()">次日达</van-checkbox>
          <p style="height:45px;line-height:45px;color:#ff4891;margin-right:-45px;">实付满69包邮，还差***元去凑单</p>
          <van-icon name="arrow" size="18px" color="#a9a9a9" />
      </div> 
      <div class="detail" v-for="(item,index) in shoplist" :key="index">
          <van-checkbox v-model="item.checkeds" checked-color="#ff4891" @click="change(index)"></van-checkbox>
          <div class="sshop">
            <img :src="item.image">
            <div class="depict">
                <p style="font-size:16px;">{{item.name}}</p>
                <div class="warp">
                  <p style="margin-top:5px;margin-left:10px;font-size:16px;color:#ff4891;">￥{{item.price}}</p>
                  <van-stepper v-model.number="item.value" @change="computed()" @overlimit='del(index)' />
                </div>
            </div>
          </div>
      </div>
    </div>
    <div class="shoplump">
      <p class="one">
        <span >商品总价</span>
        <span >￥{{totalPrice}}</span>
      </p>
      <div class="two">
        <p style="height:41px;display:flex;align-items:center;justify-content:space-between;">
          <i class="iconfont icon-quan" style="color:#f48555;">
            <span style="color:#000;margin-left:5px;">商品券</span>
          </i>
          <span style="font-size:16px;line-height:0.6px;color:#a9a9a9">无可用商品券
            <van-icon name="arrow" size="18px" color="#a9a9a9" style="vertical-align:middle;" />
          </span>
        </p>
        <p style="height:41px;display:flex;align-items:center;justify-content:space-between;">
          <i class="iconfont icon-shiliangzhinengduixiang" style="color:#f48555;">
            <span style="color:#000;margin-left:5px;">红包</span>
          </i>
          <span style="font-size:16px;line-height:0.6px;color:#a9a9a9">还差***元可使用红包
            <van-icon name="arrow" size="18px" color="#a9a9a9" style="vertical-align:middle;" />
          </span>
        </p>
      </div>
      <div class="three">
          <p>
            <span>商品实付</span>
            <span>￥{{totalPrice}}</span>
          </p>
          <p>
            <span>配送费 <b style="font-weight:normal;color:#c6c6c6"> 实付69元包邮</b></span>
            <span>{{baoyou}}</span>
          </p>
          <p>
            <span>合计:<b style="margin-left:6px;color:#ff4891;font-weight:normal">￥{{total}}</b></span>
          </p>
      </div>
    </div>
    <van-submit-bar :price="(total*100)" button-text="去结算▶" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#ff4891" style="margin-left:12px;" @click="checkAll()">全选</van-checkbox>
    </van-submit-bar>
     <Groom />
  </div>
</template>

<script>
import Groom from './groom'
import Noshop from './Noshop'
export default {
  name: 'Shop',
  components:{
      Groom,
      Noshop
  },
  data(){
    return {
      baoyou:'',
      checked:true,
      totalPrice:0,
      total:0,
      shoplist:[
        {
          image:require('@/assets/shangping.png'),
          name:'【新人】泰国龙眼500g*1盒',
          price:6.9,
          value:1,
          checkeds:true
        },
        {
          image:require('@/assets/shangping.png'),
          name:'【新人】泰国龙眼500g*1盒',
          price:8.9,
          value:1,
          checkeds:true
        },
        {
          image:require('@/assets/shangping.png'),
          name:'【新人】泰国龙眼500g*1盒',
          price: 9.9,
          value:1,
          checkeds:true
        }
      ],
      img:[]
    }
  },
  methods:{
    onSubmit(){
      this.change();
      if(this.totalPrice == 0){
        this.$toast('请选择你需要的商品')
      }else{
        this.$router.push({name:'Order', query:{
            img:this.img,
            totalPrice:this.totalPrice,
            total:this.total,
            num:this.sum
        }})
      }
     },
    checkAll(){
      // console.log(this.checked)
      for (let i = 0; i < this.shoplist.length; i++){
        if(this.checked == true){
          this.shoplist[i].checkeds = true;
        }else{
          this.shoplist[i].checkeds = false;
        }
      }
      this.get();
      this.set();
    },
    change(index){
      var num = 0;
      for (let i = 0; i < this.shoplist.length; i++) {
        if(this.shoplist[i].checkeds){
          num++
          this.img.push(this.shoplist[i].image)
        }else{
          this.img.splice(this.shoplist[index],1)
        }
      }
      if(num == this.shoplist.length){
        this.checked = true;
      }else{
        this.checked = false;
      }
      if(num == 0){
        this.checked = false
      }
      this.get();
      this.set();
    },
    get(){
      var val = 0;
      for(var i = 0; i < this.shoplist.length; i++) {
        if(this.shoplist[i].checkeds) {
          val += this.shoplist[i].value * this.shoplist[i].price;
        }
      }
       this.totalPrice = Number(val).toFixed(2)
    },
    set(){
      var val = 0;
      for(var i = 0; i < this.shoplist.length; i++) {
        if(this.shoplist[i].checkeds) {
          val += this.shoplist[i].value * this.shoplist[i].price;
        }
      }
       if(this.totalPrice<69){
         this.total = Number(val+10).toFixed(2)
         this.baoyou = '￥10.00'
       }else{
         this.total = this.totalPrice
         this.baoyou = '免运费'
       }
      if(this.totalPrice <= 0){
         this.total = this.totalPrice
       }
    },
    computed(){
      this.get();
      this.set();
    },
    del(index){
        var a = confirm('你确定要删除吗？')
        if(a == true){
          this.shoplist.splice(index,1)
        }
        this.get();
        this.set();
        this.change();
      }
  },
  created(){
      this.get();
      this.set();
  },
  computed:{
    sum(){
      var a = 0;
      for (let i = 0; i < this.shoplist.length; i++) {
        if(this.shoplist[i].checkeds){
          a += this.shoplist[i].value
        }  
      }
      return a;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;padding:0;
}
.shop{
  width:100%;height:100%;background:#f8f8f8;align-items:center;
}
.shop .header {
  width:100%;background:#fff;margin-bottom:12px;
}
.shop .header .slip{
  width:100%;height:45px;display:flex;align-items:center;font-size:14px;text-align:left;padding-left:14px;box-sizing:border-box;
  border-bottom:1px solid #ebebeb;color:#4d4d4d;justify-content:space-between;padding-right:20px;
}
.shop .header .detail{
  width:100%;height:114px;display:flex;align-items:center;padding-left:15px;font-size:14px;box-sizing:border-box;
}
.shop .header .detail .sshop{
  height:100%;display:flex;align-items:center;
}
.shop .header .detail .sshop img{
  height:69px;margin-left:16px;
}
.shop .header .detail .sshop .depict{
 height:69px;display:flex;flex-direction:column;margin-left:18px;width:200px;
}
.shop .header .detail .sshop .depict .warp{
  display:flex;margin-top:22px;justify-content:space-between;
}
.shop .shoplump{
  width:100%;height:250px;display:flex;flex-direction:column;background:#fff;padding-left:14px;padding-right:20px;box-sizing:border-box;margin-bottom:20px;
}
.shop .shoplump .one{
 height:55px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ebebeb;font-size:16px;
}
.shop .shoplump .two{
  width:100%;height:82px;border-bottom:1px solid #ebebeb;
}
.shop .shoplump .three{
  width:100%;height:113px;display:flex;flex-direction:column;
}
.shop .shoplump .three p{
  width:100%;flex:1;font-size:16px;
}
.shop .shoplump .three p:nth-child(1){
  display:flex;align-items:center;justify-content:space-between;
}
.shop .shoplump .three p:nth-child(2){
  display:flex;align-items:center;justify-content:space-between;
}
.shop .shoplump .three p:nth-child(3){
  display:flex;align-items:center;flex-direction:row-reverse;
}
.van-button {
  background:#ff4891;border:none;letter-spacing:2px;
}
.van-submit-bar .van-button{
  width:130px;
}
.van-submit-bar__price{
  color:#ff4891;margin-right:50px;
}
.van-submit-bar__price{
  font-size:14px;
}
.van-submit-bar__text{
  line-height:1px;
}
.van-submit-bar {
  position:fixed;bottom:50px;
}
.van-ellipsis{
  max-width:100%;font-weight:bold;color:#ff4891;
}
</style>
