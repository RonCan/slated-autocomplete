/**
 * Movies fetch service
 * @returns {{loadAll: Function}}
 * @constructor
 */

const API_URL =
  "https://cors.io/?https://www.slated.com/films/autocomplete/profiles/?term=";
let movieAPI = ($http) => {
  let autoComplete = query => {
    return $http
      .get(API_URL + query)
      .then(
        (resp) => {
          return resp.data;
        },
        (err) => {
          console.error("Transmission error: ", JSON.stringify(err));
        }
      )
      .then((data) => {
        return data.map((movie) => {
          return {
            value: movie.label.toLowerCase(),
            display: movie.label,
            source: movie.image_code.split("src='")[1].split(/[' >]/)[0],
            description: movie.description
              ? movie.description
              : "No description provided",
            year: movie.year
          };
        });
      });
  };

  // service exported methods
  return {
    autoComplete: autoComplete
  };
};

export default ["$http", movieAPI];
