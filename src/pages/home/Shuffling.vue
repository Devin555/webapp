<template>
    <div class="lunbo">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for='(item,index) in images' :key="index">
                <div class="img"><img :src="item.url" alt="ad"></div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      images:[
          {url:"../../../static/img/shuffling01.png"},
          {url:"../../../static/img/shuffling02.png"},
          {url:"../../../static/img/shuffling03.png"},
          {url:"../../../static/img/shuffling04.png"}
      ]
    };
  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.lunbo .img {
    height: 8rem;
}
</style>
