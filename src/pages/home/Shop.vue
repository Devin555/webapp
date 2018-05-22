<template>
  <div class="shops">
      <div class="shopsTitle">猜你喜欢</div>
      <div class="shopsContent">
        <div class="kuai">
          <div class="img"><img src="../../../static/img/taocan.png" alt=""></div>
          <div class="imgcontent">
            <div class="title">至尊披萨</div>
            <div class="imgtxt">小众推荐过几款取色软件ColorSPY和千宇,这次这个ColorPix呢,功能要比前两个强,而且用户体验更好,比如选定区域按</div>
            <div class="imgprice">
              <span class="prileft">￥59元</span>
              <span class="priright">已售：4000</span>
            </div>
          </div>
        </div>
        <div class="kuai">
          <div class="img"><img src="../../../static/img/taocan.png" alt=""></div>
          <div class="imgcontent">
            <div class="title">至尊披萨</div>
            <div class="imgtxt">小众推荐过几款取色软件ColorSPY和千宇,这次这个ColorPix呢,功能要比前两个强,而且用户体验更好,比如选定区域按</div>
            <div class="imgprice">
              <span class="prileft">￥59元</span>
              <span class="priright">已售：4000</span>
            </div>
          </div>
        </div>
        <div class="kuai">
          <div class="img"><img src="../../../static/img/taocan.png" alt=""></div>
          <div class="imgcontent">
            <div class="title">至尊披萨</div>
            <div class="imgtxt">小众推荐过几款取色软件ColorSPY和千宇,这次这个ColorPix呢,功能要比前两个强,而且用户体验更好,比如选定区域按</div>
            <div class="imgprice">
              <span class="prileft">￥59元</span>
              <span class="priright">已售：4000</span>
            </div>
          </div>
        </div>
        <div class="kuai">
          <div class="img"><img src="../../../static/img/taocan.png" alt=""></div>
          <div class="imgcontent">
            <div class="title">至尊披萨</div>
            <div class="imgtxt">小众推荐过几款取色软件ColorSPY和千宇,这次这个ColorPix呢,功能要比前两个强,而且用户体验更好,比如选定区域按</div>
            <div class="imgprice">
              <span class="prileft">￥59元</span>
              <span class="priright">已售：4000</span>
            </div>
          </div>
        </div>
        <div class="kuai">
          <div class="img"><img src="../../../static/img/taocan.png" alt=""></div>
          <div class="imgcontent">
            <div class="title">至尊披萨</div>
            <div class="imgtxt">小众推荐过几款取色软件ColorSPY和千宇,这次这个ColorPix呢,功能要比前两个强,而且用户体验更好,比如选定区域按</div>
            <div class="imgprice">
              <span class="prileft">￥59元</span>
              <span class="priright">已售：4000</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.shops {
  background: #ffffff;
  margin-top: 0.6rem;
  padding-bottom: 57px;
  overflow: hidden;
  .shopsTitle {
    font-size: 1.1rem;
    padding: 0.4rem 0.8rem;
  }
  .shopsContent {
    padding-left: 0.6rem;
    .kuai {
      overflow: hidden;
      margin-top: 0.3rem;
      .img {
        width: 8rem;
        height: 7rem;
        float: left;
      }
      .imgcontent {
        float: left;
        padding: 0 0.8rem;
        .title {
          font-size: 1rem;
          font-weight: bold;
        }
        .imgtxt {
          margin: 0.6rem 0;
          font-size: 0.5rem;
          color: #999;
          line-height: 1.5rem;
          height: 3rem;
          width: 16rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .imgprice {
          overflow: hidden;
          span {
            display: inline-block;
          }
          .prileft {
            float: left;
            font-size: 1rem;
            color: red;
          }
          .priright {
            float: right;
            font-size: 0.6rem;
          }
        }
      }
    }
  }
}

</style>
