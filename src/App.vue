<template>
  <div id="app">
    <router-view v-if="isAlive"/>

    <input v-model="value" type="text" v-validate="'required|email'" name="email" data-vv-scope="login" data-vv-validate-on="blur">
    <p v-show="errors.has('login.email')">{{ errors.first('login.email') }}</p> 
    <button @click="onDemo">确定</button>

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
    },
    onDemo() {
      this.$validator.validateAll('login').then(res => {
        console.log(res)
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
