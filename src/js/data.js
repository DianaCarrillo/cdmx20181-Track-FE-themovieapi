let breakingBadBtn = document.getElementById('breaking-bad-btn');
let whereThewildBtn = document.getElementById('where-the-btn');
let harryPotterBtn = document.getElementById('harry-potter-btn');
let api = `70a6af2c`;
let search;
let newArray = [];
let sectionMovies = document.getElementById('section-movies')

window.getMovies = (api, search) => {
  const json = `http://www.omdbapi.com/?&t=${search}&apikey=${api}`;
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
  getMovies(api, search)
});

whereThewildBtn.addEventListener('click', () => {
  search = 'where+the+wild+things+are';
  getMovies(api, search)

});
harryPotterBtn.addEventListener('click', () => {
  search = 'Harry+potter';
  getMovies(api, search)

});


const pintar = (data) => {
  console.log(data);
  let title = data.Title;
  let poster = data.Poster;
  console.log(poster);
 sectionMovies.innerHTML = `<p>${title}</p>
                            <img src="${poster}">`
}
