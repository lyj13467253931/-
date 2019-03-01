<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar v-show='$route.meta.showTabbar'></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'

export default {
  name: 'app',
  components: {
    Tabbar
  }
}
</script>

<style >
#app {
 width: 100%;height: 100%;
padding-bottom: 15%;
margin:0 auto;

}
.clearfix:after{display:block;content:'';clear:both;}
.clearfix{zoom:1;}
.fl{float:left;}
.fr{float:right;}
</style>
