import axios from "axios";

export const fetchApi = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
