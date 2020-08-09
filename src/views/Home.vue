<template>
<div id="home">
<b-container class="home" style="padding-bottom:100px">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Nav/>
    <Table/>
    <b-button v-on:click="navigateTo('/insert')" variant="dark" size="lg">+</b-button>
</b-container>
</div>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
  name: 'home',
  components: {
    Table
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style>
b-container {
 padding-bottom: 100;
}
</style>
