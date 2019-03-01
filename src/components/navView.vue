<template>
<div>
     <van-nav-bar
    title="1元拼团"
    left-text="返回"
   
    left-arrow
    @click-left="onClickLeft"
    
    />
</div>
   
</template>
<script>
export default {  
        name:'navView',     
        methods: {
        onClickLeft() {
        // Toast('返回');
        }
    //     onClickRight() {
    //   Toast('按钮');
    // }
  }
}
</script>
<style scoped>
div.van-nav-bar.van-hairline--bottom{
width:100%;
}
i.van-icon.van-icon-arrow-left.van-nav-bar__arrow{
color:#323233;
}
div.van-nav-bar__title.van-ellipsis {
font-size: 20px;
}
span.van-nav-bar__text{
color:#323233;
}
</style>


