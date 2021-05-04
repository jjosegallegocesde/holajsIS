let digito=5;

if(digito===0){
    console.log("Lunes");
}else if(digito===1){
    console.log("Martes");
}else if(digito===2){
    console.log("Miercoles");
}else{
    console.log("Pilas no podes salir");
}

switch(digito){

    case 0:
        console.log("Lunes");
    break;

    case 1:
        console.log("Martes");
    break;

    case 2:
        console.log("Miercoles");
    break;

    default:
        console.log("No debes salir")
    break;


}