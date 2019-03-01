<template>
  <div id="app">
      <div class='height'>
          <HelpH></HelpH>
          <HelpS></HelpS>
      </div>
    
    <HelpB></HelpB>
    <!-- <Aftersales></Aftersales> -->
  </div>
</template>

<script>
// import Aftersales from './components/Aftersales'
import HelpH from './HelpH'
import HelpS from './HelpS'
import HelpB from './HelpB'
export default {
  name: 'index',
  components: {
    HelpH,
    HelpS,
    HelpB
    // Aftersales

  }
}
</script>

<style scoped>
    .height{
        height: 900px;
        overflow-y: scroll;
    }
 
</style>
