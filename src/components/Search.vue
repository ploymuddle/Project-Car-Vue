<template>
  <b-container fluid="sm-50" >
  <b-input-group size="lg" >
    <b-form-input v-model="car.carID" placeholder="Search ID"></b-form-input>
    <b-input-group-append>
      <b-button v-on:click="search()" variant="dark"><b-icon icon="search"></b-icon></b-button>
    </b-input-group-append>
  </b-input-group>
  {{car}}
  </b-container>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      car: {
        carID: '',
        carName: '',
        carBrand: '',
        carPrice: ''
      }
    }
  },
  methods: {
    async search () {
      console.log(this.car.carID)
      await this.$api.ServiceCar.getCarId(this.car.carID)
        .then(response => {
          this.result = response.result.carList[0]
        })
      console.log(this.result)
      this.car = this.result
    }
  }
}
</script>
<style>
.container-sm-50{
  width: 50%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
</style>
