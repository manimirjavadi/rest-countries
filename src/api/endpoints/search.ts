import axios from "../axios";

export const search = (name: String, fullText: boolean) => {
  return axios.get(`/name/${name}${fullText ?? "?fullText=true"}`);
};
