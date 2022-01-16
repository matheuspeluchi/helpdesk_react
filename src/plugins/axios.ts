import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer ${localStorage.getItem("Authorization")}` || "" },
});

export default http;
