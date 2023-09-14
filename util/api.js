import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://case.edulog.com.tr/api/auth/requests',
  headers: {
    'Content-Type': "application/json",
  },
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


export default instance;
