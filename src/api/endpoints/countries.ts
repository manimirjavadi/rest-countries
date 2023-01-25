import axios from "../axios";

export const fetchCountries = () => {
  return axios.get("/all").then((response) => response.data);
};
