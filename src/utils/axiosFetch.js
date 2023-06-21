import axios from 'axios';

const getAuthToken = () => {
  console.log("Hellloooooo")
  if (typeof window !== 'undefined') {
    return localStorage.getItem('Authorization') || window.localStorage.getItem('Authorization');
  }
  return null;
};

const axiosFetch = axios.create({
  baseURL: 'https://server-express-pay-houy.vercel.app/',
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
  },
  withCredentials: true,
});

export default axiosFetch;

// import axios from 'axios'

// let token =
//   (typeof window !== 'undefined') ? (localStorage.getItem("Authorization") ||
//     window.localStorage.getItem("Authorization")) : null

// const axiosFetch = axios.create({
//   baseURL: "https://server-express-pay-houy.vercel.app/",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   withCredentials: true,
// });

// export default axiosFetch;