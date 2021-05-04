let bolsa={

    proteinas:["carne","queso"],
    vegetales:{vegetal1:"tomate",vegetal2:"lechuga"},
    complementos:"salsa"

}
//console.log(bolsa);


let carrito=[
    {nombre:"uno",costo:2000},
    {nombre:"dos",costo:3000},
    {nombre:"dos",costo:5000}
]

let resultado= carrito.map(function(producto){
    return({
        nombre:producto.nombre,
        costo:producto.costo,
        clave:50
    });
});

console.log(resultado);
