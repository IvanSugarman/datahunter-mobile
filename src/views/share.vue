<template>
  <div class="wrapper" :class="{ wrapper__hidden: showSuccess || showError }">
    <div id="share">
      <data-hunter-header title="作品分享"/>
      <banner/>
      <div class="share-item">
        <div class="share-item__img">
          <img src="@/assets/1.jpg" alt=""/>
        </div>
        <div class="share-item__info">
          <div>
            <div class="left">作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者</div>
            <div class="right share-item__author">
              {{work.author}}
            </div>
          </div>
          <div>
            <div class="left">作者名称</div>
            <div class="right share-item__title">
              {{work.title}}
            </div>
          </div>
          <div>
            <div class="left">作者简介</div>
            <div class="right share-item__description">
              {{work.description}}
            </div>
          </div>
        </div>
      </div>
      <div class="button" @click="showDialog(1)">投票</div>
      <div class="legend">
        <p>投票说明</p>
        <ul>
          <li>本次投票只通过微信投票，每个微信号每天限投3票，每个比赛作品每天限投1票。</li>
          <li>最终票数将计入比赛总成绩的30%。</li>
          <li>一旦发现刷票等作弊行为，投票成绩作废。</li>
        </ul>
      </div>
      <data-hunter-footer/>
    </div>
    <data-hunter-dialog type="success" v-if="showSuccess" @showDialog="showDialog"/>
    <data-hunter-dialog type="error" v-if="showError" @showDialog="showDialog"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted() {
      document.getElementById("share").style.minHeight = document.documentElement.clientHeight + 'px';
      this.work = this.getWorksById(1);
    },
    data() {
      return {
        work: {},
        showSuccess: false,
        showError: false,
      };
    },
    methods: {
      getWorksById(id) {
        return this.$store.getters.getWorksById(id);
      },
      showDialog(type) {
        if (type == 1) {
          this.showError = false;
          this.showSuccess = true;
        } else if (type == 2) {
          this.showError = true;
          this.showSuccess = false;
        } else if (!type) {
          this.showError = false;
          this.showSuccess = false;
        }
      }
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 37.5px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  #share {
    position: relative;
    background-color: #102131;
    padding-bottom: 60px;
  }

  .wrapper__hidden {
    overflow: hidden;
  }

  .share-item {
    margin-top: px2em(20px);
    padding: 0 px2em(20px);
  }

  .share-item__info {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: px2em(17px);
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: px2em(7px);
      min-height: 20px;
      line-height: 20px;
      .left {
        flex: 0 0 18%;
        color: rgba(255, 255, 255, .6);
        font-size: px2em(14px);

      }
      .right {
        flex: 0 0 75%;
        font-size: px2em(14px);
        color: #fff;
      }
    }
  }

  .share-item__img {
    position: relative;
    width: 100%;
    padding-bottom: 47.46%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: px2em(20px) auto 0;
    width: px2em(240px);
    height: px2em(46px);
    color: #fff;
    font-size: px2em(16px);
    background: -webkit-linear-gradient(37deg, #1ed884 0%, #fdff58 94%);
    border-radius: px2em(100px);
  }

  .legend {
    margin: px2em(40px) px2em(20px) 0;
    color: rgba(255, 255, 255, .8);
    font-size: px2em(14px);
    line-height: 20px;
    p {
      margin-bottom: px2em(15px);
      color: #fff;
    }
    ul {
      padding-left: px2em(18px);
      list-style-type: none;
      li {
        position: relative;
        &:before {
          position: absolute;
          top: 6px;
          left: -18px;
          content: " ";
          width: 6px;
          height: 6px;
          background: #23c132;
          border-radius: 50%;
        }
      }
    }
  }
</style>
