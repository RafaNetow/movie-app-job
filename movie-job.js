const fetch = require('node-fetch');
const coolMovies = require('./movieList.json')

let keepRunning = true;
let movieAppMessage = "Hello , we are happy that you are on our app, we recomend you this movies:"
let movies = [];

function run() {
    if (keepRunning) {
        const url = 'http://localhost:8080/api/movies';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let movies = data[1].typeOfMovies.split(",");
                console.log(movies["Midway"])
                console.log(movies)
                console.log(data[1].typeOfMovies)
                console.log(coolMovies);
                ///thinking
                let url2 = 'http://www.omdbapi.com/?i=tt3896198&apikey=f29c80cb&t=lalaland';
                movies.forEach(element =>  {
                    console.log("...", element);
                });
                fetch(url2)
                    .then(response => response.json())
                    .then(data => {
                      
            }).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        setTimeout(run, "50000");
    }
}
setTimeout(run, "5000");