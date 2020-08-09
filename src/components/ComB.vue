<template>
<b-container>
    <h3>{{$store.getters.getCount}}</h3>
    <button @click="del">Delete</button>
</b-container>
</template>

<script>
export default {
  methods: {
    del () {
      this.$store.dispatch('delAction')
    }
  }
}
</script>

<style>

</style>
