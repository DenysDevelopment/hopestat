import axios from "axios";

export const axiosClassic = axios.create({
  baseURL: "https://5.101.179.136:8009",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
