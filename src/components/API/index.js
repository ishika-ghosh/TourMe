import axios from "axios";

export const getCity = async (city) => {
  var link =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&appid=b8bd04883bfc1ee2e662b28a6e82f1f9";

  const { data } = await axios.get(link);

  return data;
};

export const travelFunc = async (type, latitude, longitude) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
