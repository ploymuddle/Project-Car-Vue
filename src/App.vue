<template>
  <div id="app">
    <!-- <Header/> -->
    <div id="nav">
      <h3>CAR SERVICE</h3>
      <b-button v-on:click="navigateTo('/')" variant="light">
        <b-icon font-scale="3" icon="house-fill" ></b-icon>
      </b-button>
      <!-- <b-nav align="center" >
      <b-nav-item  href="/">Home</b-nav-item>
      <b-nav-item  href="/update" >Update</b-nav-item>
      <b-nav-item  href="/insert">Insert</b-nav-item>
      <b-nav-item  href="/demo">Demo</b-nav-item>
      </b-nav> -->
    </div>
    <router-view/>
  </div>
</template>

<script>

// import Header from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    // Header
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #434A54;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #434A54;
}

#nav a.nav-link.active {
  color: #ffffff;
}
</style>
