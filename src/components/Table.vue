<template>
  <div class="container">
    <template>
      <b-container fluid="sm-50" >
      <b-input-group size="lg" >
      <b-form-input v-model="carId" v-on:keyup.enter="search()"  placeholder="Search ID" style="border: 1px solid #000"></b-form-input>
        <b-input-group-append>
          <b-button v-on:click="search()" variant="dark"><b-icon icon="search"></b-icon></b-button>
        </b-input-group-append>
      </b-input-group>
        <!-- {{car}} -->
      </b-container>
    </template>
    <br>
        <!-- <button @click="showCar()" >showname</button> -->
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <!-- <th>No</th> -->
          <th>CarID</th>
          <th>CarName</th>
          <th>CarBrand</th>
          <th>CarPrice</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars.carList" v-bind:key="car.carID">
          <!-- <td>{{car.i}}</td> -->
          <td>{{car.carID}}</td>
          <td>{{car.carName}}</td>
          <td>{{car.carBrand}}</td>
          <td>{{car.carPrice}}</td>
          <th>
                <b-button v-on:click="navigateTo('/update/' + car.carID)" variant="dark">
                    <!-- <span class="glyphicon glyphicon-edit"></span> -->
                    <b-icon icon="pencil" ></b-icon>
                </b-button>
          </th>
          <th>
             <form>
                <b-button type="button" @click="modalID = car.carID" data-toggle="modal" data-target="#myModalDelete" variant="dark">
                    <span class="glyphicon glyphicon-trash"></span>
                </b-button>
             </form>
          </th>
        </tr>
        <tr class = "show-empty" style="display:none" id="showEmpty">
          <td colspan="6">
            not found
          </td>
        </tr>
      </tbody>
    </table>

  <!-- The Modal Delete -->
  <div class="modal " id="myModalDelete">
    <div class="modal-dialog ">
      <div class="modal-content">
         <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Delete</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
           <!-- Modal body -->
        <div class="modal-body" id="modelNoData">
          Modal body..
        </div>
          <!-- Modal footer -->
        <div class="modal-footer">
          <div>
          <button @click="deleteCar(modalID)" type="button" class="btn btn-danger" data-dismiss="modal">Yes</button>
          </div>
          <div>
          <button type="button" class="btn btn-success" data-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Table',
  data () {
    return {
      modalID: '',
      cars: [],
      carId: '',
      posts: [],
      selectedID: null,
      fields: ['CarID', 'CarName', 'CarBrand', 'CarPrice'],
      notFound: true
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async showCar () {
      // this.cars = (await this.$api.ServiceCar.getCar()).result
      // this.setCarList(this.cars.carList)
      await this.$api.ServiceCar.getCar()
        .then(response => {
          this.cars = response.result
        })
    },
    async search () {
      console.log(this.carId)
      var empty = document.all('showEmpty')
      await this.$api.ServiceCar.getCarId(this.carId)
        .then(response => {
          if (response.error != null) {
            if (empty.style.display === 'none') {
              empty.style.display = ''
              this.cars = ''
            }
          } else {
            this.cars = response.result
            empty.style.display = 'none'
          }
        })
    },
    async deleteCar (id) {
      await this.$api.ServiceCar.deleteCar(id)
        .then(response => {
          this.result = response.result
        })
      this.search()
    }
  },
  mounted () {
    this.showCar()
  }
}
</script>

<style>
.container{
  padding-top: 15px
}
.container-sm-50{
  width: 50%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
table {
  empty-cells: show;
}
.no-data{
  /* display: none; */
  text-align: center;
}
</style>
