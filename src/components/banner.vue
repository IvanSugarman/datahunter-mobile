<template>
    <div>
      <p>DataHunter</p>
      <p>首届数据可视化之星大赛</p>
      <p>助你c位出道!</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data() {
            return {};
        },
    };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 37.5px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  div {
    padding: px2em(39px) px2em(24px) px2em(49px);
    height: px2em(160px);
    color: #fff;
    background-color: #0e2c49;

    p {
      font-size: px2em(14px);
      line-height: 24px;
    }

    p:nth-child(2) {
      font-size: px2em(18px);
      line-height: 28px;
    }
  }
</style>
