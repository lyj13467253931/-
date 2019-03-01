<template>
    
    <div class="HelpHeard">
       <van-nav-bar title="客服与帮助" left-text="" right-text="" left-arrow @click-left="onClickLeft" />
        <p class="self-service">自助服务</p>
        <div style="display:flex;">
            <router-link  v-for='(item,index) in items' :key='index' class="subject"  :to='item.to'>
                <div>
                    <img :src="item.src"  alt="">
                    <p class="introduce">{{item.name}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>
    
    export default {
    
        data(){
            return{
                items:[
                    {src:require('../static/img/one.png'),name:'退款/售后',to:'/Aftersales'},
                    {src:require('../static/img/two.png'),name:'发票服务',to:'/Fapiao'},
                    {src:require('../static/img/three.png'),name:'我要投诉',to:''}
                ]
            }
        },
        methods:{
            onClickLeft() {
                
            },
            add(index){
                if(index==name){
                    this.$router.push({path:'/Aftersales'})
                    // console.log(this.$router)
                }
                // console.log(index)
            }
        }
        
    }
    
</script>
<style lang="less" scoped>
    .HelpHeard{
        width:100%;
        .self-service{
            font-size:24px;
            font-weight:bold;
            padding:15px 10px;
        }
        .subject{
            height:120px;
            width:200px;
            text-align:center;
            display:block;
            img{
                width:38px;
                height:40px;
            }
            .introduce {
                font-size:14px;
            }
        } 

    }
</style>
