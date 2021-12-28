
class Pilot{

    constructor(nombre, velocidadMax, velocidadMin, peso){
        this.nombre = nombre;
        this.velocidadMax = velocidadMax;
        this.velocidadMin = velocidadMin;
        this.peso = peso
        this.vuelta = 0;

    }
}

//Instancio corredores
let player1 = new Pilot("Mario",70,15, "intermedio");
let player2 = new Pilot("Luigi",70,15, "intermedio");
let player3 = new Pilot("Peach",80,10, "ligero");
let player4 = new Pilot("Yoshi",80,10, "ligero");
let player5 = new Pilot("Toad",90,5, "muy ligero");
let player6 = new Pilot("Tortuga",90,5, "muy ligero");
let player7 = new Pilot("Bowser",60,20,"pesado");
let player8 = new Pilot("DK",60,20,"pesado");


let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
    "7" : player7,
    "8" : player8
}