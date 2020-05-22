const fetch = require('node-fetch');
const coolMovies = require('./movieList.json')

let keepRunning = true;
let movieAppMessage = "Hello , we are happy that you are on our app, we recomend you this movies:"
let movieMessage = ' ';
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox05185197488b4b23967712dc2b077597.mailgun.org";
const mg = mailgun({ apiKey: "690467effb55c56921b6e5812aa5ab5f-e5e67e3e-6c51f431", domain: DOMAIN });
let email = {
    from: "Mailgun Sandbox <postmaster@sandbox05185197488b4b23967712dc2b077597.mailgun.org>",
    to: "rafanetow@gmail.com",
    subject: "Movie app",
    text: "Hello There , you make some subscribe to my page and this are the movies for you:"
};


function run() {
    if (keepRunning) {
        
        const url = 'https://moive-app-backend.herokuapp.com/api/movies';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.l);
                data.forEach(user => {
                    let movies = user.typeOfMovies.split(",");
                    let userEmail = user.email;
                   email.to = userEmail;

                    console.log(movies)
                    movies.forEach(element => {
                        let url2 = `http://www.omdbapi.com/?i=tt3896198&apikey=f29c80cb&t=${coolMovies[element]}`;
                        fetch(url2)
                            .then(response => response.json())
                            .then(data => {
                                email.text = email.text + `Title: ${data.Title} Year: ${data.Year} Rate: ${data.Rated} Actors:${data.Actors} Ploto:${data.Plot}`;
                                console.log(email)
                            })
                    });
                    });
               
            }).then(() => {
            
                mg.messages().send(email, function (error, body) {
                    console.log(body);

                });
            })
            .catch(err => console.log(err))
    
    }}

    run()
 