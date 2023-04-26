import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000
})

service.interceptors.request.use((config) => config)

service.interceptors.response.use((response) => {
  console.log(response)
})
export default service
