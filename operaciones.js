const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {

    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    }

    const citasAgendadas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))

    citasAgendadas.push(nuevaCita)

    fs.writeFileSync('citas.json', JSON.stringify(citasAgendadas))
}

const leer = () => {
    const leyendoCita = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    return leyendoCita
}

module.exports = { registrar, leer }