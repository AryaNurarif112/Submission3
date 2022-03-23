class DataMovies {
  static getNowPlaying() {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=084109b7a52ae81976e7e7890775a834&language=en-US&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("No data");
        }
      });
  }
  static getComingTop() {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=084109b7a52ae81976e7e7890775a834&language=en-US&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("No data");
        }
      });
  }

  static getUpComming() {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=084109b7a52ae81976e7e7890775a834&language=en-US&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject("No data");
        }
      });
  }
}

export default DataMovies;
