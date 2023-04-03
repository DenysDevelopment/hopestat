import axios from "axios";

export const axiosClassic = axios.create({
  baseURL: "http://5.101.179.136:8009",
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
