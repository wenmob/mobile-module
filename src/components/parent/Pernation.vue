<template>
  <div class="bis-page">
    <m-header :m-title="title" :left-show="ls" v-show="topShow"/>
    <div class="app-main">
      <transition :name="transitionName">
         <router-view class="Router"/>
      </transition>
    </div>
    <m-footer v-show="footShow"/>
  </div>
</template>

<script>
import MHeader from '../plugIn/MHeader'
import MFooter from '../plugIn/MFooter'
export default {
  data () {
    return {
      topShow: true,
      footShow: true,
      transitionName: 'slide-right',
      title: '赢钱网',
      ls: true
    }
  },
  components: {
    mHeader: MHeader,
    mFooter: MFooter
  },
  mounted () {
    this.isWeixinBrowser()
  },
  methods: {
    // 判断是否为微信浏览器
    isWeixinBrowser () {
      const that = this
      const agent = navigator.userAgent.toLowerCase()
      if (agent.match(/MicroMessenger/i) === 'micromessenger') {
        that.topShow = false
        return true
      } else {
        that.topShow = true
        return false
      }
    }
  },
  watch: {
    // 监听路由的方法
    '$route' (to, from) {
      let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/bus";
.Router {
     width: 100%;
     transition: all .3s ease;
     -webkit-transition: all .3s ease;
     -moz-transition: all .3s ease;
     -o-transition: all .3s ease;
}
.slide-left-enter,
.slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
