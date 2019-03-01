<template>
    <div class="Aftersales">
        <van-nav-bar title="售后服务" left-text="" right-text="" left-arrow @click-left="onClickLeft"/>
        <van-tabs v-model="active">
            <van-tab title="申请售后"></van-tab>
            <van-tab title="售后记录"></van-tab>
        </van-tabs>
    </div>
</template>
<script>
    export default {
        name:'Aftersales',
        data(){
            return {
                active: 2
            }
        },
        methods:{
            onClickLeft() {
                this.$router.back(-1)
            },

        }
    }
</script>