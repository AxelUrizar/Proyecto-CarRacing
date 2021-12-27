// generar valor aleatorio atraves del boton

/*
    for (cochesArray) {
        let newVel = coche.acelerar()
        insertHTML newVel
    }
*/

document.getElementById('buttonCorrer').addEventListener('click', function(){
    let vel = document.getElementsByClassName('vel');
    for (let i = 0; i < vel.length; i++) {
        let rand = parseInt(Math.random() * (50 - 0) + 0);
        console.log(rand);
        vel[i].textContent = 'Velocidad: ' + rand;
    }
})