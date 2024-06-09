import axios from "axios";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "fa1fe3a6b4msh858eec299efa35fp17b2adjsn7c4a74495a2f",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com'

export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    console.log(response)
    return response;
  } catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};
