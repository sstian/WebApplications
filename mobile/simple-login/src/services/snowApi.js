import axios from "axios";
import { Toast } from "antd-mobile";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

// 拦截器
axios.interceptors.request.use(config => {
  console.log("axios.interceptors.request...");
  nprogress.start();
  return config;
});

axios.interceptors.response.use(
  response => {
    console.log("axios.interceptors.response - response");
    nprogress.done();
    return response.data;
  },
  error => {
    console.log("axios.interceptors.response - error");
    nprogress.done();
    Toast.show({ icon: "fail", content: error.message });
    return new Promise(() => {});
  }
);

// 请求
export const requestVerifyCode = (phone) => {
  console.log("requestVerifyCode()");
  axios.post("http://localhost:3000/login/digits", {phone});
}
