<template>
  <div class="recent">
      <recentnav></recentnav>
      <recentpic></recentpic>
      <recenttab></recenttab>
  </div>
</template>

<script>
import Recentnav from './recent_nav';
import Recentpic from './recent_pic';
import Recenttab from './recent_tab';
export default {
  name: 'recent',
  data () {
    return {
      
    }
  },
  components:{
    Recentnav,
    Recentpic,
    Recenttab
  }
}
</script>

<style lang="scss">

</style>
