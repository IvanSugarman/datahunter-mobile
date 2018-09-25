<template>
    <div>
      <footer>
        <p>Copyright @ 2018  北京数猎天下科技有限公司 | 京</p>
        <p>ICP备12012797号 | 友情链接</p>
      </footer>
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

  footer {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    font-size: px2em(12px);
    color: #999;
    text-align: center;
  }
</style>
