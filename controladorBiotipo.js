//1. Creo la referencias de las etiquetas que quiero controlar
let etiquetaNombre=document.getElementById("nombreJugador");
let etiquetaEstatura=document.getElementById("estaturaJugador");
let botonCalcular=document.getElementById("botonCalcular");
let resultado=document.getElementById("resultado");

//2. Configuro mi escuchador de vento de clic sobre el botón calcular
botonCalcular.addEventListener("click",validarFormulario)

//3. Crear la función encargada de activarse al momento de hacer clic en el boton
function validarFormulario(){

    let nombre=etiquetaNombre.value;
    let estatura=Number(etiquetaEstatura.value);


    if(nombre=="" && estatura==0){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaEstatura.classList.add("is-invalid");
    }else if(nombre==""){
        etiquetaNombre.classList.add("is-invalid");
        etiquetaEstatura.classList.remove("is-invalid");
    }else if(estatura==0){
        etiquetaEstatura.classList.add("is-invalid");
        etiquetaNombre.classList.remove("is-invalid");
    }else{
        etiquetaNombre.classList.remove("is-invalid");
        etiquetaEstatura.classList.remove("is-invalid");
        //llamar funcion para calcular biotipo
        calcularBiotipo(estatura);
    }
    
   

}

//4. Funcion para calcular un biotipo
function calcularBiotipo(estatura){

    if(estatura<1.70){
       resultado.textContent="Biotipo bajo";
    }else if(estatura>=1.70 && estatura<1.80){
        resultado.textContent="Biotipo promedio";
    }else if(estatura>=1.80){
        resultado.textContent="Biotipo superior";
    }else{
        console.log("Revisar datos de entrada");
    }

}