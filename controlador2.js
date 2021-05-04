//1. Ejercicio RAPPI

//Entradas
let nombreUsuario="Pedro Coral Tavera";
let passwordUsuario="admin123*";
let direccionUsuario="cr80 #50-20";

let nombreTienda="Tiendas Deli SA";
let direcciónTienda="exito colombia cll 50#65-20";

let productoPedido="torat de chocolate";
let precioProducto=32000;
let cantidadProducto=1;
let aplicaDescuento=false;

let nombreRepartidor="Juan Perez";
let placaRepartidor="AAA 123";

let costoEnvio=7500;
const IVA=0.19;
const DESCUENTO=10000;

//Proceso

let costoProducto=precioProducto*cantidadProducto;
let costoBruto=costoProducto; //sumatoria si hay varios productos
let valorCalculadoIVA=costoBruto*IVA;
let costoNeto=0;

if(aplicaDescuento){  
    costoNeto=costoBruto+valorCalculadoIVA-DESCUENTO;
    console.log("aplico descuento");
}else{
    costoNeto=costoBruto+valorCalculadoIVA;
    console.log("No aplico el descuento");
}



console.log(`señor usuario ${nombreUsuario} el costo de su compra fue de ${costoNeto}`);









//SALIDAS
//console.log(`señor usuario ${nombreUsuario} el costo de su compra fue de ${costoNeto}`);
