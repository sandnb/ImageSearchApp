import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID jBkaRXbjTGiPNhqx88uOsrHE8Ri-Q-EpBmUr8HmsesM",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
  // here we want only the results of the searching term not all other stuff/;
};

export default searchImages;

// this is entire thing to fetch the data from unsplash but still we need to find a way to get this fetched data into the react app so we need to study the dataflow of the app/;
