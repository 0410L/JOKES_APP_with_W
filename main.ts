//escriure aqui per conversió a js
const puntuacionChiste = []
const arxiu = new Date;
const textAcudit = document.querySelector('#textAcudit');
const button = document.querySelector('.container button');
const weatherLog = document.querySelector('#icono')
const celsius = document.querySelector('#temperatura')

//// generador d'acudits desde API EXTERNA
async function justJoke() {
    const data = await fetch('https://icanhazdadjoke.com/', {
        headers: {'Accept': 'application/json'}
    })
    const box = await data.json();
    textAcudit.innerHTML = box.joke;
    //window.stop();
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
//// generador del temps desde API EXTERNA
async function justWeather() {
    const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=14f15cb2967f0ebbd8cde2cc84211707&lang=ca&units=metric', {
        headers: {'Accept': 'application/json'}
    })
    const weatherBox = await weatherData.json();
    
    weatherLog.innerHTML = ("<img src = " + 'http://openweathermap.org/img/wn/' + weatherBox['weather'].map(weather => weather.icon) + "@2x.png" + " >");
    //alert(weatherLog.innerHTML);
    celsius.innerHTML = weatherBox.main.temp + (" ºC ");
    //alert(celsius.innerHTML);

}
//// generador d'acudits CHUCK NORRIS desde API EXTERNA
async function justJokeNorris() {
    const dataNorris = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {'Accept': 'application/json'}
    })
    const boxNorris = await dataNorris.json();
    textAcudit.innerHTML = boxNorris.value;
}

//// funció aleatoria
function random (){
    var number = [0,1]
    return Math.round(Math.random(number));
}
//// funció vots amb (resposta) api aleatoria
function votacion(){
    document.getElementById("boto-Agrada").hidden = false;
    document.getElementById("boto-NiFuNiFa").hidden = false;
    document.getElementById("boto-NoAgrada").hidden = false;
    fondos();
    if (random()== 0) {
        justJoke()
    } else {
        justJokeNorris()
    }

    //justJoke();
    //justJokeNorris();

}
//// funció fons colors aleatoris
function fondos () {
    //const image = 14;
    let shapes = ['blob-1.svg','blob-2.svg','blob-3.svg','blob-4.svg','blob-5.svg','blob-6.svg','blob-7.svg','blob-8.svg','blob-9.svg','blob-10.svg','blob-11.svg','blob-12.svg','blob-13.svg','blob-14.svg']
    let randomShapes = shapes[Math.floor(Math.random()*shapes.length)]
    document.body.style.backgroundImage=("url(images/"+(randomShapes)+")");
}

justWeather();




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