//http://www.omdbapi.com/?i=tt3896198&apikey=cd6b73ec

function search() {
  let movie = document.querySelector('.search-box').value;

  let api = "http://www.omdbapi.com/?t=" + movie + "&apikey=cd6b73ec&"

  fetch(api)
    .then((response) => response.json())
    .then(function(data) {
      document.querySelector('.title').innerHTML = data.Title;

      document.querySelector('.director').innerHTML = "Director: " + data.Director;

      document.querySelector('.genre').innerHTML = "Genre: " + data.Genre;

      document.querySelector('.imdb').innerHTML = "IMDB: " + data.imdbRating;

      document.querySelector('.bf').innerHTML = "Box-Office: " + data.BoxOffice;

      document.querySelector('.production').innerHTML = "Production: " + data.Production;

      document.querySelector('.language').innerHTML = "Language: " + data.Language;

      document.querySelector('.released').innerHTML = "Released: " + data.Released;

      document.querySelector('.rated').innerHTML = "Rated: " + data.Rated;

      document.querySelector('.year').innerHTML = data.Year;



      document.querySelector('.actors').innerHTML = data.Actors;;

      document.querySelector('.BG').src = data.Poster;

      document.querySelector('.background').src = data.Poster;

      document.querySelector('.plot').innerHTML = data.Plot;

      document.querySelector('.info-box').style.display = 'block';

      document.querySelector('.search-box').style.opacity = '0.6';

      console.log(data)

    }).catch(function(error) {
      console.log(error)
    })
}