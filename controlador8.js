//Función para calcular la distancia entre 2 puntos
function calcularDistancia(coordenadaxP1,coordenadayP1,coordenadaxP2,coordenadayP2){

    //paso 5:
    return(Math.sqrt(Math.pow((coordenadaxP2-coordenadaxP1),2)+Math.pow((coordenadayP2-coordenadayP1),2)));

}

console.log(calcularDistancia(0,0,70,-50));