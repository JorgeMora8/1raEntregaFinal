let CarritoContenedor = []; 
const {idAleatorio} = require("../Recursos/idAleatoria"); 
const {encontrarProducto} = require("./logicaCompra")

function agregarCarrito(Datos) { 
    let DatosCarrito = { 
        nombre:Datos.nombre,
        id:idAleatorio(), 
        Descripción:Datos.descripcion, 
        timeStamp:Date.now(), 
        Productos:[]
    }
    CarritoContenedor.push(DatosCarrito); 
    return DatosCarrito
}

function ListaCarritos(){ 
    return CarritoContenedor; 
}

function eliminarCarrito(id){ 
    const NuevaLista = CarritoContenedor.filter(carrito => carrito.id !== id); 
    CarritoContenedor = NuevaLista; 
    return CarritoContenedor
}

function encontrarCarrito(id){ 
    const carritoEncontrado = CarritoContenedor.find(carrito => carrito.id === id); 
    return carritoEncontrado
}

function agregarProductosCarrito(id){ 
    const carritoEncontrado = CarritoContenedor.find(carrito => carrito.id === id); 
    return carritoEncontrado.Productos
}



module.exports = { 
    agregarCarrito, 
    ListaCarritos, 
    eliminarCarrito, 
    encontrarCarrito, 
    agregarProductosCarrito, 
    eliminarCarrito
}