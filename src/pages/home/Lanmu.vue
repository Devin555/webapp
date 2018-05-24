<template>
  <div class="lanmu">
    <div class="fenlei">
      <div class="fenleiout" v-for="(item,index) in images" :key="index">
        <div class="fenleiimg"><img :src="item.url" alt=""></div>
        <div class="fenleiTitle">{{item.title}}</div>
      </div>
    </div>
    <div class="fenlei">
      <div class="fenleiout" v-for="(item,index) in images01" :key="index">
        <div class="fenleiimg"><img :src="item.url" alt=""></div>
        <div class="fenleiTitle">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { lanmu } from "@/API/api";
export default {
  data() {
    return {
      images: [],
      images01: []
    };
  },
  mounted() {
    this.lanmu();
  },
  methods: {
    async lanmu() {
      let param = {};
      const response = await lanmu(param);
      if (response.data.code == 200) {
        this.images = response.data.data.images;
        this.images01 = response.data.data.images01;
      } else {
        console.log("fail");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.lanmu {
  background: #ffffff;
}
.fenleiout {
  width: pxToRem(112);
}
.lanmu .fenlei {
  display: flex;
  justify-content: space-between;
  padding: pxToRem(17) pxToRem(56);
}
.fenleiimg {
  width: pxToRem(84);
  height: pxToRem(84);
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
.fenleiTitle {
  height: pxToRem(50);
  line-height: pxToRem(50);
  text-align: center;
  font-size: pxToRem(22);
}
</style>
