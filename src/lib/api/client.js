import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "https://api.github.com/";

// client.defaults.headers.common["Authorization"] = "Bearer a1";

// axios.intercepter.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default client;
