//SI HTML QUIERE CONTROLAR UNA VARIABLE DEBE CREAR
let imagen=document.getElementById("foto1");
let titulo=document.getElementById("titulo");
let audio=document.getElementById("audio")
let parrafo=document.getElementById("parrafo");
let boton=document.getElementById("botonCambio");


//Rutina para detectar el evento de clic sobre el boton
boton.addEventListener("click",cambiarRecursos);


//Definir una función que se dispare al momento de hacer clic en el botón
function cambiarRecursos(){
   
    
    //Cambios del recurso que se esta pintando
    imagen.src="recursos/imagen2.jpg";
    audio.src="recursos/audio2.mp3";
    
    //cambio del texto que se muestra
    titulo.textContent="CAMBIÉ DE TITULO";

    //agrgar clases de CSS
    //parrafo.classList.add("text-danger");

    parrafo.classList.remove("text-danger");


}