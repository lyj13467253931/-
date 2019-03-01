<template>
  <div>
    <navView></navView>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import navView from './navView'
import bottom from './bottom'
export default {
  components: {
    navView,
    bottom
  }
}
</script>

<style>

</style>
