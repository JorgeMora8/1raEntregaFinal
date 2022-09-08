const esAdmin = false

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json({ Mensaje:"No puede acceder a esta ruta" })
    } else {
        next()
    }
}

module.exports = { soloAdmins }