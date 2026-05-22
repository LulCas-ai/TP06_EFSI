import axios from "axios";

export const getCats = async () => {
  const res = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  return res.data;
};

export const getUser = async () => {
  const res = await axios.get(
    "https://randomuser.me/api/"
  );
  return res.data;
};