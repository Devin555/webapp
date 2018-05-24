<template>
  <div class="guang">
    <div>
      <van-nav-bar title="发现" />
    </div>
    <guangtab></guangtab>
  </div>
</template>

<script>
import Guangtab from './Guang_tab'
  export default {
    name: "HelloWorld",
    data() {
      return {
        
      };
    },
    components:{
      Guangtab
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
