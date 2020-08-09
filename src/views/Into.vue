<template>
  <b-container>
    <!-- <Car/> -->
    <!-- <p>{{$store.getters.getCarList}}</p> -->
    <button @click="showName" >showname</button>
    <div>
      <p>{{cars.carList}}</p>
      <br>
    </div>
    <hr>
    <br>
    <div v-for="car in cars.carList" v-bind:key="car.carID">
      <p>carID : {{car.carID}}</p>
      <p>carName : {{car.carName}}</p>
      <p>carBrand : {{car.carBrand}}</p>
      <p>carPrice : {{car.carPrice}}</p>
      <p><button v-on:click="navigateTo('/user/'+car.carID)">ดูข้อมูล</button></p>
      <br>
    </div>
  </b-container>
</template>

<script>
// import Car from '@/components/Car.vue'
// import axios from 'axios'
// import ComA from '@/components/ComA.vue'
// import ComB from '@/components/ComB.vue'
// import { mapActions, mapState } from 'vuex'

export default {
  name: 'Demo',
  components: {
    // Car
    // ComA,
    // ComB
  },
  data () {
    return {
      cars: []
    }
  },
  methods: {
    async showName () {
      // this.cars = (await this.$api.ServiceCar.getCar()).result
      // this.setCarList(this.cars.carList)
      await this.$api.ServiceCar.getCar()
        .then(response => {
          this.cars = response.result
        })
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>
