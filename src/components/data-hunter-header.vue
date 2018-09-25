<template>
    <div>
      <header>{{this.title}}</header>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['title'],
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

  header {
    line-height: 40px;
    font-size: px2em(18px);
    text-align: center;
    color: #fff;
  }
</style>
