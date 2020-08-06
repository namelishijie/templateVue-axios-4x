<template>
  <div id="app">
    <router-view v-if="isAlive"/>
    <router-link to="/demoVee">demoVee</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isAlive: true
    }
  },
  methods: {
    reload() {
      this.isAlive = false
      this.$nextTick(function () {
        this.isAlive = true
      })
    }
  },
  created() {
    // this.$http.index()
    // .then(res =>{
    //   console.log(res)
    // })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-shadow: 1px 1px 1px 1px #fff;
}
</style>
