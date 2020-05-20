const fetch = require('node-fetch');
const coolMovies = require('./movieList.json')

let keepRunning = true;

function run() {
    if (keepRunning) {
        const url = 'http://localhost:8080/api/movies';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(coolMovies);
                
                let url2 = 'http://www.omdbapi.com/?i=tt3896198&apikey=f29c80cb&t=lalaland';
                fetch(url2)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
            }).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        setTimeout(run, "50000");
    }
}
setTimeout(run, "5000");