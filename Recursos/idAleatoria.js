function idAleatorio() { 
    const letras = "abcdefghijkmnopqrstuvwxyz"; 
    const letrasAlAzar = []; 

    for (let index = 0; index < 5; index++) {
        let numeroAzar = Math.floor(Math.random()*letras.length); 
        letrasAlAzar.push(letras[numeroAzar])
    }
    const id = `${Date.now()}-${letrasAlAzar.join("")}`; 
    return id
}

module.exports = {idAleatorio}