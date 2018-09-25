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
         <li v-for="item in workList" class="list-item" :key="item.id">
           <div class="list-item__wrap">
             <div class="list-item__img">
               <img src="@/assets/1.jpg"/>
             </div>
             <div class="list-item__info">
               <div class="list-item__title">
                 {{item.title}}
               </div>
               <div class="list-item__author">
                 {{item.author}}
               </div>
               <div class="list-item__vote">
                 当前票数 <span>{{item.votes}}</span>
               </div>
             </div>
           </div>
         </li>
       </ul>
     </div>
     <data-hunter-footer/>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted(){
      document.getElementById("works").style.minHeight = document.documentElement.clientHeight + 'px';
      this.getWorksList();
    },
    data() {
      return {
        workList: [],
      };
    },
    methods: {
      getWorksList: function () {
        this.workList = this.$store.getters.getWorksList;
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
