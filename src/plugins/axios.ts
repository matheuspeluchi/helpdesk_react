import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: localStorage.getItem("Authorization")?.substring(7) || "" },
});

export default http;
