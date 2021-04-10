import axios from "axios";
import https from "https";

export let createClient = () => {

  return axios.create({
    baseURL: "https://restcountries.eu/rest/v2/all",
    httpsAgent: https.Agent({
      rejectUnauthorized: false,
    }),
  });
};

export default createClient;
