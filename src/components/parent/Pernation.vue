<template>
  <div class="bis-page">
    <m-header :m-title="title" :left-show="ls" v-show="topShow"/>
    <div class="app-main" ref="appMain">
      <transition :name="transitionName" @before-enter="beforeEnter" @after-enter="afterEnter">
         <router-view class="child-view" ref="rou"/>
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
      ls: true,
      isRouterAlive: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  },
  components: {
    mHeader: MHeader,
    mFooter: MFooter
  },
  mounted () {
    this.isWeixinBrowser()
  },
  methods: {
    // 动画结束之前
    beforeEnter () {
      this.$refs.rou.$el.style.opacity = '0'
    },
    // 动画结束之后
    afterEnter () {
      this.$refs.rou.$el.style.opacity = '1'
    },
    // 刷新当前界面的方法
    reload () {
      this.isRouterAlive = false
      /** $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，
      * 在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
      * **/
      this.$nextTick(() => (this.isRouterAlive = true))
    },
    // 判断是否为微信浏览器
    isWeixinBrowser () {
      const that = this
      const agent = window.navigator.userAgent.toLowerCase()
      if (agent.indexOf('micromessenger') !== -1) {
        that.topShow = false
        that.$refs.appMain.style.height = 'calc(100% - 47px)'
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
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
