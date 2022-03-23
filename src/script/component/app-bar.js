class AppBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style> 
       nav .active{
        color: blue !important;
       }
       nav .tab a:hover {
         color: blue !important;
       }
       </style>
       <header class="container-fluid">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" id="Flix" href="#">AryaFlix</a>
       <div class="container tab">
         <div class="row row-cols-auto">
         <a href="#" id="NowPlaying" class="text-body active text-decoration-none">Now Playing</a>
         <a href="#" id="GetOnTop" class="text-body text-decoration-none">Get On Top</a>
         <a href="#" id="GetUpComming" class="text-body text-decoration-none">Get Up Comming</a>
         </div>
       </div>
     </nav>
     </header>
     `;
    this.querySelectorAll("nav a").forEach((item) => {
      item.addEventListener("click", this._clickEvent);
    });
  }
}

customElements.define("app-bar", AppBar);
