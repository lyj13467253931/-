<template>
    <!-- 循环商品 -->
    <div class="zuti" >
        <p class="cuti1" style="">推荐商品</p>
        <div class="tuij" >
            <img src="../static/images/chengzi.jpg" alt="" class="juzi">
            <div>
                <p class="feij">奉节脐橙4个600g起</p>
                <p class="cqing">像重庆妹子一样水灵灵的甜</p>
                <div class="jiage">
                    <span style="margin:0;">¥9.9</span>
                     
                    <div >
                       <img src="../static/images/gwc.jpg" alt="" @click="yinc" class="gwc" v-if="anniu" >
                       <div v-else>
                           <!-- 加减 -->
                           <ul id="car">
                                <li><p @click="subtract()" class="jian">-</p></li>
                                <li><span type="text" value="3" size="3" :v-model="count">{{count}}</span></li>
                                <li><p @click="add()" class="jia">+</p></li>
                            </ul>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          count:0,
          anniu:true
        }
    },
     methods:{
        add(count){
          this.count++;
       },
        subtract(count){
          if (this.count <= 1 ){
              this.count = 1;
              this.anniu = true
              console.log(count)
          }else {
            this.count--;
          }
        },
        yinc(){
            this.anniu = false;
            this.count = 1;
        }
   }
}
</script>
<style scoped>
    .zuti{
        padding: 0 10px;
    }
    /* 推荐 */
    .cuti1{
           font-weight: bold;
           border-bottom: 0.2px solid #cfc6c6;
           padding: 16px 0 5px 0;
           margin: 0 ;text-align: left

    }
    /* 循环的商品 */
    .tuij{
           width: 100%;
           display: flex;
           /* justify-content: space-around; */
           padding: 10px 15px;
           box-sizing: border-box;
           border-bottom: 1px solid #cfc6c6;

    }
    /*商品图 */
    .juzi{
            width: 25%;
            height: 90px;
            border-radius: 50%;
            margin-right: 30px;

    }
    /* 详情 */
    .feij{
        margin: 0;
    }
    .cqing{
        margin: 0;
        font-size: 14px;
        color: #8d8686;
        margin-bottom: 10px;
    }
    /* 价格 */
    .jiage{
        width: 198px;
        display: flex;
        justify-content: space-between;
    }
    /* 购物车图 */
    .gwc{
        width: 25px;
        height: 25px;
    }
    /* 加减 */
    #car{
        display: flex;
        justify-content: space-between
    }
    #car,li{
            list-style: none;
    }
    #car input{
        text-align: center;
        width: 16px;
        height: 16px;
        list-style: none;
    }
    .jia{
          font-weight: bold;
          width:18px;
          height:18px;
          border-radius:50%;
          font-size:20px;
          line-height:14px;
          text-align: center;
          background: rgb(255, 5, 255);
          color:#fff ;
          list-style: none;
          margin: 0 0 0 5px; 
    }
    .jian{
          font-weight: bold;
          width:19px;
          height:19px;
          border-radius:50%;
          font-size:20px;
          line-height:14px;
          text-align: center;
          background: #fff;
          color: rgb(255, 5, 255);
          list-style: none;
          border: 1px solid #cfc6c6;
          margin: 0 5px 0 0;
          box-sizing: border-box;
    }
</style>


