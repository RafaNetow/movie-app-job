const fetch = require('node-fetch');
const coolMovies = require('./movieList.json')

let keepRunning = true;
let movieAppMessage = "Hello , we are happy that you are on our app, we recomend you this movies:"
let movieMessage = ' ';
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox05185197488b4b23967712dc2b077597.mailgun.org";
const mg = mailgun({apiKey: "690467effb55c56921b6e5812aa5ab5f-e5e67e3e-6c51f431", domain: DOMAIN});
const text = {
	from: "Mailgun Sandbox <postmaster@sandbox05185197488b4b23967712dc2b077597.mailgun.org>",
	to: "rafanetow@gmail.com",
	subject: "Hello",
	text: "Hello There , you make some subscribe to my page and this are the movies for you:"
};
/*
mg.messages().send(data, function (error, body) {
	console.log(body);
});*/


function run() {
    if (keepRunning) {
        const url = 'http://localhost:8080/api/movies';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let movies = data[1].typeOfMovies.split(",");
                console.log("..",coolMovies["actions"])
                console.log(movies)
                console.log(data[1].typeOfMovies)
                console.log(coolMovies);
                ///thinking
               
                movies.forEach(element =>  {
                    let url2 = `http://www.omdbapi.com/?i=tt3896198&apikey=f29c80cb&t=${element}`;
                    fetch(url2)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        text = text + ` `
                        

                      
            }).catch(err => console.log(err))
                });
            })
            .catch(err => console.log(err))
        setTimeout(run, "50000");
    }
}
setTimeout(run, "5000");