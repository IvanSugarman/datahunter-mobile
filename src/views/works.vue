<template>
  <div class="wrapper">
   <div id="works">
     <data-hunter-header title="所有作品"/>
     <banner/>
     <div class="container">
       <div class="title">
         按票数排序
       </div>
       <ul>
         <router-link tag="li" :to="'/share-mobile/' + item.id + '?openid=' + uid" v-for="item in workList" class="list-item" :key="item.id">
           <div class="list-item__wrap">
             <div class="list-item__img">
               <img :src="item.content && item.content.cover"/>
             </div>
             <div class="list-item__info">
               <div class="list-item__title">
                 {{item.content && item.content.name || '暂无数据' }}
               </div>
               <div class="list-item__author">
                 {{item.content && item.content.author || '暂无数据'}}
               </div>
               <div class="list-item__vote">
                 当前票数 <span>{{item.votes}}</span>
               </div>
             </div>
           </div>
         </router-link>
       </ul>
     </div>
     <data-hunter-footer/>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import qs from 'qs';
  import jsonp from 'jsonp'
  import wx from 'weixin-js-sdk'

  export default{
    mounted(){
      document.getElementById("works").style.minHeight = document.documentElement.clientHeight + 'px';
      this.getWorksList();
      this.wxShare();
    },
    data() {
      return {
        workList: [],
        uid: this.$store.getters.getUid,
      };
    },
    methods: {
      wxShare() {
        var url = encodeURIComponent(window.location.href);
//        var shareImgUrl = "http://case.geek-scorpion.com/dataHunterMobile/static/logo.png";
        var shareImgUrl = "http://vote.datahunter.cn/dataHunterMobile/static/logo.png";
//        var shareLinkUrl = "http://www.geek-scorpion.com/wechat/oauth/base?redirect=http://www.geek-scorpion.com/dataHunterMobile/works-mobile/";
        var shareLinkUrl = "http://www.geek-scorpion.com/wechat/oauth/base?redirect=http://vote.datahunter.cn/dataHunterMobile/works-mobile/";

        jsonp('http://www.geek-scorpion.com/wechat/jssdk?url=' + url, {param: 'jsoncallback'}, (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            wx.config(data);
            wx.ready(function () {
              wx.onMenuShareAppMessage({
                title: '我正在参加首届数据可视化之星大赛，快来投我一票！',
                desc: '精彩的可视化作品，了解一下？',
                imgUrl: shareImgUrl,
                link: shareLinkUrl,
              });
              wx.onMenuShareTimeline({
                title: '我正在参加首届数据可视化之星大赛，快来投我一票！',
                imgUrl: shareImgUrl,
                link: shareLinkUrl,
              });
            });
          }
        })
      },
      getWorksList: function () {
        this.axios.get(this.$store.getters.getUrl('work/list')).then(response => {
          response = qs.parse(response.data);
          response.data.map(item => {
            if (item.content) {
              item.content = JSON.parse(item.content);
            }
          });
          this.workList = response.data;
        });
      }
    }
  };
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 37.5px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  #works {
    position: relative;
    background-color: #102131;
    padding-bottom: 60px;
  }

  .container {
    padding: px2em(16px) px2em(20px);
    font-size: px2em(16px);
    color: #fff;

    ul {
      list-style-type: none;
      margin: px2em(11px) px2em(-7.5px) 0;
      font-size: px2em(12px);
      li {
        display: inline-block;
        width: 50%;
        margin-bottom: px2em(15px);
        padding: 0 px2em(7.5px);
      }
    }
  }

  .list-item {
    .list-item__wrap {
      background: #1D456E;
    }

    .list-item__img {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .list-item__info {
      padding: px2em(9px) px2em(7px) px2em(6px);
      .list-item__title {
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .list-item__author {
        color: rgba(255, 255, 255, .8);
      }
      .list-item__vote span{
        margin-left: 5px;
      }
    }
  }
</style>
