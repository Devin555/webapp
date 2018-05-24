<template>
    <div class="homesearch">
        <div>
            <van-search v-model="value" background="#fff" placeholder="华莱士炸鸡汉堡我爱吃" show-action @search="onSearch" @cancel="onCancel" />
        </div>
        <div>
            <div class="horsearch">热门搜索</div>
            <div class="goods">
                <span>派乐汉堡</span>
                <span>虾皇</span>
                <span>阿斯顿</span>
                <span>麦当劳</span>
                <span>周黑鸭</span>
                <span>派乐汉</span>
                <span>派乐汉堡</span>
            </div>
        </div>
        <div>
            <van-cell title="单元格" :border="false" >
                <van-icon slot="right-icon" name="delete" class="van-cell__right-icon" />
            </van-cell>
            <div class="goods">
                <span>派乐汉堡</span>
                <span>虾皇</span>
                <span>阿斯顿</span>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      Toast("搜索中!");
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
.homesearch{
    .van-search .van-cell{
        background: #f2f2f2;
        border-radius: 20px;
        .van-field__control{
            background: #f2f2f2;
        }
    }
    .van-search__cancel{
        color: #ccc;
    }
    .horsearch{
        color: #ccc;
        font-size: pxToRem(20);
        padding: pxToRem(20) pxToRem(30) 0;
    }
    .goods{
        padding: 0 pxToRem(20);
        span{
            display: inline-block;
            background: #f2f2f2;
            color: #666;
            font-size: pxToRem(15);
            padding: 2px 10px;
            margin: pxToRem(8);
            border-radius: 5px;
        }
    }
    .van-cell{
        padding-bottom: 0;
    }
    .van-cell__title{
        color: #ccc;
        font-size: pxToRem(20);
    }
}
</style>
