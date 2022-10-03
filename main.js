//escribir variable en typescript
var text = "texto";
var number = 1000;
var verdadero = true;
var cualquier = "poner lo que sea";
verdadero = false;
//las constantes no pueden variar su contenido nunca.
var nombre = "Oriol Busquet";
console.log(text, number, verdadero);
//arrays
var personas = ["Victor", "Paco", "Pepe", "Juan"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>";
personas.map(function (persona) {
    div_personas.innerHTML += "<li>" + persona + "</li>";
});
div_personas.innerHTML += "</ul>";
