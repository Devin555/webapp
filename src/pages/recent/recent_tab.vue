<template>
    <div class="recentTab">
        <van-tabs v-model="active" swipeable sticky>
            <van-tab>
                <div slot="title">享美食</div>
                <div class="tabTop">
                    <van-row gutter="20">
                        <van-col span="6">热门</van-col>
                        <van-col span="6">甜点饮品</van-col>
                        <van-col span="6">小吃快餐</van-col>
                        <van-col span="6">火锅烧烤</van-col>
                        <van-col span="6">川湘菜</van-col>
                        <van-col span="6">日韩料理</van-col>
                        <van-col span="6">外卖</van-col>
                        <van-col span="6">自助餐</van-col>
                    </van-row>
                </div>
                <div class="tabContent">
                    <div v-for="(item,index) in goodfood" :key="index">
                        <van-card>
                            <div slot="thumb">
                                <img :src="item.imgurl">
                            </div>
                            <div slot="title" class="title">
                                {{item.title}}
                            </div>
                            <div slot="desc" class="desc">
                                <div class="evaluation">
                                  <van-rate
                                    v-model="value"
                                    :size="10"
                                    :count="5"
                                    color="#FFD700"
                                    void-color="#ceefe8"
                                  /> 
                                  <div>￥{{item.price}}/人</div> 
                                </div>
                                <div>{{item.address}}</div>
                                <div class="haveBorder">{{item.paimin}}</div>
                                <div class="hascolor">{{item.huodong}}</div>
                            </div>
                        </van-card>
                    </div>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title">
                惠生活
                </div>
                内容
            </van-tab>
            <van-tab>
                <div slot="title">
                爱玩乐
                </div>
                内容
            </van-tab>
            <van-tab>
                <div slot="title">
                住酒店
                </div>
                内容
            </van-tab>
            <van-tab>
                <div slot="title">
                全部
                </div>
                内容 
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { goodfood } from "@/API/api";
export default {
  data() {
    return {
      active: 0,
      value: 3,
      goodfood: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      let param = { page: 1 };
      const response = await goodfood(param);
      if (response.data.code == 200) {
        this.goodfood = response.data.data;
      } else {
        console.log("fail");
      }
    }
  }
};
</script>
<style lang="scss">
.recentTab {
  .tabTop {
    background: #f2f2f2;
    .van-row {
      margin: pxToRem(28) pxToRem(10) !important;
      padding-bottom: pxToRem(18);
      .van-col {
        background: #fff;
        width: pxToRem(161);
        margin: pxToRem(18) pxToRem(10) 0;
        padding: pxToRem(3) 0;
        border-radius: 20px;
        color: #999;
        font-size: pxToRem(23);
        text-align: center;
      }
    }
  }
  .tabContent {
    padding-bottom: 56px;
    background: #f2f2f2;
    .van-card {
      background: #fff;
      margin-top: pxToRem(15);
      .title {
        font-weight: bold;
        font-size: pxToRem(30);
      }
      .desc {
        font-size: pxToRem(18);
        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: pxToRem(400);
        }
        .evaluation{
          display: flex;
        }
        .haveBorder {
          font-size: pxToRem(15) !important;
          line-height: pxToRem(29);
          color: #ffc125;
          border: 1px solid #ffc125;
          width: pxToRem(300);
        }
        .hascolor {
          color: #666;
        }
      }
      .footer {
        font-size: pxToRem(20);
        color: #666;
        left: 0;
      }
    }

    img {
      width: 90px;
      height: 90px;
    }
  }
}
</style>

