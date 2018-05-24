<template>
    <div class="shopfood">
        <div>
            <van-nav-bar title="商品/店铺" left-arrow @click-left="onClickLeft"/>
        </div>
        <div class="topimg">
            <img :src="list.imgurl" alt="">
        </div>
        <div>
            <div class="foodname">{{list.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      fooddata: [
        {
          id: 22,
          imgurl: "../../../../static/img/taocan.png",
          title: "至尊披萨"
        },
        {
          id: 23,
          imgurl: "../../../../static/img/recent-shiwu.png",
          title: "甜品小吃"
        },
        {
          id: 12,
          imgurl: "../../../../static/img/recent-shiwu01.png",
          title: "法国牛排"
        },
        {
          id: 45,
          imgurl: "../../../../static/img/recent-shiwu02.png",
          title: "中餐料理"
        }
      ],
      list:{}
    };
  },
  mounted() {
    this.getData(this.$route.query.id);
  },
  methods: {
    getData(id) {
        for(var i in this.fooddata){
            if(this.fooddata[i].id == id){
                this.list = this.fooddata[i];
            }
        }
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
.shopfood {
  .topimg {
    width: 95%;
    height: pxToRem(400);
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .foodname {
    font-weight: bold;
    font-size: pxToRem(35);
    padding: pxToRem(20);
  }
}
</style>

