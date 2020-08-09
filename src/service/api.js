import axios from 'axios'
// import store from '../store/modules/car'
const VUE_APP_API = 'http://localhost:8080/'
// http://192.168.43.87:8080
// process.env.VUE_APP_API
const API = axios.create({
  baseURL: VUE_APP_API,
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
})

const handleResponseData = resp => resp.data

const catchErrorResponse = (err, callback) => {
  let error
  console.log()
  if (err.response) {
    error = err.response.data
    callback(error)
  }
}

export const handleService = promise => {
  let error, result
  return promise
    .then(resp => {
      if (!resp) {
        error = resp
        result = null
      }
      result = handleResponseData(resp)
      return {
        error: null,
        result
      }
    })
    .catch(err => {
      catchErrorResponse(err, e => {
        if (e) {
          error = e
        }
      })
      return {
        error,
        result: null
      }
    })
}

API.interceptors.request.use(
  function (config) {
    config.headers = {
      // 'carID': store.state.carID,
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST',
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }
    return config
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error)
  }
)

API.interceptors.response.use(
  response => response,
  error => {
    // const status = error.response ? error.response.status : null
    return Promise.reject(error)
  }
)

export const request = async (type, path, data) => {
  let error, result
  var resp
  try {
    switch (type) {
      case 'GET':
        resp = await API.get(path)
        break
      case 'POST':
        resp = await API.post(path, data).then().catch()
        break
      case 'PUT':
        resp = await API.put(path, data)
        break
      case 'DELETE':
        resp = await API.delete(path, data)
        break
      default:
        resp = await API.get(path, { params: data })
        break
    }
    if (!resp) {
      error = resp
      result = null
    }
    result = handleResponseData(resp)
    return {
      error: null,
      result
    }
  } catch (err) {
    catchErrorResponse(err, e => {
      if (e) {
        error = e
      }
    })
    return {
      error,
      result: null
    }
  }
}
export default API
