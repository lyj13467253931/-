<template>
    <div>
        <div class="clearfix content">
            <h1 style="display:flex;font-weight:normal;font-size:18px;margin-bottom:15px;margin-left:14px;">推荐商品</h1>
            <div v-for="(item, index) in items" :key="index" class="product fl">
            <img :src="item.src" alt="" class="img">
            <div>
            <p>{{ item.text1 }}</p >
            <p class="text2">{{ item.text2 }}</p >
            </div>
            <div class="price">
            <span class="weight">{{ item.price }}</span>
            <span ><van-icon name="cart-circle" color="#ff4891" size="25px" /></span>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {
                src:require('@/assets/apple.png'),
                text1: '【新人】烟台富士185..' ,
                text2:'天生耿直boy 让你一口脆...',
                price:'￥9.9'
                },
                {
                src:require('@/assets/apple.png'),
                text1: '【新人】烟台富士185..' ,
                text2:'天生耿直boy 让你一口脆...',
                price:'￥9.9'
                }
           ]
        }  
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.product{
width:49%;
font-size: 14px;
color: #474245;
line-height: 20px;
padding:0 5px 0 5px;
box-sizing: border-box;
border-radius:10px;
background:#fff;
margin-left:2px;
}
.text2{
font-size: 12px;
color: #9a9a9a;
margin-bottom: 5px;
}
.price{
display: flex;
justify-content: space-between;
padding-left:14px;
}
.weight{
font-weight: bold;
padding-top: 3px;
box-sizing: border-box
}
.car{
background: #ff4891;
width: 30px;
height: 30px;
text-align: center;
line-height: 30px;
border-radius: 50%;
font-size:19px;
margin-bottom: 10px;
}
.content{
margin-bottom: 60px;
}
.img{
    width:100%;
}
.clearfix:after{display:block;content:'';clear:both;}
.clearfix{zoom:1;}
.fl{float:left;}
.fr{float:right;}

</style>

