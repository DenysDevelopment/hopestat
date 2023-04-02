import { axiosClassic } from "@/api/interceptors";
import axios from "axios";
import Cookies from "js-cookie";
import { IUser, IUserResponse } from "./../types/user.types";
const TOKEN_COOKIE_NAME = "auth_token"; // имя куки для токена

axios.interceptors.request.use((config) => {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AuthService = {
  loginUser: (data: IUser) => {
    return axiosClassic.post<IUserResponse>(`/login`, data).then((response) => {
      const token = response.data.token;
      Cookies.set(TOKEN_COOKIE_NAME, token);
      return response.data;
    });
  },

  refreshToken: () => {
    return axiosClassic.post(`/refresh-token`).then((response) => {
      const token = response.data.token;
      Cookies.set(TOKEN_COOKIE_NAME, token);
      return response.data;
    });
  },
};

axiosClassic.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return AuthService.refreshToken().then((res) => {
        if (res.token) {
          Cookies.set(TOKEN_COOKIE_NAME, res.token);
          return axiosClassic(originalRequest);
        }
        // window.location.href = "/login";
        console.log("err");
      });
    }
    return Promise.reject(error);
  }
);
