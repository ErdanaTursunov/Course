import axios from 'axios';

const baseURL = "http://localhost:3001";

const $host = axios.create({
  baseURL: baseURL
})

const $authHost = axios.create({
  baseURL: baseURL
})




const authInterceptor = config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
 
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}
