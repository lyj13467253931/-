
<template>
      <div class="HelpService">
            <van-collapse v-model="value">
                  <p>猜你想问</p>
                  <van-collapse-item v-for="(item,index) in activeNames" :title="item.title" :name="item.name" :key="index" >
                  <ul>
                        <li v-for="(item1,active) in item.value" :key="active">{{item1}}</li>
                  </ul>
                  </van-collapse-item>
            </van-collapse>
      </div>
</template>
<script>
      export default {
            name: 'HelpService',
            data() {
                  return {
                        value:['0'],
                        activeNames: [
                              {     title:'1、如何催单',
                                    value:['1.订单状态为“待收货”时，进入App【我的】--【我的订单】--【查看详情】--【催单】','2.订单状态为“配送中”时，进入App【我的】--【我的订单】--【查看详情】--联系配送员或快递快递承运商客服'],
                                    name:'1'
                              },
                              {     title:'2、商品不想要了怎么退款',
                                    value:['1.生鲜商品具有新鲜度，易腐x性等特点限制，目前不支持无理由退换货',
                                          '2.订单状态为“已支付”时，可以申请取消订单，退款金额和使用的优惠券将在1-5个工作日内原路返回到原支付账户中',
                                          '3.订单状态为“配送中”时，无法取消订单；进入App【我的】--【我的订单】--【查看详情】--联系配送员拒收',
                                          '4.若您收到的商品有问题，请您再签收48小时后即使拍照留证并联系每日优鲜客服反馈处理；或进入App【我的】--【我的订单】--【查看详情】--【申请售后退款】--来进行处理'],
                                    name:'2'
                              },
                              {     title:'3、修改收货信息',
                                    value:['1.目前暂不支持修改订单信息，配送员会按照订单上的预留信息进行配送，如需修改收货信息，建议您参考第2条申请退款，重新下单购买'],
                                    name:'3'
                              },
                              {     title:'4、红包不可用原因',
                                    value:['1.部分商品（低价商品、带有不可使用红包标识）不可使用红包','2.红包需购物车可用红包商品实际支付满使用限额'],
                                    name:'4'
                              },
                              {     title:'5、商品券怎么使用',
                                    value:['1.APP/微信商城点击[我的] - [商品券]查看商品券','2.同一.笔订单只可以使用一张商品券.商品券会员价+优惠券可以一起使用，只需将商品券添加对应商品在购物车即可','3.在购物车“去结算”前，商品券会自动出现在“商品券”抵扣区域，结算时会扣除该实物商品金额;如未自动出现在“商品券”抵扣区域且显示“有可用商品券”，可手动点击选择“商品券”进行抵扣'],
                                    name:'5'
                              },
                              {     title:'6、如何开发票',
                                    value:['1.APP/微信商城点击[我的] - [我的订单] - [开发票]自主申请开具发票','2.自主开具发票分为:纸质发票和电子发票'],
                                    name:'6'
                              },
                              {     title:'7、没申请退款为什么收到退款短信',
                                    value:['1.您订单中所购买商品，有商品未达到出库标准，为保证其他商品按时配送，系统为您操作缺品出库',],
                                    name:'7'
                              },{   title:'8、企业订购',
                                    value:['1.如您需要企业订购商品或团购储值卡，请您拨打：10106066转接8号可订购，也可添加我们的官方微信：meiriyouxian-qy',],
                                    name:'8'
                              },
                        ] 
                  }
            },
      }
</script>
<style lang="less" scoped>
       .HelpService{
        width: 100%;
      //   height:350px;
      //   overflow-y: scroll;
            p{font-size:24px;font-weight:bold;padding:15px 10px;}
        .van-collapse{
            //   padding-top: 0.88rem;
           border-bottom:1px solid #F0F0F0;
            .van-collapse-item__content{
                padding:10px 10px;
                box-sizing:border-box;
                justify-content: strat;
                border:1px solid #f0f0f0;
                
            }
            ul{
                li{
                    font-size:12px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(0,0,0,1);
                    opacity: 0.5;
                    padding-top:10px;
                    
                }
            }
           
        }
    }
</style>