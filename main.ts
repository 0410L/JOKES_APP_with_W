//escriure aqui per conversió a js

const button = document.querySelector('.contenedor button');

const textAcudit = document.querySelector('.contenedor p');

document.addEventListener('DOMContentLoaded', getJoke);

const nextAcudit = document.getElementById('nextAcudit');

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(data => data.json())
        .then(obj => textAcudit.innerHTML = obj.joke)
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