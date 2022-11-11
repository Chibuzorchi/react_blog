import axios from "axios";

axios.defaults.baseURL = "https://react-blog-gt09.onrender.com"
axios.defaults.headers.authorization = localStorage.getItem("token")

export default axios;