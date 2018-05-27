<template>
  <div class="mobile-footer">
    <div :class="$route.path == item.path ? css2 :css1" v-for="(item,index) in items" :key="index" @click="nextFill(item.path)">
      <div><icon class="icon" :name="item.svg" :scale="item.sacle"></icon></div>
      <div class="title">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue'
export default {
  name: 'MFooter',
  data () {
    return {
      css1: 'm-f-item',
      css2: 'm-f-item-active',
      items: [
        {
          name: '我的',
          svg: 'main',
          path: '/',
          sacle: 2.3
        },
        {
          name: '我的',
          svg: 'main',
          path: '/b',
          sacle: 2.3
        },
        {
          name: '我的',
          svg: 'main',
          path: '/c',
          sacle: 2.3
        }
      ]
    }
  },
  components: {
    Icon
  },
  methods: {
    nextFill (e) {
      this.$router.push(e)
    }
  }
}
</script>

<style lang="scss" type="text/css" scoped>
  @import "../../assets/css/bus";
  .mobile-footer {
    position: absolute;
    width: calc(100% - 52px);
    left: 0px;
    bottom: 0px;
    z-index: 2000;
    display: flex;
    justify-content: space-between;
    padding: 10px 26px;
    border-top: 1px solid #EAEAEA;
    background-color: #fff;
    height: 72px;
    .m-f-item {
      text-align: center;
      .icon {
        color:#4D4D4D;
      }
      .title{
      font-size: 23px;
      margin-top: 2px;
      color: #4D4D4D;
    }
  }
  .m-f-item-active {
      text-align: center;
      .icon {
        color:$themeColor;
      }
      .title{
      font-size: 23px;
      margin-top: 2px;
      color: $themeColor;
    }
  }
  }
</style>
