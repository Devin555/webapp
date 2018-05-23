<template>
  <div class="ads">
      <div class="adsTitle">
        <div class="biwan">必玩景点榜</div>
        <div class="more">更多</div>
      </div>
      <div class="adsMain">
        <div class="adsmain" v-for="(item,index) in data" :key="index">
          <div class="img"><img :src="item.imgurl" alt=""></div>
          <div class="title">{{item.title}}</div>
          <div class="content"><span>￥{{item.price}}起</span>&nbsp;距离我{{item.juli}}米</div>
        </div>
      </div>
  </div>
</template>

<script>
import { ad } from "@/API/api";
export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.ad();
  },
  methods: {
    async ad() {
      let param = {};
      const response = await ad(param);
      if (response.data.code == 200) {
        this.data = response.data.data;
      } else {
        console.log("fail");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.ads {
  margin-top: pxToRem(16);
  background: #ffffff;
  .adsTitle {
    display: flex;
    justify-content: space-between;
    padding: pxToRem(12) pxToRem(17);
    .biwan {
      height: pxToRem(45);
      line-height: pxToRem(45);
      background: #66ccff;
      font-size: pxToRem(22);
      width: pxToRem(180);
      text-align: center;
      border-radius: pxToRem(20);
      color: #ffffff;
    }
    .more {
      height: pxToRem(45);
      line-height: pxToRem(45);
      color: #999;
      font-size: pxToRem(22);
    }
  }
  .adsMain {
    display: flex;
    justify-content: space-between;
    padding: 0 pxToRem(17);
    .img {
      width: pxToRem(224);
      height: pxToRem(140);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      width: pxToRem(224);
      font-size: pxToRem(25);
      padding: pxToRem(8) 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      width: pxToRem(224);
      font-size: pxToRem(10);
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        font-size: pxToRem(8);
        color: #be9e4d;
      }
    }
  }
}
</style>
