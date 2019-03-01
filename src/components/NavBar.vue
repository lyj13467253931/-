<template>
    <header>
        <div>
            <img src="../common/1.jpg" alt="">
        </div>
        <p>发现</p>
    </header>
    
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
    header{
        height: 40px;width: 100%;display: flex;margin-top:5px;padding-left:3%;
        box-sizing: border-box;
            div{
                height: 30px;width:30px;border:1px solid #f4f4f4;border-radius: 50%;
                    img{
                        width:100%;height:100%;border-radius: 50%;
                    }
            }
            p{
                display:flex;align-items: center;text-align: center;
                margin-left: 35%;
            }
    }
</style>
