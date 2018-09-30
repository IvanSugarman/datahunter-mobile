<template>
  <div class="wrapper">
    <div id="sign">
      <data-hunter-header title="报名"/>
      <banner/>
      <div class="info">点击下方按钮，立即注册</div>
      <a href="http://analytics.datahunter.cn/account/#/register">
        <div class="button">
          立即注册
        </div>
      </a>
      <p class="info-2">注册完成后，视为自动报名成功。</p>
      <div class="qrcode">
        <img src="@/assets/wechat.png">
      </div>
      <p class="info-2 info-3">加小助手可进交流群，请备注“可视化大赛”</p>
      <data-hunter-footer/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted() {
      document.getElementById("sign").style.minHeight = document.documentElement.clientHeight + 'px';
    },
    data() {
      return {};
    },
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 37.5px !default;

  #sign {
    position: relative;
    background-color: #102131;
    padding-bottom: 60px;
  }

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  .info {
    margin-top: px2em(60px);
    font-size: px2em(14px);
    text-align: center;
    color: rgba(255, 255, 255, .8);
  }

  a {
    text-decoration: none;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: px2em(30px) auto 0;
    width: px2em(240px);
    height: px2em(46px);
    color: #fff;
    font-size: px2em(16px);
    background: -webkit-linear-gradient(37deg, #1ED884 0%, #4DFF58 94%);
    border-radius: px2em(100px);
  }

  .qrcode {
    margin: px2em(30px) auto px2em(10px);
    width: px2em(100px);
    height: px2em(100px);
    img {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  .info-2 {
    text-align: center;
    color: rgba(255, 255, 255, .8);
    font-size: px2em(12px);
    margin-top: px2em(10px);
    line-height: px2em(36px);
  }

  .info-3 {
    margin-top: px2em(20px);
  }

</style>
