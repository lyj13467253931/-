<template>
    <div class="HelpButton">
        <van-button size="large" class="button" >在线客服</van-button>
        <p class="hotLine" @click="onclick">客服热线</p>
        <p class="hint">温馨提示：客服工作时间9：00-23：00</p>
    </div>
</template>
<script>
    export default {
        name:'HelpButton',
        methods:{
            onclick(){
                this.$toast({
                    title: '联系客服',
                    content: '如您遇到商品质量或订单相关问题，建议您直接使用自助服务进行处理，或联系在线客服解决。',
                    type: 'warning',
                    onShow: () => {
                        // console.log('on toast show')
                    },
                    onHide: () => {
                        // console.log('on toast hide')
                    }
                })
            },
            // onnclick(){
            //     this.$toast('敬请期待',)
            // }
        }
    }
</script>
<style lang="less" scoped>
    .HelpButton{
        width:100%;
        height:170px;
        text-align:center;
        position:fixed;bottom: 0;
        background:#fff;
        .button{
            width:95%;
            font-size: 18px;
            background: #fc4a96;
            border-radius:6px;
            color:#fff;
            margin-top:10px;
        }
        .hotLine{
            font-size: 16px;
           
            margin-top:20px;
            color:#fc4a96;
        }
        .hint{
            font-size: 14px;
            margin:20px;
            color:#969696;
        }
    }
</style>