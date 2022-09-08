let Productos = []; 

function agregarProductos(producto) { 
   
    let Producto_A_Agregar = { 
        nombre:producto.nombre, 
        id:producto.id, 
        TimeStamp:Date.now(), 
        Stock:producto.stock, 
        PrecioXunidad:producto.precio, 
        Imagen:producto.img, 
        Descripcion:producto.descripcion
    }
    Productos.push(Producto_A_Agregar)
}; 

function encontrarProducto(id){ 
    const ProductoEncontrado = Productos.find(producto => producto.id === id); 
    return ProductoEncontrado; 
}

function listaProductos(){ 
    return Productos; 
}

function eliminarProducto(id){ 
    const NuevaLista = Productos.filter(producto => producto.id !== id); 
    Productos = NuevaLista; 
}


module.exports = { 
    agregarProductos, 
    encontrarProducto, 
    listaProductos, 
    eliminarProducto
}