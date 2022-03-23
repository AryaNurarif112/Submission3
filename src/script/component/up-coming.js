class UpComming extends HTMLElement {
  constructor() {
    super();
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  get movies() {
    return this._movies;
  }

  TextAbstract(text, length) {
    if (text == null) {
      return "";
    }
    if (text.length <= length) {
      return text;
    }
    let textAbstract = text.substring(0, length);
    let last = text.lastIndexOf(" ");
    text = textAbstract.substring(0, last);
    console.log(last);
    return textAbstract + "...";
  }
  render() {
    this.innerHTML = `
    
          <style>
         </style>
         <div class="d-flex justify-content-center moviesContainer flex-wrap gap-3 container-fluid mt-3">
        
       </div>`;
    this.movies.forEach((movie) => {
      this.querySelector(
        ".moviesContainer"
      ).innerHTML += ` <div class="card" style="width: 18rem">
      <img src="https://image.tmdb.org/t/p/w500/${
        movie.poster_path
      }" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5></h5>
        <p class="card-text">
          ${this.TextAbstract(movie.overview, 250)}
        </p>
      <p>${movie.vote_average}</p>
      </div>
    </div>`;
    });
  }
}

customElements.define("up-coming", UpComming);
