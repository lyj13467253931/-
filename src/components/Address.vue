<template>
  <div id="address">
    <van-nav-bar title="新增收货地址" left-arrow @click-left="onClickLeft" />

    <div class="van-address-edit">
      <div class="van-field real">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>收货人</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="收货人姓名" value class="van-field__control"  v-model="name">
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>手机号码</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="text"
                placeholder="配送员联系您的电话"
                value
                class="van-field__control"
                v-model="phone"
              >
            </div>
          </div>
        </div>
        <div class="tongxun">
          <div class="lu">
            <div>
              <i class="iconfont icon-wode" style="font-size:25px;"></i>
            </div>
            <div style="font-size:13px; color:#000;">通讯录</div>
          </div>
          <div class="tong">
            <i class="iconfont icon-jiantouyou" style="color:#c9c9c9;"></i>
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
              v-model="con"
            >
          </div>
          <van-popup v-model="show">
            <van-area
              :area-list="areaList"
              :visible-item-count="4"
              :item-height="25"
              @confirm="confirm"
              @cancel="addCancel"
              title="选择地区"
            />
          </van-popup>
        </div>
        <span>
          <i class="iconfont icon-jiantouyou" style="color:#c9c9c9;"></i>
        </span>
      </div>
      <div class="van-cell van-address-edit-detail">
        <div class="van-cell__value van-cell__value--alone">
          <div class="van-cell van-field">
            <div class="van-cell__title van-field__label">
              <span>收货地址</span>
            </div>
            <div class="van-cell__value">
              <div class="van-field__body">
                <span>
                  <i class="iconfont icon-dingwei"></i>
                </span>
                <textarea
                  rows="1"
                  maxlength="200"
                  placeholder="小区/写字楼"
                  class="van-field__control"
                  v-model="address"
                ></textarea>
              </div>
            </div>
            <span>
              <i class="iconfont icon-jiantouyou" style="color:#c9c9c9;"></i>
            </span>
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
              type="text"
              maxlength="6"
              placeholder="楼号/门牌/单元号"
              value
              class="van-field__control"
              v-model="car"
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
            <ul>
              <li
                style="font-size:13px;"
                :class="{active:num == index}"
                @click="change(index)"
                v-for="(item,index) in list"
                :key="index"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="van-address-edit__buttons">
      <button
        class="van-button van-button--danger van-button--normal van-button--block"
        @click="store"
      >
        <span class="van-button__text">保存收货地址</span>
      </button>
    </div>
  </div>
</template>
<script>
import areaList from "../../node_modules/vant/packages/area/demo/area.js";
export default {
  data() {
    return {
      list: [
        { name: "学校",id:0},
        { name: "住宅",id:1},
        { name: "公司",id:2},
        { name: "其他",id:3}
      ],
      con: "",
      num: -1,
      show: false,
      areaList: areaList,
      name:'',
      address:'',
      car:'',
      phone:''
    };
  },
  mounted() {
    // console.log(areaList.city_list);
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    change(index) {
      this.num = index;
    },
    addCancel() {
      this.show = false;
    },
    confirm(areaList) {
      this.con =
        areaList[0].name + "-" + areaList[1].name + "-" + areaList[2].name;
      this.show = false;
    },
    // 正则表达式：!/^1[34578]\d{9}$/.test(  )   括号里写自己绑定的数据（this.v-model绑定）
    // store() {
    //   this.$router.push(
    //     '/Myaddress1'
    //   )
    // },
    store(index){
      var obj = []
     for(var i = 0;i<this.list.length;i++){
       if(this.num == this.list[i].id){
         obj.push(this.list[i].name)
       }
    
     }
     
       this.$router.push({
          path:'/Myaddress1',
          query:{
             name:this.name,
             phone:this.phone,
             car:this.car,
             address:this.address,
             logo:obj
          }
       })
       var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!this.phone) {
              this.$toast("请输入手机号");
              return;
          } else if (!myreg.test(this.phone)) {
              this.$toast("手机号格式错误");
              return;22
          } 
    }
  }
};
</script>
<style scoped>
.active {
  background: #d4e0ff;
  color: #fff;
}
/* .van-nav-bar{
      margin-left:10px;

    } */
/* .van-address-edit{
      margin-top:30px;
    } */
.van-cell__title span {
  float: left;
}
.van-address-edit__buttons button {
  background: #ff4892;
  border-radius: 5px;
}
ul li {
  margin-right: 6px;
  text-align: center;
  line-height: 25px;
  width: 40px;
  height: 25px;
  border-radius: 15px;
  background: #f8f8f8;
  border: 1px solid #d4d4d4;
  color: #d4d4d4;
  float: left;
}
.van-address-edit {
  margin-left: 10px;
  color: #767676;
}
.van-address-edit span {
  font-size: 16px;
}
.real {
  position: relative;
}
.van-cell:not(:last-child)::after {
  border: none !important;
}
.tongxun {
  position: absolute;
  right: 15px;
  bottom: 24px;
  display: flex;
  align-items: center;
}
.tongxun div {
  font-size: 10px;
}
.lu {
  margin-right: 5px;
}
.van-popup {
  width: 330px;
  height: 330px;
}
.van-picker__columns li {
  width: 63px;
}
</style>


