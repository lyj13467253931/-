<template>
    <div>
        <div class="title">
        <van-nav-bar>   
            <van-icon name="scan" slot="right"/>
        </van-nav-bar>
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        </div>
        <div class="container">
            <div class="left">
                <van-badge-group :active-key="activeKey" @change="onChange">
                    <van-badge v-for="item in lname" :title="item.gtname" :key="item.id" />
                </van-badge-group>
            </div>
            <div class="right">
                <van-tabs v-model="active">
                <van-tab v-for="item in lname"  :title="item.gtname"  :key="item.id" >
                        <van-card
                            tag="标签"
                            price="2.00"
                            desc="描述信息"  
                            title="商品标题"
                            :thumb="imageURL"
                            origin-price="10.00"
                            >
                            <div slot="footer">
                                <van-icon name="cart-circle" size="30px" color="#fe4a93"  />
                            </div>
                        </van-card>
                </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'classify',
    data(){
        return {
            imageURL:require('@/assets/logo.png'),
            activeKey: 0,
            // leftname:[
                // {id:0,bigname:'热卖',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:1,bigname:'上新',smallname:['热卖新品','水果尝鲜','零食糕点','主食素食','乳品酒饮']},
            //     {id:2,bigname:'水果',smallname:['本周上新','安心水果','葡萄浆果','苹果梨','热带水果']},
            //     {id:3,bigname:'蔬菜',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:4,bigname:'乳品',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:5,bigname:'肉蛋',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:6,bigname:'水产',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:7,bigname:'零食',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:8,bigname:'酒饮',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:9,bigname:'熟食',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']},
            //     {id:10,bigname:'日百',smallname:['会员抢购','菜肉蛋奶','年货爆款','安心肉蛋','安心水产']}
            // ],
           lname:[]
        }
    },
      methods: {
        onChange(key) {
        this.activeKey = key;
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    display: flex;
    width: 100%;
}
.left{
    width: 60px;
    float: left;
}
.right{
    float: left;
    flex-grow: 1;
}

</style>



