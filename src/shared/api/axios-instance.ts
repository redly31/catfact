import axios, { type AxiosRequestConfig } from "axios"

export function customInstance<T>(config: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: "https://catfact.ninja",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return instance.request<T>(config).then((response) => response.data)
}
