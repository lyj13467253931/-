<template>
    <div class='fapiao'>
        <ul class='kaipls'>
            <li @click='backs' style="margin-right: 130px;" > 〈 </li>
            <li style='font-weight: bold;'>开票历史</li>
            <!-- <li style="font-size:14px;">开票历史</li> -->
        </ul>
    </div>
</template>
<script>
export default {
    name:'fblsView',
    methods:{
        backs(){
            this.$router.back(-1)
        }
    }
    
}
</script>
<style scoped>
     .kaipls{
            display: flex;
            justify-content: flex-start; 
            padding: 0 6px;
            box-sizing: border-box;
            width: 100%;
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            border-bottom: 0.5px solid 	#F5F5F5;
            

            
        }
   
</style>