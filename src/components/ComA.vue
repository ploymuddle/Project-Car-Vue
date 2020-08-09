<template>
<b-container>
    <h3>{{$store.getters.getCount}}</h3>
    <button @click="add">Add</button>
</b-container>
</template>

<script>
export default {
  methods: {
    add () {
      this.$store.dispatch('addAction')
    }
  }
}
</script>

<style>

</style>
