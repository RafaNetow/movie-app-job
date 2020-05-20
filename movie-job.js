const fetch = require('node-fetch');

let keepRunning = true;

function run() {
    if (keepRunning) {
        const url = 'http://localhost:8080/api/movies';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
        setTimeout(run, "50000");
    }
}
setTimeout(run, "5000");