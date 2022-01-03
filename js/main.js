// ------------------------- Funcion para cambiar entre pantallas -----------------------------------

const cambiarPantalla = (pantalla) => {
    let arrPantallas = ['pantallaInicio', 'pantallaPersonajes', 'pantallaLoading' ,'pantallaCarrera', 'pantallaPodio'];
    arrPantallas = arrPantallas.filter(val => !pantalla.includes(val));
    console.log(arrPantallas);
    document.getElementById(pantalla).style.display ='flex';
        for (let _pantalla of arrPantallas){
            document.getElementById(_pantalla).style.display = 'none';
        } 
};

// ------------------------- Se printa los inicios de la carrera  -----------------------------------
circuito1.printarCarrera();

// ------------------------- Anyade un Listener al al boton de correr para que pase la ronda -----------------------------------
document.getElementById('buttonCorrer').addEventListener('click', function () {
    circuito1.start();
});
//setTimeout(() => {
//    cambiarPantalla("pantallaCarrera");
//}, 5000);