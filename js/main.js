// ------------------------- Poner musica al juego ----------------------------------- //

let music = new Audio('music/StartScreen.mp3');
music.loop = true;
music.volume = 0.3;
music.playbackRate = 1;

music.play();

// ------------------------- Funcion para cambiar entre pantallas ----------------------------------- //

const cambiarPantalla = (pantalla) => {
    
    let arrPantallas = ['pantallaInicio', 'pantallaPersonajes', 'pantallaLoading' ,'pantallaCarrera', 'pantallaPodio'];
    arrPantallas = arrPantallas.filter(val => !pantalla.includes(val));
    document.getElementById(pantalla).style.display ='flex';
    for (let _pantalla of arrPantallas){
        document.getElementById(_pantalla).style.display = 'none';
    } 
    
    if (pantalla === 'pantallaInicio') {
            music.pause();
            music = new Audio('music/StartScreen.mp3');
            music.play();
            music.loop = true;
            music.volume = 0.2;
            music.playbackRate = 1;
    }
    if (pantalla === 'pantallaPersonajes') {
        music.pause();
        music = new Audio('music/MainMenu.mp3');
        music.play();
        music.loop = true;
        music.volume = 0.2;
        music.playbackRate = 1;
    }
    if (pantalla === 'pantallaInicio') {
        music.pause();
        music = new Audio('music/StartScreen.mp3');
        music.play();
        music.loop = true;
        music.volume = 0.2;
        music.playbackRate = 1;
    }
    if (pantalla === 'pantallaLoading') {
        music.pause();
        music = new Audio('music/MarioKartStadium.mp3');
        music.play();
        music.loop = true;
        music.volume = 0.2;
        music.playbackRate = 1;
    }
    if (pantalla === 'pantallaCarrera') {
        music.pause();
        music = new Audio('music/MountWario.mp3');
        music.play();
        music.loop = true;
        music.volume = 0.2;
        music.playbackRate = 1;
    }
    if (pantalla === 'pantallaPodio') {
        music.pause();
        music = new Audio('music/GoodResult.mp3');
        music.play();
        music.loop = true;
        music.volume = 0.2;
        music.playbackRate = 1;
    }

        printarSeleccionPersonaje(allPlayers);
};

// ------------------------- Funcion para printar la pantalla de Seleccion ----------------------------------- //

const printarSeleccionPersonaje = (allPlayers) => {
    let  imgSeleccion = document.getElementsByClassName('imgSeleccion');
    let  pilotoSeleccion = document.getElementsByClassName('pilotoSeleccion');

    for (const i in allPlayers) {
        imgSeleccion[i-1].src = allPlayers[i].img; 
        pilotoSeleccion[i-1].innerHTML = allPlayers[i].nombre;
    }
}


// ------------------------- Se printa los inicios de la carrera  ----------------------------------- //
circuito1.printarCarrera();

// ------------------------- Anyade un Listener al al boton de correr para que pase la ronda ----------------------------------- //
document.getElementById('buttonCorrer').addEventListener('click', function () {
    circuito1.start();
});

