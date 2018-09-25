<template>
  <div class="Dialog__wrapper" @click="closeDialog">
    <div class="Dialog">
      <div class="Dialog__img">
        <img src="@/assets/success.png" alt="" v-if="this.type == 'success'">
        <img src="@/assets/error.png" alt="" v-if="this.type == 'error'">
      </div>
      <div class="Dialog__title">
        <p v-if="this.type == 'success'">投票成功!</p>
        <p v-if="this.type == 'error'">投票次数已达到上限，</p>
        <p v-if="this.type == 'error'">请明天再投!</p>
      </div>
      <div class="Dialog__button">查看所有作品</div>
      <div class="Dialog__close" @click="closeDialog">×</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['type', 'title'],
    data() {
      return {
          showDialog: false,
      };
    },
    methods: {
      closeDialog() {
        this.$emit('showDialog');
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .Dialog__wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 9999;
  }

  .Dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 280px;
    height: 200px;
    background: #fff;
    padding: 30px;
    transform: translate(-50%, -50%);
    border-radius: 4px;
  }

  .Dialog__img {
    position: relative;
    margin: 0 auto 16px;
    width: 40px;
    padding-bottom: 40px;
  }

  .Dialog__img img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .Dialog__title {
    font-size: 16px;
    color: #333;
  }

  .Dialog__title p {
    text-align: center;
  }

  .Dialog__button {
    margin-top: 31px;
    width: 140px;
    height: 34px;
    text-align: center;
    background-image: linear-gradient(37deg, #1ED884 0%, #4DFF58 94%);
    color: #fff;
    font-size: 14px;
    line-height: 34px;
    border-radius: 100px;
  }

  .Dialog__close {
    position: absolute;
    right: 5px;
    top: 0;
    color: #979797;
    font-size: 28px;
    text-shadow: 0 1px 0 #fff;
  }

</style>
