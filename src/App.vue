<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    created(){
        if (!localStorage.getItem('isFirstLogin')) {
          let origin = location.href;
          window.location.href = "http://www.geek-scorpion.com/wechat/oauth/base?redirect=" + origin;
          localStorage.setItem('isFirstLogin', true);
        }
    },
    name: 'App'
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  $browser-default-font-size: 37.5px !default;

  @function px2em($px) {
    @return $px / $browser-default-font-size * 1rem;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, #app, html, #app > div {
    z-index: 0;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .wrapper {
    position: relative;
    height: 100%
  }
</style>
