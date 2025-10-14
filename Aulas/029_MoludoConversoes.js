const celciusPfahrenheit = (celcius) => {
const fah = (celsius * 9/5) + 32;
const objRetorno = {
    celcius: celcius
}
return objRetorno
}

const quilometrosPmilhas = (km) => {
const milhas = km * 0.621371;
const objRetorno = {
    milhas: milhas
}
return objRetorno
}

module.exports = {celciusPfahrenheit, quilometrosPmilhas}
