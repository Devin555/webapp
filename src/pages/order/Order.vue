<template>
  <div class="order">
    <div>
      <van-nav-bar title="订单" />
    </div>
    <myorder></myorder>
    <collection></collection>
    <browse></browse>
  </div>
</template>

<script>
import Myorder from './Myorder'
import Collection from './Collection'
import Browse from './Browse'
export default {
  data () {
    return {
      
    }
  },
  components:{
    Myorder,Collection,Browse
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
