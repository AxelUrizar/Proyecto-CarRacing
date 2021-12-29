
class Pilot{

    constructor(nombre, velocidadMax, velocidadMin, peso){
        this.nombre = nombre;
        this.velocidadMax = velocidadMax;
        this.velocidadMin = velocidadMin;
        this.peso = peso
        this.vuelta = 0;
        this.velocidadActual = 0;
        this.metrosRealizados = 0;
        this.posicion = 'En salida';
    }
    recorrido(){
        this.metrosRealizados += this.velocidadActual;
    }
    
    acelerar(){
        this.velocidadActual = parseInt(Math.random() * (this.velocidadMax - this.velocidadMin) + this.velocidadMin);
        this.recorrido();
    }
    
    pasarVuelta(metrosVuelta){
        if (this.metrosRealizados >= metrosVuelta){
            this.vuelta ++;
            this.metrosRealizados -= metrosVuelta;
        }
    }

    // finCarrera(vueltaMax){
    //     if (this.vuelta > vueltaMax){
         
    //     }
    // }
}
class Circuito{
    constructor(nombre, metrosVuelta, coches, vueltaMax){
        this.nombre = nombre;
        this.metrosVuelta = metrosVuelta;
        this.coches = coches;
        this.vueltaMax = vueltaMax;
    }

    posicion(){

        this.coches = this.coches.sort((i, z) => z.vuelta - i.vuelta);
        let cochesOrdenados = [];
        for (let i = this.vueltaMax; i >= -1; i--) {
            let arrayCochesVuelta = this.coches.filter(coche => coche.vuelta == i);

            arrayCochesVuelta.sort((i, z) => z.metrosRealizados - i.metrosRealizados);

            for (let coche of arrayCochesVuelta) {
                cochesOrdenados.push(coche);
            }
        }
        this.coches = cochesOrdenados;

        for (let i = 0; i < this.coches.length; i++) {
            this.coches[i].posicion = i+1;
        }
    }

    start() {
        for (let i = 0; i < this.coches.length; i++) {
            this.coches[i].acelerar();
        }
        this.posicion();
        this.printarCarrera();
        console.log(this.coches);
    }

    printarCarrera() {
        let piloto = document.getElementsByClassName('piloto');
        let velocidad = document.getElementsByClassName('velocidad');
        let metrosRecorridos = document.getElementsByClassName('metrosRecorridos');
        let metrosParaVuelta = document.getElementsByClassName('metrosParaVuelta');
        let vuelta = document.getElementsByClassName('vuelta');
        let posicion = document.getElementsByClassName('posicion');
        for (let i = 0; i < this.coches.length; i++) {
            piloto[i].textContent = 'Piloto: ' + this.coches[i].nombre;
            velocidad[i].textContent = 'Velocidad: ' + this.coches[i].velocidadActual;
            metrosRecorridos[i].textContent = 'Metros Recorridos: ' + this.coches[i].metrosRealizados;
            metrosParaVuelta[i].textContent = 'Metros para dar la vuelta: \n' + (this.metrosVuelta - this.coches[i].metrosRealizados);
            vuelta[i].textContent = 'Vuelta: ' + this.coches[i].vuelta;
            posicion[i].textContent = 'Posicion: ' + this.coches[i].posicion;
        }
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
let participantes = [allPlayers[1], allPlayers[2], allPlayers[3], allPlayers[4]];
// participantes[0].vuelta = 1;
// participantes[2].vuelta = 3;
// participantes[3].vuelta = 3;
//Instancio circuitos
let circuito1 = new Circuito("Reino Campinyon", 500, participantes, 3);