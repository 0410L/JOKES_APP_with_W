//escriure aqui per conversió a js

const textAcudit = document.querySelector('.container p');
const button = document.querySelector('.container button');
const arxiu = new Date;
const puntuacionChiste = []

//function getJoke (null){}
//window.stop();
function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(data => data.json())
        .then(obj => textAcudit.innerHTML = obj.joke)
}

function addToList(score){
    const reportJokes = {}
    reportJokes.joke = textAcudit.innerHTML
    reportJokes.score = score;
    reportJokes.date = arxiu.toISOString()
    puntuacionChiste.push(reportJokes)
    console.log(puntuacionChiste)
}


/*function addToList(){
    let reportJokes {
    resume.push(reportJokes)
    reportJokes.joke = textAcudit.innerHTML
    reportJokes.date = actual().toISOString()
    reportJokes.score = score;
    }
}*/

function aleatorio(){
    document.getElementById("button1").hidden = false;
    document.getElementById("button2").hidden = false;
    document.getElementById("button3").hidden = false;
    getJoke();

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