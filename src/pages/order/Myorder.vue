<template>
    <div class="myorder">
        <div>
            <van-cell-group>
                <van-cell title="我的订单" is-link value="全部订单" />
            </van-cell-group>
        </div>
        <van-row>
            <van-col span="6">
                d
            </van-col>
            <van-col span="6">span: 8</van-col>
            <van-col span="6">span: 8</van-col>
            <van-col span="6">span: 8</van-col>
        </van-row>
    </div>
</template>

<style lang="scss">
.myorder {
  .van-cell-group {
    height: pxToRem(50);
    .van-cell {
      height: pxToRem(50);
      line-height: pxToRem(50);
      padding: 0 5px;
      .van-cell__title{
          font-size: pxToRem(30);
          font-weight: bold;
      }
      .van-cell__value{
          font-size: 10px;
          color: #999999;
      }
    }
  }
  .van-col{
      border: 1px solid red;
  }
}
</style>

