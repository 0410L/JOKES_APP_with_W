//escriure aqui per conversió a js
const textAcudit = document.querySelector('.container p');
const button = document.querySelector('.container button');
const arxiu = new Date;
const puntuacionChiste = []
const weatherLog = document.querySelector('.weather p')
const celsius = document.querySelector('.weather h4')


//// generador d'acudits desde API EXTERNA

//window.stop();
function justJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(data => data.json())
    .then(obj => textAcudit.innerHTML = obj.joke)
}
//// marcador de puntuació d'acudits
function addToList(score){
    const reportJokes = {}
    reportJokes.joke = textAcudit.innerHTML
    reportJokes.score = score;
    reportJokes.date = arxiu.toISOString()
    puntuacionChiste.push(reportJokes)
    console.log(puntuacionChiste)
}
//// generador d'acudits desde API EXTERNA
function justWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=14f15cb2967f0ebbd8cde2cc84211707', {
        headers: {
            'Accept': 'application/json'
        }
    })
    //.then(data => data.json())
    //.then(obj => textAcudit.innerHTML = obj.joke)

    //.then(wheaterData => wheaterData.json())
    //.then(weatherObj => wheatherLog.innerHTML = weatherObj.weather)
    //
    const weatherObj = wheaterData();
    const temp = weatherObj['weather'].map(weather => weather.iconoTiempo);
    var iconoTiempo = ('http://openweathermap.org/img/wm/' + temp + "@2x.png");
    weatherLog.innerHTML = ("<img src = " + iconoTiempo + ">");
    celsius.innerHTML = weatherObj.main.temp + ("ºC");

}
//// generador d'acudits CHUCK NORRIS desde API EXTERNA

function justJokeNorris() {
    fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(dataNorris => dataNorris.json())
    .then(objNorris => textAcudit.innerHTML = objNorris.value)
}

function random (){
    var number = [0,1]
    return Math.round(Math.random(number));
}

function votacion(){
    document.getElementById("button-1").hidden = false;
    document.getElementById("button-2").hidden = false;
    document.getElementById("button-3").hidden = false;
    
    if (random()== 0) {
        justJoke()
    } else {
        justJokeNorris()
    }

    //justJoke();
    //justJokeNorris();

}





/*
    //escribir variable en typescript
    let text: string = "texto";
    let number: number = 1000;
    let verdadero: boolean = true;
    let cualquier: any = "poner lo que sea"

    verdadero = false;

    //las constantes no pueden variar su contenido nunca.
    const nombre: string = "Oriol Busquet"

    console.log (text, number, verdadero);

    //arrays
    let personas: string[] = ["Victor", "Paco", "Pepe", "Juan"];

    let div_personas:HTMLElement | null = document.querySelector("#personas");

    div_personas.innerHTML = "<ul>";

    personas.map((persona) => {
        div_personas.innerHTML += "<li>"+persona+"</li>";
    })

    div_personas.innerHTML += "</ul>";
*/