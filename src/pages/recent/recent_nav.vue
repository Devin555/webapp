<template>
    <div class="recentNav">
        <!-- <van-row>
            <van-col span="6"><van-icon name="location" />八一花园</van-col>
            <van-col span="18"><van-search background="#fff" placeholder="找附件的吃喝玩乐" v-model="value" /></van-col>
        </van-row> -->


        <van-nav-bar>
            <span slot="left" class="address"><van-icon name="location" />八一花园</span>
            <van-search @keydown="show($event)" background="#fff" placeholder="找附件的吃喝玩乐" v-model="value" slot="right"/>
        </van-nav-bar>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
        value:''
    };
  },
  methods: {
    show: ev => {
      if (ev.keyCode == 13) {
        Toast("搜索中。。。。");
      }
    }
  }
};
</script>

<style lang="scss">
.recentNav {
  .address {
    font-size: pxToRem(22);
    display: inline-block;
    width: pxToRem(200);
    color: #666;
    .van-icon-location {
      color: #666;
      margin-bottom: pxToRem(4);
      margin-right: pxToRem(4);
    }
  }
  .van-search .van-cell {
    background: #f2f2f2;
    border-radius: pxToRem(50);
    width: pxToRem(436);
  }
  .van-field--has-icon .van-field__control {
    background: #f2f2f2;
  }
}
</style>

