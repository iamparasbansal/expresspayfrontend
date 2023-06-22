import axios from 'axios'

let token =
  (typeof window !== 'undefined') ? (localStorage.getItem("Authorization") ||
    window.localStorage.getItem("Authorization")) : null

const axiosFetch = axios.create({
  baseURL: "https://server-express-pay-houy.vercel.app/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export default axiosFetch;