import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

import { REACT_APP_API_BASE_URL } from "@env";
import { TokenPayloadType } from "#types/authTyping";

const baseURL = REACT_APP_API_BASE_URL;

export const useAxios = async (
  instance: "public" | "protected" = "public"
): Promise<AxiosInstance> => {
  if (!baseURL) {
    throw new Error("REACT_APP_API_BASE_URL is not defined");
  }

  if (instance === "public") {
    return axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  const accessToken = await AsyncStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("accessToken is not defined");
  }

  const httpClient = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
      Accept: "application/json",
    },
  });

  httpClient.interceptors.request.use(async (req) => {
    const payload: TokenPayloadType = jwt_decode(accessToken);
    const isExpired = dayjs.unix(payload.exp).diff(dayjs()) < 1;

    console.log(payload);
    console.log(isExpired);

    if (!isExpired) return req;

    const refreshToken = await AsyncStorage.getItem("refreshToken");

    if (refreshToken) {
      throw new Error("refreshToken is not defined");
    }

    try {
      const response = await axios.post(`${baseURL}/api/v1/auth/user/token/refresh/`, {
        refresh: refreshToken,
      });

      AsyncStorage.setItem("accessToken", response.data.access);
      req.headers.Authorization = `Bearer ${response.data.access}`;
      return req;
    } catch (error) {
      throw new Error("refreshToken is not valid");
    }
  });

  return httpClient;
};
