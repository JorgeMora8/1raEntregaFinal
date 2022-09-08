const express = require("express"); 
const router = express.Router(); 
const {agregarProductos, encontrarProducto, listaProductos, eliminarProducto} = require("../Logica/logicaCompra")
const {esAdmin} = require("../Recursos/administrador")


router.get("/", (req,res) => { 
    res.json({Productos:listaProductos()}) // => Estudiantes es productos
}); 

router.get("/:id", (req,res) => { 
    const productoId = req.params.id; 
    
    res.status(201).json({Producto: encontrarProducto(productoId)})
})

router.post("/", (req,res) => { 
    
    let datosIngresados = req.body; 

    if(!datosIngresados.id){ 
        return res.status(404).json({Error:"Es necesario ingresar su Codigo para su ingreso. (id)"}); 
    }
    if(!datosIngresados.nombre){ 
        return res.status(404).json({Error:"Se necesita su nombre para registrar cualquier producto. (nombre)"})
    }
    if(!datosIngresados.precio){ 
        return res.status(404).json({Error:"No es posible registrar un producto sin su precio respectivo.(precio)"})
    }
    if(!datosIngresados.img){ 
        return res.status(404).json({Error:"Se necesita una imagen para su respectiva identificación. (img)"})
    }
    if(!datosIngresados.stock){ 
        return res.status(404).json({Error:"Es necesario saber la cantidad de productos ingresados. (stock)"})
    }

    agregarProductos(datosIngresados); 
    res.status(201).json({Producto_Agregado:datosIngresados}); 
})


router.put("/:id", (req,res) => { 
    const productoId = req.params.id; 

    usuarioBuscado = req.body; 
    return res.status(201).json({Actualizado:usuarioBuscado})
})//TODO

router.delete("/:id", (req,res) => { 
    const productoId = req.params.id; 
    eliminarProducto(productoId)
    res.status(201).json({Lista: "Producto Eliminado"})
})







module.exports = router