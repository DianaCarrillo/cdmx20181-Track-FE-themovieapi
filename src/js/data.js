let breakingBadBtn = document.getElementById('breaking-bad-btn');
let whereThewildBtn = document.getElementById('where-the-btn');
let harryPotterBtn = document.getElementById('harry-potter-btn');
let api = '70a6af2c';
let search;
let newArray = [];
let sectionMovies = document.getElementById('section-movies');

$('.modal').modal();

window.getMovies = (api, search) => {
  const json = `http://www.omdbapi.com/?&s=${search}&apikey=${api}`;
  console.log(api);
  console.log(search);
  // console.log(json);
  fetch(json)
    .then((res) => { // Aquí ya tiene la información.
      return res.json(); // Entonces le digo que a esa información la retorne como un archivo json.
    })
    .then((data) => { // Aquí le asigno el nombre de laboratoria a la información que envió.
      pintar(data);
    })
    .catch((error) => {
      console.log(error); // Aquí va mi función para un posible error.
    });
};

breakingBadBtn.addEventListener('click', () => {
  search = 'breaking+bad';
  getMovies(api, search);
});

whereThewildBtn.addEventListener('click', () => {
  search = 'where+the+wild+things+are';
  getMovies(api, search);
});
harryPotterBtn.addEventListener('click', () => {
  search = 'Harry+potter';
  getMovies(api, search);
});


const pintar = (data) => {
  sectionMovies.innerHTML = '';
  for (i in data) {
    let newArray = data[i];
    newArray.forEach(element =>{
      console.log(element);
      let title = element.Title;
      let poster = element.Poster;
      console.log(poster);
      sectionMovies.innerHTML += `
                            <p>${title}</p>
                            <img class="poster-image" src="${poster}">
                            </div>`;
    });
  }
  sectionMovies.addEventListener('click', ()=>{
    let containerModal = document.getElementById('container-modal');
    let modal = `<div id="modal1" class="modal">
               <div class="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
              </div>`;
    containerModal.innerHTML = modal;
  });
};

