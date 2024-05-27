import axios from "axios";

const URL = "https://cp.1pay.uz/ru/logintest";

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
