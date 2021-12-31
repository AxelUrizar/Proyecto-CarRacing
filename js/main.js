//
//-------------------------funcion para cambiar entre pantallas-----------------------------------
//

const cambiarPantalla = (pantalla) => {
    let arrPantallas = ['pantallaInicio', 'pantallaPersonajes', 'pantallaCarrera', 'pantallaPodio'];
    arrPantallas = arrPantallas.filter(val => !pantalla.includes(val));
    document.getElementById(pantalla).style.display ='flex';
        for (let _pantalla of arrPantallas){
            document.getElementById(_pantalla).style.display = 'none';
        } 
};

// generar valor aleatorio atraves del boton

/*
    for (cochesArray) {
        let newVel = coche.acelerar()
        insertHTML newVel
    }
*/

// document.getElementById('buttonCorrer').addEventListener('click', function(){
//     let vel = document.getElementsByClassName('velocidad');
//     for (let i = 0; i < vel.length; i++) {
//         let rand = parseInt(Math.random() * (50 - 0) + 0);
//         // console.log(rand);
//         vel[i].textContent = 'Velocidad: ' + rand;
//     }
// })

circuito1.printarCarrera();
document.getElementById('buttonCorrer').addEventListener('click', function () {
    circuito1.start();
});