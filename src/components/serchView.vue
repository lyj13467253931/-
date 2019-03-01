<template>
    <div class="index">
        <!-- 头部 -->
        <div class="header">
            <span @click="back">〈</span>
            <van-search  v-model="value"  placeholder="请输入商品名称" clear type="search" show-action  style="background: #FFF;width:90%;">
                <div slot="action" @click="onSearch()" >搜索</div>
            </van-search>
            
        </div>
        <!-- 主体 -->
        <div class="zhuti">
                <!-- 热门搜索 -->
                <div class="rem">
                        <p class="cuti">热门搜索</p>
                        <div class="remlists">
                                <p class="remlist">
                                    1
                                </p>
                        </div>
                </div>
                <!-- 搜索历史 -->
                <div class="history" v-show="shanc" >
                        <p class="cuti">历史搜索  <span class="qingc" @click='shanchu'><i class="iconfont icon-lajitong"></i>清空历史纪录</span></p>
                        <div class="historylists" >
                            <ul class="jilulist">
                                <li class="historylist" v-for="(item,index) in jilu" :key='index' >
                                    {{item}}
                                </li>
                            </ul>
                                
                        </div>
                </div>
        </div>
        
    </div>
</template>
<script>

export default {
    data(){
        return{
                shanc:false,
                jilu:[],
                value:''
                
        }
    },
    computed:{

    },
    methods:{     
        shanchu(){
                this.shanc = false;
                this.jilu =[]
        },
        onSearch(){
            if(this.value!=''){
                
                     this.shanc = true
                    // console.log(this.value)
                    this.jilu.unshift(this.value)
                    this.value=''
                    // console.log(this.jilu)
                this.$http({
                    url:this.$path.Searchbox,
                    method:'post',
                    params:{
                        Searchboxtext:this.value
                    }
                }).then(res => {
                    console.log(res)
                }).catch(res => {
                    console.log('111')
                })
            }       
        },
        back(){
            this.$router.back(-1)
        }
    }
}
</script>

<style scoped>
      /* 头部 */
      .header{width: 100%;height: 44px;display: flex;border-bottom: 1px solid #cfc6c6;
        padding-left: 3%}  
      .header span{
          padding:12px 0;box-sizing: border-box;font-size:18px
      }
      /* 主体 */
      .zhuti{padding: 0 10px;box-sizing: border-box;}
      /* 热门搜索 */
      .cuti{margin: 16px 0 0 0;font-weight: bold;display: flex;justify-content: space-between;}
      .rem{border-bottom: 1px solid #cfc6c6; }
      .remlists{display: flex;flex-wrap: wrap;}
      .remlist{
                    border: 1px solid #cfc6c6;
                    text-align: center;
                    height: 20px;
                    line-height: 20px;
                    border-radius: 4px;
                    padding: 2px 6px;
                    font-size: 12px;
                    margin: 12px 12px 6px 0;
               }
       /* 历史纪录 */
      .jilulist{display: flex;flex-wrap: wrap;}
      .history{border-bottom: 1px solid #cfc6c6;}
      .historylists{display: flex;flex-wrap: wrap;}
      .historylist{
                    border: 1px solid #cfc6c6;
                    text-align: center;
                    line-height: 20px;
                    border-radius: 4px;
                   
                    padding: 2px 6px;
                    font-size: 12px;
                    margin: 12px 12px 6px 0;
                }
      .qingc{font-size: 13px;color: #999}
      .active{overflow: hidden;}
</style>
