<template>
    <div class="my">
        <div class="myHeader">
            <div class="my-header-top">
                <div class="my-img ">
                    
                    <img :src="url" alt="">
                    <!-- <van-button type="default"  @click="login">登录/注册</van-button> -->
                </div>
                <div class="my-name">
                    <div class="myUsername">{{username}}</div>
                </div>
                <div class="my-vip">
                    <span class="my-vip-left">优享会员</span>
                    <span class="my-vip-right">体验卡</span>
                </div>
                <div class="vipDate">
                    您的会员还有5天到期
                </div>
            </div>
            <div class="my-header-bottom" @click="sequl">
                <div class="notice">
                    <img src="../../static/images/tz.png" alt="">
                    <span class="text" @click="beng">升级正式会员，做任务领专属红包</span>
                </div>
                <div class="vipCard">
                    <div class="card-top" @click="beng">
                        <div>
                            <img src="../../static/images/V.png" alt="">
                            <span>已为您节省0元</span>
                        </div>
                        <p>立即续费 > </p>
                    </div>
                    <ul >
                        <li v-for="(item,index) in vipList" :key="index">
                            <img :src="item.src" alt="">
                            <span>{{item.text}}</span>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
        <myBottom></myBottom>
    </div>
</template>
<script>
import myBottom from './my-1.vue'
export default {
    name:'my',
    data(){
        return {
            url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2296850844,2676706825&fm=26&gp=0.jpg',
            username:'李××',
          
            vipList:[
                {src:require('../../static/images/zhuanxiangjia.png'),text:'专享价'},
                {src:require('../../static/images/renwuhongbao.png'),text:'任务红包'},
                {src:require('../../static/images/peisong1.png'),text:'1小时达'},
                {src:require('../../static/images/huiyuanri.png'),text:'会员日'},
                {src:require('../../static/images/gongxiang.png'),text:'共享会员'},
                {src:require('../../static/images/cjjf.png'),text:'超级积分'},
                {src:require('../../static/images/zhuanshukefu.png'),text:'专属客服'},
                {src:require('../../static/images/jingqingqidai.png'),text:'敬请期待'},
            ]
        }
    },
    components:{
        myBottom
    },
    computed:{

    },
    methods:{
        login(){
            // this.$router.push('/login') 
        },
        sequl(){
            //this.$router/push('')
        },
        beng(){
            this.$router.push('/home')
        }
       

    }
}
</script>
<style lang="less" scoped>
    .my{
        width:100%;
        .myHeader{
            width:100%;
            height:300px;
            padding:50px 10px 0 10px;
            box-sizing: border-box;
            background: #fdbb33;
            .my-header-top{
                width:100%;
                display: flex;
                position: relative;
                .my-img{
                    width:70px;
                    height:70px;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width:100%;
                        height:100%
                    }
                }
                .my-name{
                    width:100px;
                    height:70px;
                    text-align: center;
                    line-height:70px;
                    .myUsername{
                        font-size: 30px;
                        font-weight: bold;
                    }
                }
                .my-vip{
                    margin-top:26px;
                    // line-height: 80px;
                    // height:80px;
                    font-size:14px;
                    .my-vip-left{
                        background: #4b2d11;
                        color:#f0d5b8;
                        border-radius:8px 0 0 8px;
                        padding:0 10px;
                    }
                    .my-vip-right{
                        background:#ffdb6b;
                        color:#d1b35d;
                        border-radius:0 8px 8px 0;
                        padding:0 10px;
                    }
                }
                .vipDate{
                    position:absolute;
                    right:0;
                    bottom:-20px;
                    font-size: 12px;
                }
            }
            .my-header-bottom{
                position: relative;
                width:100%;
                margin-top:30px;
                .notice{
                    width:100%;
                    height:50px;
                    padding:10px 5px;
                    box-sizing: border-box;
                    display: flex;
                    margin-top:20px;
                    background: #fee09a;
                    border-radius: 10px 10px 0 0 ;
                    img{
                        width:20px;
                        height:20px;
                        vertical-align: center;
                    }
                    .text{
                        font-size: 12px;
                        margin-left:5px;
                    }
                }
                .vipCard{
                    position: absolute;
                    left:0;
                    top:40px;
                    width:100%;
                    padding:10px 5px;
                    box-sizing: border-box;
                    background: #464040;
                    border-radius: 10px 10px 0 0 ;
                    .card-top{
                        width:100%;
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                        div{
                            display: flex;
                            img{
                                width:20px;
                                height:20px;
                            }
                            span{
                                margin-left:10px;
                                color:#ebd57f;
                            }
                        }
                        p{
                            width:100px;
                            background: #f2d287;
                            text-align: center;
                            border-radius: 9px;
                            
                        }
                    }
                    ul{
                        display: flex;
                        border-top:1px solid #817b7b;
                        flex-wrap: wrap;
                        justify-content: space-around;
                        margin-top:10px;
                        img{
                            width:20px;
                            height:20px;
                            vertical-align: center;
                        }
                        li{
                            width:25%;
                            font-size: 10px;
                            line-height: 20px;
                            color:#efe0a7;
                            margin-top:10px;
                            display: flex;
                            span{
                                margin-left:5px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
