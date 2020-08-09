import { request } from '../api'
// import store from '@/store'
// import store from '@/store/index.js'

export const getCarId = async (carID) => {
  const { error, result } = await request('POST', '/getCar', { carID })
  console.log({ error, result })
  return { error, result }
}
export const getCar = async () => {
  const { error, result } = await request('POST', '/getCar', {})
  return { error, result }
}
export const getHello = async () => {
  const { error, result } = await request('GET', '/hello', {})
  console.log({ error, result })
  return { error, result }
}
export const insertCar = async (carName, carBrand, carPrice) => {
  const { error, result } = await request('POST', '/insertCar', { carName, carBrand, carPrice })
  console.log({ error, result })
  return { error, result }
}
export const updateCar = async (carID, carName, carBrand, carPrice) => {
  const { error, result } = await request('POST', '/updateCar', { carID, carName, carBrand, carPrice })
  console.log({ error, result })
  return { error, result }
}
export const deleteCar = async (carID) => {
  const { error, result } = await request('POST', '/deleteCar', { carID })
  console.log({ error, result })
  return { error, result }
}
// { error, result }
