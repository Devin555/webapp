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
export default {
  data() {
    return {
      images: [
        { title: "美食", url: "../../../static/img/meishi.png" },
        { title: "电影", url: "../../../static/img/dianying.png" },
        { title: "酒店", url: "../../../static/img/jiudian.png" },
        { title: "KTV", url: "../../../static/img/ktv.png" }
      ],
      images01: [
        { title: "今日新单", url: "../../../static/img/xindan.png" },
        { title: "代金卷", url: "../../../static/img/daijinjuan.png" },
        { title: "周边游", url: "../../../static/img/zhoubianyou.png" },
        { title: "外卖", url: "../../../static/img/waimai.png" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.lanmu {
  background: #ffffff;
}
.fenleiout {
  width: 4rem;
}
.lanmu .fenlei,
.fenlei01 {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 2rem;
}
.fenleiimg {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
.fenleiTitle {
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: 0.8rem;
}
</style>
