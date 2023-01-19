const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No se pueden hacer divisiones por cero')
        } else  {
            resolve(dividendo/divisor)
        }
    } )
}

dividir(0,0)
    .then(resultado => {
        console.log(resultado)
})
.catch(error => {
    console.log(error)
})