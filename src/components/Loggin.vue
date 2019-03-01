<template>
<div class="loggin">
    <van-nav-bar
        title="登录"
        left-text="返回"
        @click-left="back"
        />
    <div class="entry">
    <van-field
            v-model="sms"
            center
            clearable
            placeholder="请输入手机号码"
            @focus="entry"
            @blur="cancle"
            :value="sms"
        >
        <van-button slot="button" size="small" :disabled="ty" type="primary" @click="send">{{msg}}</van-button>
    </van-field>
    <van-cell-group>
        <van-field  placeholder="请输入验证码" v-model="smss"  :value="smss" />
    </van-cell-group>
    <div class="context">
        <van-checkbox v-model="checked" checked-color="#ff4891">我已阅读理解并同意《每日优鲜用户协议》</van-checkbox>
    </div>
    <button class="submit" @click="login">确认</button>
    </div>
    <van-number-keyboard
        :show="show"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
    />
</div>
</template>

<script>
import { Notify } from 'vant';
export default {
    name:'Loggin',
    data(){
        return {
            sms:'',
            msg:'发送验证码',
            ty:false,
            show:false,
            checked:true,
            smss:'',
            timer:null
        }
    },
    methods:{
        send(){
             var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!this.sms) {
                this.$toast("请输入手机号");
                return;
            } else if (!myreg.test(this.sms)) {
                this.$toast("手机号格式错误");
                return;
            }else{
                this.$http({
                url:this.$path.GetTheAuthenticationCode,
                method:'post',
                params:{
                    CellPhoneNumber:this.sms
                }
                }).then(res => {
                    console.log(res)
                    if(res.status == 200){
                        this.$toast('验证码发送成功')
                        this.time();
                    }
                }).catch(res => {
                    this.$toast(res.data)
                })
            }
        },
        entry(){
            this.show = true
        },
        cancle(){
            this.show = false
        },
        onInput(key) {
            this.sms = (this.sms + key).slice(0, 11);
        },
        onDelete() {
            this.sms = this.sms.slice(0, this.sms.length - 1);
        },
        back(){
            this.$router.back()
        },
        login(){
            this.$http({
                url:this.$path.login,
                method:'post',
                params:{
                    CellPhoneNumber:this.sms,
                    TheAuthenticationCode:this.smss
                }
            }).then(res => {
                localStorage.setItem('id',res.data.userid)
                 this.$router.push('/my')
            }).catch(res => {
                console.log('ship')
            })
        },
        // 每隔60s才能再次获取
        time(){
            let num = 59;
            this.timer = setInterval(() => {
            if (num <= 0) {
                this.msg = "发送验证码";
                clearInterval(this.timer);
            } else {
                this.msg = num + "s重新获取";
                num--;
            }
            }, 1000);
        },
    }
}
</script>

<style scoped>
.loggin{
    width: 100%;
    padding: 0px 15px 0px 15px ;
    box-sizing: border-box
}
.entry{
    padding-top: 20px;
    box-sizing: border-box
}
.procotol{
    color: #ff4891;
    text-decoration: underline
}
.van-field__control{
    margin-bottom: 20px;
}
.context{
    padding: 30px 0px;
    text-align: left;
    vertical-align: center;
}
.submit{
    width: 300px;
    height: 40px;
    border: none;
    background: #ff4891;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
}
</style>

