<template>
  <div class="home">
    <daohang></daohang>
    <lunbo></lunbo>
    <lanmu></lanmu>
    <ad></ad>
    <shop></shop>
  </div>
</template>

<script>
import Daohang from "./Navigation";
import Lunbo from "./Shuffling";
import Lanmu from "./Lanmu";
import Ad from "./Ad";
import Shop from "./Shop";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    Daohang,
    Lunbo,
    Lanmu,
    Ad,
    Shop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home{
  background: #f2f2f2;
}
</style>
