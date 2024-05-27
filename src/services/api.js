import axios from "axios";

export const apodData = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod",
    timeout: 5 * 1000,
  });