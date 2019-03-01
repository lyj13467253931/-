<template>
  <div id="app">
    <serch></serch>
    <tuijian></tuijian>
  </div>
</template>

<script>
import serch from './serchView.vue'
import tuijian from './tuijianVIew.vue'

export default {

  components:{
    serch,
    tuijian
  }
  //方式1
  // computed:{ 
  //     count(){
  //     return this.$store.state.count;
  //   }
  // }
  
  //方式2
  // computed:mapState([
  //   'count'
  // ]),
  // computed:mapGetters([
  //   'count',
  //   'isEvenOrOdd'
  // ]),
  // methods:mapActions([
  //   'increment',
  //   'jian',
  //   'incrementAsync'
  // ])
}
</script>

<style>

</style>
