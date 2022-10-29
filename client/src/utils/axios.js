import axios from "axios";

axios.defaults.baseURL = "http://localhost:9800/api"
axios.defaults.headers.authorization = localStorage.getItem("token")

export default axios;