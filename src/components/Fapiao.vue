<template>
    <div class='fapiaos'>
        <ul class='kaip'>
            <li @click='back'> 〈 </li>
            <li style='font-weight: bold'>按订单开票</li>
            <li style="font-size:14px;" @click="lishi">开票历史</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'fapiao',
    methods:{
        back(){
            this.$router.back(-1)
        },
        lishi(){
            this.$router.push('/FblsView')
        }
    }
    
}
</script>
<style scoped>
     .kaip{
            display: flex;
            justify-content: space-between; 
            padding: 0 6px;
            box-sizing: border-box;
            width: 100%;
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            border-bottom: 0.5px solid 	#F5F5F5;
            

            
        }
   
</style>