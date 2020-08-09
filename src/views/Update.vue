<template>
<b-container class="Update">
  <div class="alert">
        <b-alert v-model="showOkAlert" variant="success" dismissible>
         Success : Update
        </b-alert>
  </div>
  <div class="alert">
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
         Fail : กรุณากรอกข้อมูลให้ถูกต้อง
        </b-alert>
  </div>
  <div class="form">
    {{car.carId}}
    <h2>CAR FORM</h2>
    <form class="form-car" action="">
      <b-row align-v="center">
        <b-col sm="4">
          <label for="id">CarID:</label>
        </b-col>
         <b-col sm="2"></b-col>
        <b-col sm="6" width="50" >
          <b-input
          type="text"
          placeholder="Enter ID"
          v-model="car.carID"
          style="border: 1px solid #000; font-size: 12px;"
          :state="state"
        ></b-input>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col sm="4">
          <label for="name">CarName:</label>
        </b-col>
         <b-col sm="2"></b-col>
        <b-col sm="6">
        <b-input
          type="text"
          placeholder="Enter Name"
          value= "car.carName"
          v-model= "car.carName"
          style="border: 1px solid #000; font-size: 12px;"
        ></b-input>
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
          placeholder="Enter Brand"
          v-model="car.carBrand"
          style="border: 1px solid #000; font-size: 12px;"
        ></b-input>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col sm="4">
          <label  for="price">CarPrice:</label>
        </b-col>
         <b-col sm="2"></b-col>
        <b-col sm="6">
        <b-input
          type="text"
          placeholder="Enter Price"
          v-model="car.carPrice"
          style="border: 1px solid #000; font-size: 12px;"
        ></b-input>
        </b-col>
      </b-row>
      <div class="button">
          <b-button @click="update() " pill variant="dark" size="lg">Update</b-button>
      </div>
    </form>
  </div>
</b-container>
</template>

<script>
export default {
  name: 'update',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      showOkAlert: false,
      result: [],
      car: {
        carID: '',
        carName: '',
        carBrand: '',
        carPrice: ''
      },
      id: '',
      name: '',
      stateE: null
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    async update () {
      console.log(this.car.carID, this.car.carName, this.car.carBrand, this.car.carPrice)
      // await this.$api.ServiceCar.insertCar(this.car)
      await this.$api.ServiceCar.updateCar(this.car.carID, this.car.carName, this.car.carBrand, this.car.carPrice)
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
      }
    }
  },
  created () {
    this.car.carID = this.$route.params.carId
  },
  computed: {
    state () {
      return this.stateE
    }
  }

}
</script>
<style>
h2{
  text-align:left;
  padding: 0px 60px;
}
label{
  font-size: 12px;
  text-align:left;

}
.align-items-center{
  margin-bottom: 10px;
}
input {
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  resize: vertical;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}
.form{
  padding: 5px 0px 50px 0px;
  margin: 20px 0px;
  text-align:end;
  /* border: 3px solid #3a3838; */
  border-radius: 4px;
  color: #3a3838;
}
.form-car{
  width: 100%;
  padding: 10px 200px;
  /* border-top: 2px solid #3a3838; */
}
.input-btn{
  margin: 5px;
  margin-left: 0px;
}
.btn{
    font-size: 16px;
}
.button{
    margin-top: 20px;
    text-align: end;
}
.alert{
  margin: 0px , 100px;
}
</style>
