<template>
  <div id="RedPacket">
    <van-nav-bar title="商品券" left-text="返回" left-arrow @click-left="onClickLeft1" :fixed="true"/>
    <div class="redpacket">
        <span style="margin-left:10px">不使用红包</span>
        <van-checkbox v-model="checked" style="margin-right:10px"></van-checkbox>
    </div>
    <div class="redpacket-num">
        <span>红包不能使用多个</span> 
    </div>
    <div class="redpacket-require"  v-for="(item,index) in List" :key="index">
        <div class="redpacket-require-top">
            <div class="module-one">
                <span style="color:#ffaed0">￥</span>
                <span style="font-size:35px;color:#ffaed0">{{item.money}}</span>
            </div>
            <div class="module-two">
                <p class="module-two_top" align="left" style="margin-top:15px;color:#adadad;">
                    <span>{{item.quan}}</span>
                    <span style="width:50px;height:15px;background:#fafbf5;color:#e9b3c1;">{{item.time}}</span>
                </p>
                <p align="left">{{item.manyong}}</p>
                <p align="left">{{item.lei}}</p>
                <p align="left">会员、非会员可用</p>
                <p align="left">有效期：{{item.t1}}至<br>{{item.t2}}</p>
                
            </div>
        </div>
        <div class="redpacket-require-bottom" >
            <p align="left" style="margin-top:10px;">
                <span>{{item.name}}</span>
                <i class="iconfont icon35_xiangxiajiantou"></i>
            </p>
            <p align="left" style="color:#e9b3c1;">
                <i class="iconfont icongantanhao-xianxingyuankuang"></i>
                <span>{{item.yuanx}}</span>
            </p>
            <p align="left">{{item.manfu}}</p>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            checked:true,
            List:[
                {
                    money:20,quan:'华北新人专享20元红包',time:'即将过期',lei:'全品类红包',t1:'2019-02-20',t2:'2009-02-22',
                    name:'详细信息',yuanx:'不可用原因',manfu:'实付满109可用',manyong:'满109元可用'
                },
                {
                    money:10,quan:'华北新人专享10元红包',time:'未过期',lei:'全品类红包',t1:'2019-02-19',t2:'2009-02-28',
                    name:'详细信息',yuanx:'不可用原因',manfu:'实付满49可用',manyong:'满49元可用'
                },
            ]
        }
    },
    methods:{
        onClickLeft1(){
            this.$router.back(-1)
        }
    }
}
</script>
<style scoped>
    #RedPacket{
        width: 100%;
        background: #f7f7f7;
        height: 600px;
    }
    .redpacket{
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
        background: white;
        display: flex;
        justify-content: space-between;

    }
    .redpacket-num{
        color: #b5b5b5;
        display: flex;
        justify-content: space-between;
        margin-left: 17px;
    }
    .redpacket-require{
        width: 345px;
        height: 225px;
        background: white;
        margin: 10px auto;
    }
    .redpacket-require-top{
        width: 315px;
        height: 140px;
        margin: 0 auto;
        border-bottom: 1px dashed #f6f6f6;
        display: flex;
        justify-content: space-between;
    }
    .module-one{
        width: 40%;
        height: 140px;
        line-height: 140px;
    }
    .module-two{
        width: 60%;
        height: 140px;
        font-size: 11px;       
    }
    .module-two p{
        margin-top: 0;
        margin-bottom: 5px;
        color:#d7d7d7;
    }
    .module-two_top{
        width: 170px;
        display: flex;
        justify-content: space-between;
    }
    .redpacket-require-bottom p{
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 12px;
        margin-left: 10px;
    }
    
</style>
