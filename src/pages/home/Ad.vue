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
export default {
  data() {
    return {
      data: [
        { imgurl: "../../../static/img/shuffling01.png", title: "武汉欢乐谷", price: 90, juli: 1000 },
        { imgurl: "../../../static/img/shuffling02.png", title: "东湖生态旅游风景区", price: 390, juli: 1250 },
        { imgurl: "../../../static/img/shuffling03.png", title: "晴川阁", price: 43, juli: 2000 }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.ads {
  margin-top: 0.6rem;
  background: #ffffff;
  .adsTitle{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.6rem;
    .biwan{
      height: 1.6rem;
      line-height: 1.6rem;
      background: #66ccff;
      font-size: 0.8rem;
      width: 7rem;
      text-align: center;
      border-radius: 3px;
      color: #ffffff;
    }
    .more{
      height: 1.6rem;
      line-height: 1.6rem;
      color: #999;
      font-size: 0.5rem;
    }
  }
  .adsMain {
    display: flex;
    justify-content: space-between;
    padding: 0 0.6rem;
    .img {
      width: 8rem;
      height: 5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      width: 8rem;
      font-size: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      width: 8rem;
      font-size: 0.4rem;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        font-size: 0.8rem;
        color: #be9e4d;
      }
    }
  }
}
</style>
