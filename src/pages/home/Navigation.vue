<template>
    <div class="navigation">
      <van-row>
        <van-col span="3">武汉</van-col>
        <van-col span="18"><van-search @keydown="show($event)" @click="tosearch" background="#33cccc" placeholder="华莱士炸鸡汉堡" v-model="value" /></van-col>
        <van-col span="3"><van-icon name="location" /></van-col>
      </van-row>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      value: ""
    };
  },
  methods:{
    tosearch(){
      this.$router.push({
        path:'homesearch'
      })
    },
    show: ev => {
      if (ev.keyCode == 13) {
        Toast("搜索中。。。。");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.navigation {
  .van-row {
    background: #33cccc;
    .van-col {
      height: pxToRem(80);
      line-height: pxToRem(80);
      color: #ffffff;
      text-align: center;
    }
    .van-search {
      height: pxToRem(80);
      padding: 6px 0;
      .van-icon-search {
        left: 11px;
      }
    }
    .van-icon{
      font-size: pxToRem(37);
      line-height: pxToRem(80);
    }
  }
}
</style>
