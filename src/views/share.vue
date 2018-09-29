<template>
  <div class="wrapper">
    <div id="share">
      <data-hunter-header title="作品分享"/>
      <banner/>
      <div class="share-item">
        <div class="share-item__img">
          <img :src="work.content && work.content.cover" alt=""/>
        </div>
        <div class="share-item__info">
          <div>
            <div class="left">作品名称</div>
            <div class="right share-item__title">
              {{work.content && work.content.name}}
            </div>
          </div>
          <div>
            <div class="left">作者</div>
            <div class="right share-item__author">
              {{work.content && work.content.email}}
            </div>
          </div>
          <div>
            <div class="left">作品简介</div>
            <div class="right share-item__description">
              {{work.content && work.content.description}}
            </div>
          </div>
        </div>
      </div>
      <div class="button" @click="vote">投票</div>
      <div class="legend">
        <p>投票说明</p>
        <ul>
          <li>本次投票只通过微信投票，每个微信号每天限投3票，每个比赛作品每天限投1票。</li>
          <li>最终票数将计入比赛总成绩的30%。</li>
          <li>一旦发现刷票等作弊行为，投票成绩作废。</li>
        </ul>
      </div>
      <data-hunter-footer/>
      <data-hunter-dialog type="success" v-show="showSuccess" @showDialog="showDialog"/>
      <data-hunter-dialog type="error" v-show="showError" @showDialog="showDialog"/>
      <data-hunter-dialog type="alert" v-show="showAlert" @showDialog="showDialog"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import qs from 'qs'

  export default{
    mounted() {
      document.getElementById("share").style.minHeight = document.documentElement.clientHeight + 'px';
      this.getWorksById();
    },
    data() {
      return {
        work: {},
        showSuccess: false,
        showError: false,
        showAlert: true,
      };
    },
    methods: {
      getWorksById(id) {
        this.axios.get(this.$store.getters.getUrl('work/one?wid=' + this.$route.params.id)).then(response => {
          response.data.data.content = JSON.parse(response.data.data.content);
          this.work = response.data.data;
        });
      },
      vote() {
        let uid = this.$route.query.bsh_bid || 0;
        let wid = this.$route.params.id;
        let params = {
          uid,
          wid,
        };

        this.axios.post(this.$store.getters.getUrl('vote'), qs.stringify(params),
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res => {
          if (res.data.code == -2) {
            this.showDialog(3);
          } else if (res.data.code == -1) {
            this.showDialog(2);
          } else {
            this.showDialog(1);
          }
        });
      },
      showDialog(type) {
        if (type == 1) {
          this.showSuccess = true;
        } else if (type == 2) {
          this.showError = true;
        } else if (type == 3) {
          this.showAlert = true;
        } else if (!type) {
          this.showError = false;
          this.showSuccess = false;
          this.showAlert = false;
        }
      },
      stopScrolling(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
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
      margin-bottom: px2em(7px);
      min-height: 20px;
      line-height: 20px;
      .left {
        color: rgba(255, 255, 255, .6);
        font-size: px2em(14px);

      }
      .right {
        font-size: px2em(14px);
        color: #fff;
      }
      .share-item__description {
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
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
    background: -webkit-linear-gradient(37deg, #1ED884 0%, #4DFF58 94%);
    border-radius: px2em(100px);
  }

  .legend {
    margin: px2em(40px) px2em(20px) px2em(27px);
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
        margin-bottom: px2em(7px);
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
