import axios from "axios";

export const axiosClassic = axios.create({
  baseURL: "http://5.101.179.136:8009",
  headers: {
    "Content-Type": "multipart/form-data",
    // "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
