<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>รายการรถยนต์</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">ลำดับ</th>
                <th style="width: 50%">ชื่อรถ</th>
                <th style="width: 10%%">ราคา</th>
                <th style="width: 31.66%">การดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(car,index) in $store.getters.car" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ car.name }}</td>
                <td v-if="index !== editIndex">{{ car.price }}</td>
                <td v-if="index !== editIndex">
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteFood(index,food._id)"
                  >ลบ</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,food)"
                  >แก้ไข</button>
                </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="food.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="number"
                    :value="food.price"
                    class="form-control"
                    v-on:change="price = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editFood(food._id)"
                  >ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit(index)"
                  >ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {

}
</script>
