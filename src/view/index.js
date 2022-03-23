import "../script/component/app-bar.js";
import "../script/component/up-coming.js";
import DataMovies from "../script/data/data-movie.js";

const main = async () => {
  const upComing = document.querySelector("up-coming");
  const result = await DataMovies.getNowPlaying();
  upComing.movies = result;

  const navbarClicked = async (event) => {
    if (event.target.id == "NowPlaying" || event.target.id == "Flix") {
      const result = await DataMovies.getNowPlaying();
      upComing.movies = result;
    } else if (event.target.id == "GetOnTop") {
      const result = await DataMovies.getComingTop();
      upComing.movies = result;
    } else if (event.target.id == "GetUpComming") {
      const result = await DataMovies.getUpComming();
      upComing.movies = result;
    }
    document.querySelectorAll("nav a").forEach((item) => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  };
  const navbar = document.querySelector("app-bar");
  navbar.clickEvent = navbarClicked;
};

export default main;
