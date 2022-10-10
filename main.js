var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//escriure aqui per conversió a js
var puntuacionChiste = [];
var arxiu = new Date;
var textAcudit = document.querySelector('#textAcudit');
var button = document.querySelector('.container button');
var weatherLog = document.querySelector('#icono');
var celsius = document.querySelector('#temperatura');
//// generador d'acudits desde API EXTERNA
function justJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var data, box;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://icanhazdadjoke.com/', {
                        headers: { 'Accept': 'application/json' }
                    })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.json()];
                case 2:
                    box = _a.sent();
                    textAcudit.innerHTML = box.joke;
                    return [2 /*return*/];
            }
        });
    });
}
//// marcador de puntuació d'acudits
function addToList(score) {
    var reportJokes = {};
    reportJokes.joke = textAcudit.innerHTML;
    reportJokes.score = score;
    reportJokes.date = arxiu.toISOString();
    puntuacionChiste.push(reportJokes);
    console.log(puntuacionChiste);
}
//// generador del temps desde API EXTERNA
function justWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var weatherData, weatherBox;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=14f15cb2967f0ebbd8cde2cc84211707&lang=ca&units=metric', {
                        headers: { 'Accept': 'application/json' }
                    })];
                case 1:
                    weatherData = _a.sent();
                    return [4 /*yield*/, weatherData.json()];
                case 2:
                    weatherBox = _a.sent();
                    weatherLog.innerHTML = ("<img src = " + 'http://openweathermap.org/img/wn/' + weatherBox['weather'].map(function (weather) { return weather.icon; }) + "@2x.png" + " >");
                    //alert(weatherLog.innerHTML);
                    celsius.innerHTML = weatherBox.main.temp + (" ºC ");
                    return [2 /*return*/];
            }
        });
    });
}
//// generador d'acudits CHUCK NORRIS desde API EXTERNA
function justJokeNorris() {
    return __awaiter(this, void 0, void 0, function () {
        var dataNorris, boxNorris;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random', {
                        headers: { 'Accept': 'application/json' }
                    })];
                case 1:
                    dataNorris = _a.sent();
                    return [4 /*yield*/, dataNorris.json()];
                case 2:
                    boxNorris = _a.sent();
                    textAcudit.innerHTML = boxNorris.value;
                    return [2 /*return*/];
            }
        });
    });
}
//// funció aleatoria
function random() {
    var number = [0, 1];
    return Math.round(Math.random(number));
}
//// funció vots amb (resposta) api aleatoria
function votacion() {
    document.getElementById("boto-Agrada").hidden = false;
    document.getElementById("boto-NiFuNiFa").hidden = false;
    document.getElementById("boto-NoAgrada").hidden = false;
    fondos();
    if (random() == 0) {
        justJoke();
    }
    else {
        justJokeNorris();
    }
    //justJoke();
    //justJokeNorris();
}
//// funció fons colors aleatoris
function fondos() {
    //const image = 14;
    var shapes = ['blob-1.svg', 'blob-2.svg', 'blob-3.svg', 'blob-4.svg', 'blob-5.svg', 'blob-6.svg', 'blob-7.svg', 'blob-8.svg', 'blob-9.svg', 'blob-10.svg', 'blob-11.svg', 'blob-12.svg', 'blob-13.svg', 'blob-14.svg'];
    var randomShapes = shapes[Math.floor(Math.random() * shapes.length)];
    document.body.style.backgroundImage = ("url(images/" + (randomShapes) + ")");
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
