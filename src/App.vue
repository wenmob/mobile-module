<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "../static/layer/need/layer.css";
  #app {
    width: 100%;
    height: 100%;
  }
  [v-cloak] {
    display: none;
  }
</style>
