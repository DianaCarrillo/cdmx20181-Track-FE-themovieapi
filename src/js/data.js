$('.modal').modal();


let breakingBadBtn = document.getElementById('breaking-bad-btn');
let whereThewildBtn = document.getElementById('where-the-btn');
let harryPotterBtn = document.getElementById('harry-potter-btn');
let api = '70a6af2c';
let search;
let newArray = [];
let sectionMovies = document.getElementById('section-movies');
let containerModal = document.getElementById('modal-container');


window.getMovies = (api, search) => {
  const json = `http://www.omdbapi.com/?&s=${search}&apikey=${api}`;
  console.log(api);
  console.log(search);
  console.log(json);
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
  console.log(data)
  sectionMovies.innerHTML = '';
  for (i in data) {
    let newArray = data[i];
    newArray.forEach(element => {
      console.log(element);
      let title = element.Title;
      let poster = element.Poster;
      let type = element.Type;
      let year = element.Year;
      let titleElement = document.createElement('p');
      let posterElement = document.createElement('img');
      let divEl = document.createElement('div');
      divEl.appendChild(titleElement);
      divEl.appendChild(posterElement);
      sectionMovies.appendChild(titleElement);
      sectionMovies.appendChild(posterElement);
      // titleElement.innerHTML = title;
      // titleElement.classList.add('title-parragraph');
      // titleElement.classList.add('column');
      posterElement.classList.add('column');
      posterElement.classList.add('poster-image');
      posterElement.src = poster;

      
      // divEl.classList.add('column');
      // posterElement.classList.add('modal-trigger');

      posterElement.addEventListener('click', () => {
        let modal = `
                              <div class="modal-content ">
                             <h4>${title}</h4>
                             <p>${type}</p>
                             <p>${year}</p>
                             </div>
                             </div>`;
        containerModal.innerHTML = modal;
      });
    });
  }
};