let music = new Audio('/music/kart-mario.mp3');
music.play();
music.loop = true;
music.volume = 0.1;
music.playbackRate = 1;


// ------------------------- Funcion para cambiar entre pantallas -----------------------------------

const cambiarPantalla = (pantalla) => {

    let arrPantallas = ['pantallaInicio', 'pantallaPersonajes', 'pantallaLoading' ,'pantallaCarrera', 'pantallaPodio'];
    arrPantallas = arrPantallas.filter(val => !pantalla.includes(val));
    document.getElementById(pantalla).style.display ='flex';
        for (let _pantalla of arrPantallas){
            document.getElementById(_pantalla).style.display = 'none';
        } 
        printarSeleccionPersonaje(allPlayers);
};

// ------------------------- Funcion para printar la pantalla de Seleccion -----------------------------------

const printarSeleccionPersonaje = (allPlayers) => {
    let  imgSeleccion = document.getElementsByClassName('imgSeleccion');
    let  pilotoSeleccion = document.getElementsByClassName('pilotoSeleccion');

    for (const i in allPlayers) {
        imgSeleccion[i-1].src = allPlayers[i].img; 
        pilotoSeleccion[i-1].innerHTML = allPlayers[i].nombre;
    }
}


// ------------------------- Se printa los inicios de la carrera  -----------------------------------
circuito1.printarCarrera();

// ------------------------- Anyade un Listener al al boton de correr para que pase la ronda -----------------------------------
document.getElementById('buttonCorrer').addEventListener('click', function () {
    circuito1.start();
});

