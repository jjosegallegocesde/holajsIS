let carritoCompras=[

    {nombre:"Manzana",precio:1500,cantidad:5},
    {nombre:"Pera",precio:1600,cantidad:10},
    {nombre:"Banano",precio:500, cantidad:12},
    {nombre:"Durazno",precio:1850,cantidad:4},
    {nombre:"Fresas",precio:2500,cantidad:2}


];

//1. solamente obtener los productos que cuesten mas de $1500
//FILTER

let carritoFiltrado=carritoCompras.filter(function(producto){

    return(producto.precio>1500);
    
});


//2. Encontrar si en los datos de llegada, llegaron las fresas
//FIND
let carritoEncontrado=carritoCompras.find(function(producto){
    return(producto.nombre=="Fresas");
});

//3.  En los datos de llegada, llegaron las fresas?
//SOME
let carritoSome=carritoCompras.some(function(producto){
    return(producto.nombre=="Fresas");
});

//4. Cuanto es la cantidad total de productos
//REDUCE

let cantidadesTotales=carritoCompras.reduce(function(contador,producto){
    return(contador+producto.cantidad);
},0);

//5. Calcular costo total de cada producto
//MAP

let carritoMapeado=carritoCompras.map(function(producto){
    return({
        nombre:producto.nombre,
        //precio:producto.precio,
        //cantidad:producto.cantidad,
        total:producto.cantidad*producto.precio
    });
});


console.log(carritoCompras);
console.log(carritoFiltrado);
console.log(carritoEncontrado);
console.log(carritoSome);
console.log(cantidadesTotales);
console.log(carritoMapeado);