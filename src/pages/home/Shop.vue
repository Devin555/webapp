<template>
  <div class="shops">
      <div class="shopsTitle">猜你喜欢</div>
      <div class="shopsContent">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <div class="kuai" v-for="(item,index) in list" :key="index">
            <div class="img"><img :src="item.img" alt=""></div>
            <div class="imgcontent">
              <div class="title">{{item.title}}</div>
              <div class="imgtxt">{{item.imgtxt}}</div>
              <div class="imgprice">
                <span class="prileft">￥{{item.price}}元</span>
                <span class="priright">已售：{{item.sell}}</span>
              </div>
            </div>
          </div>
        </van-list>
      </div>
  </div>
</template>

<script>
import { shop } from "@/API/api";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page:0
    };
  },
  mounted() {
    
  },
  methods: {
    async getdata() {
      let param = {page:1};
      const response = await shop(param);
      if (response.data.code == 200) {
        this.list = response.data.data;       
        this.loading = false;
      } else {
        console.log("fail");
      }
    },
    onLoad() {
      this.loading = true;
      setTimeout(() => {
        this.page++;
        this.getdata();
      }, 1000);
    }
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
