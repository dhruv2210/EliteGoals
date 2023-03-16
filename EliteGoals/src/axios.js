import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseURL ||"https://localhost:3000",
});

export default instance;
