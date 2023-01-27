import axios from "../axios";

export const search = (name: String) => {
  return axios.get(`/name/${name}`).then((response) => response.data);
};

export const regionSearch = (name: String) => {
  return axios.get(`/region/${name}`).then((response) => response.data);
};
