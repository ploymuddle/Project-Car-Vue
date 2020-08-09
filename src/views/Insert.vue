<template>
<b-container class= "insert">
  <div class="alert">
        <b-alert v-model="showOkAlert" variant="success" dismissible>
         Success  : CarID = {{newID}}
        </b-alert>
  </div>
  <div class="alert">
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
         Fail : กรุณากรอกข้อมูลให้ถูกต้อง
        </b-alert>
  </div>
    <div class="form">
      <h2>CAR FORM</h2>
      <form class="form-car">
        <b-row align-v="center">
          <b-col sm="4">
            <label for="name">CarName:</label>
          </b-col>
           <b-col sm="2"></b-col>
          <b-col sm="6">
            <b-input
              type="text"
              id="name"
              placeholder="Enter Name"
              v-model="car.carName"
              style="border: 1px solid #000; font-size: 12px;"
              :state="state"
            >
            </b-input>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col sm="4">
            <label for="brand">CarBrand:</label>
          </b-col>
           <b-col sm="2"></b-col>
          <b-col sm="6">
            <b-input
              type="text"
              id="brand"
              placeholder="Enter Brand"
              v-model="car.carBrand"
              style="border: 1px solid #000; font-size: 12px;"
              :state="state"
            >
            </b-input>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col sm="4">
            <label for="price">CarPrice:</label>
          </b-col>
           <b-col sm="2"></b-col>
          <b-col sm="6">
            <b-input
              type="text"
              id="price"
              placeholder="Enter Price"
              v-model="car.carPrice"
              style="border: 1px solid #000; font-size: 12px;"
              :state="state"
            >
            </b-input>
          </b-col>
        </b-row>
        <div class="button">
          <b-button
            @click="addCar()"
            pill
            variant="dark"
            size="lg"
            >Insert</b-button
          >
        </div>
      </form>
    </div>
</b-container>
</template>

<script>
export default {
  name: 'insert',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      result: [],
      car: {
        carName: '',
        carBrand: '',
        carPrice: ''
      },
      stateE: null,
      newID: ''
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    async addCar () {
      console.log(this.car.carName, this.car.carBrand, this.car.carPrice)
      // await this.$api.ServiceCar.insertCar(this.car)
      await this.$api.ServiceCar.insertCar(this.car.carName, this.car.carBrand, this.car.carPrice)
        .then(response => {
          this.result = response.result
        })
      if (this.result === null) {
        this.stateE = false
        this.showDismissibleAlert = true
        this.showOkAlert = false
      } else {
        this.stateE = null
        this.showOkAlert = true
        this.showDismissibleAlert = false
        this.newID = this.result.carID
        console.log(this.result.carID)
      }
    }
  },
  computed: {
    state () {
      return this.stateE
    }
  }
}
</script>

<style></style>
