const express = require("express"); 
const app = express(); 
const PORT = 8080 


app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

//=>Instancias 
const {idAleatorio} = require("./Recursos/idAleatoria"); 


//=>Routers
const productosRouter = require("./Routers/Productos"); 
const CarritoRouter = require("./Routers/Carrito"); 

app.use("/Api/Productos", productosRouter); 
app.use("/Api/Carrito", CarritoRouter)

//=>Contenedores;

app.get("/", (req, res) => { 
    res.status(201).json({Mensaje:"Estas en la pagina principal. Por favor, acceder a los routers /api/Productos o /api/Carrito"})
})

const server = app.listen(PORT, () => {
    console.log("Estamos usando el puerto: " + PORT )
})

server.on("error", (err) => { 
    console.log(err)
})




