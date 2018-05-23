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
import { shuffling } from "@/API/api";
export default {
  data() {
    return {
      images: []
    };
  },
  mounted() {
    this.shuffling();
  },
  methods: {
    async shuffling() {
      let param = {};
      const response = await shuffling(param);
      if (response.data.code == 200) {
        this.images = response.data.imgurl;
      } else {
        console.log("fail");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.lunbo .img {
  height: pxToRem(230);
}
</style>
