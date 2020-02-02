<template>
  <div class="home">
    <about></about>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      a: 123
    }
  },
  created() {
  },
  components: {
    about: () => import(/*  webpackChunkName: about */ '@/views/about.vue')
  }
}
</script>
