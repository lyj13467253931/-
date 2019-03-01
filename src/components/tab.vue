<template>
    <div>
        <div class="color"></div>    
        <van-tabs v-model="active">
        <van-tab title="老带新团">
            <div class="commodity" v-for='(item,index) in items' :key='index'>
               <img :src="item.src" alt=""> 
               <div>
                  <div>{{item.conter}}</div> 
                  <div class="div">{{item.txt}}</div>
                  <div class="span">{{item.text}}</div>
                  <div class="number1">￥{{item.number}}</div>
                  <div class="number">{{item.number1}}</div>  
                 <div class="button">去开团</div>
               </div> 
            </div>
        </van-tab>
        <van-tab title="全民图">
          <div class="commodity" v-for='(mage,index) in mages' :key='index'>
               <img :src="mage.src" alt=""> 
               <div>
                  <div>{{mage.conter}}</div> 
                  <div class="div">{{mage.txt}}</div>
                  <div class="span">{{mage.text}}</div>
                  <div class="number1">￥{{mage.number}}</div>
                  <div class="number">{{mage.number1}}</div>  
                 <div class="button">去开团</div>
               </div> 
              </div>
        </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      items:[
        {src:require('../static/img/12.png'),conter:'2个！泰国椰青',txt:'已团6049件',text:'4人团',number:'4.9',number1:'￥34.5'},
        {src:require('../static/img/12.png'),conter:'2个！泰国椰青',txt:'已团6049件',text:'4人团',number:'4.9',number1:'￥34.5'},
        {src:require('../static/img/12.png'),conter:'2个！泰国椰青',txt:'已团6049件',text:'4人团',number:'4.9',number1:'￥34.5'},
        {src:require('../static/img/12.png'),conter:'2个！泰国椰青',txt:'已团6049件',text:'4人团',number:'4.9',number1:'￥34.5'},
        {src:require('../static/img/12.png'),conter:'2个！泰国椰青',txt:'已团6049件',text:'4人团',number:'4.9',number1:'￥34.5'}
      ],
       mages:[
        {src:require('../static/img/11.png'),conter:'10个！库尔勒香梨',txt:'已团11476件',text:'4人团',number:'4.9',number1:'￥19.9'},
        {src:require('../static/img/11.png'),conter:'10个！库尔勒香梨',txt:'已团11476件',text:'4人团',number:'4.9',number1:'￥19.9'}
       ]
    }
  }
}


</script>
<style  lang="less" scoped>
 .color{width: 100%;height: 3rem;background:#ccc;margin-top:0.9rem;}
 .commodity{
     width: 100%;  
     height: 2.1rem;
     background:#fff;
     border-bottom: 0.01rem solid #ccc;
     display: flex;
     position: relative;
       img{
           width: 1.5rem;
           height: 1.5rem;
           margin:0.2rem 0 0 0.2rem;    
       }
       div{
            width: 4rem;
            height: 2rem;
             overflow: hidden;
            div{
                font-size: 0.4rem;
                height: 0.6rem;
                margin-top: 0.1rem;
            }
            .div{
                font-size: 0.4rem;
                background:#ffe9ed;
                color: pink;
                width:2.6rem;
                text-align: center;
               float:left;
            }
            .span{
                width:1.2rem;
                height: 0.5rem;
                border: #ffe9ed  solid 0.01rem;
                font-size: 0.4rem;
                float: right;
                margin-top: 0.1rem;
                color: pink;
                text-align: center;line-height: 0.5rem;
                
            }
            .number{
                float: left;text-decoration:line-through;width: 1.6rem;
            }
            .number1{
                    font-weight:bold;color:pink;font-size:0.5rem;width:1.6rem;
                    float:left;margin-top: 0rem;
                }
            .button{
                width: 2rem;
                height: 0.5rem;
                position: absolute;bottom: 0.15rem;right: 0.8rem;
                font-size: 0.4rem;
                background: pink;
                 text-align: center;line-height: 0.5rem;
                 border-radius: 0.2rem;
                 color: #fff
        }
    }
 }
</style>
