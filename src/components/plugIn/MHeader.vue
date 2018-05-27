<template>
  <div class="mobile-head">
     <div class="left">
       <div v-show="leftShow" @click="goBack"><icon name="fanhui" scale="2.4"></icon></div>
     </div>
     <div class="title">{{mTitle}}</div>
     <div class="right"></div>
  </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue'
export default {
  name: 'mheader',
  props: ['mTitle', 'leftShow'],
  components: {
    Icon
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" type="text/css" scoped>
@import "../../assets/css/bus";
.mobile-head {
  display: flex;
  padding: 20px 26px;
  height: 42px;
  background-color: $themeColor;
  justify-content: space-between;
  .left {
    width: 10%;
    height: 100%;
  }
  .title {
    width: 80%;
    height: 100%;
    text-align: center;
    font-size: 36px;
    color: white;
    font-weight: 500;
  }
  .right {
    width: 10%;
    height: 100%;
  }
}
</style>
