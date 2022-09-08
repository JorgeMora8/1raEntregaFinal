const express = require("express"); 
const router = express.Router(); 
let CarritoContenedor = []; 
const {agregarCarrito, ListaCarritos, eliminarCarrito, encontrarCarrito, } = require("../Logica/logicaCarrito")
const {encontrarProducto} = require("../Logica/logicaCompra")
const {soloAdmins} = require("../Recursos/administrador")
//=> Obtiene toda la lista de carritos
router.get("/",soloAdmins, (req,res) => { 
    res.status(201).json({Carritos:ListaCarritos()})
})

//=>Obtiene un carrito por medio del ID
router.get("/:id", (req,res) => { 
    let idCarrito_Buscar = req.params.id; 
    encontrarCarrito(idCarrito_Buscar); 
    res.status(201).json({Carrito_Encontrado:encontrarCarrito(idCarrito_Buscar)})
    
})

//=>Obtiene todos los productos agregados al carrito
router.get("/:idCarrito/Productos", (req,res) => { 
    const idCarrito = req.params.idCarrito; 
    const Carrito = encontrarCarrito(idCarrito); 
    res.status(201).json({Productos_En_Carrito:Carrito.Productos})
})

//=>Crea un carrito
router.post("/", (req,res) => { 
    const DatosCarrito = req.body; 

    if(!DatosCarrito.nombre){ 
        return res.status(404).json({Err: "Es necesario agregar un nombre al carrito"})
    }
    const CarritoCreado = agregarCarrito(DatosCarrito)
    res.status(201).json({Carrito_Agregado:`Id del carrito: ${CarritoCreado.id}`})
})


//=>Agrega un producto a un carrito
router.post("/:idCarrito/:idProducto", (req, res) => { 
    const idCarrito = req.params.idCarrito; 
    const idProducto = req.params.idProducto;
    const Carrito = encontrarCarrito(idCarrito) ; 
    const Producto = encontrarProducto(idProducto); 

    if(!encontrarCarrito(idCarrito)){ 
      return res.status(404).json({Error:"No se encuentra ningun carrito con este ID"})
    }
    if(!encontrarProducto(idProducto)){ 
        return res.status(404).json({Error:"No se encuentra ningun producto con este ID"})
    }

   // Carrito.Productos.push=Producto;
    Carrito.Productos.push(Producto) 
     res.status(201).json({Producto_Agregado: Carrito})

})

//=>Elimina un carrito
router.delete("/:idCarrito", (req, res) => { 
    const idCarrito = req.params.idCarrito; 
    eliminarCarrito(idCarrito); 
    res.status(201).json({Mensaje:"Carrito Eliminado"})
})

//=>Elimina un producto de un carrito en especifico; 
router.delete("/:idCarrito/Productos/:idProducto", (req,res) => { 
    const idProducto = req.params.idProducto;
    const idCarrito = req.params.idCarrito; 
    const Carrito = encontrarCarrito(idCarrito);
 
    let NuevaListaProductos = Carrito.Productos.filter((producto) => producto.id !== idProducto); 
  
    Carrito.Productos = NuevaListaProductos;  
    res.status(201).json({Productos_En_Carrito:Carrito})
})




module.exports = router