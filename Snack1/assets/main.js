const cars = [
    {
        marca: 'Ferrari',
        modello: 'California',
        alimentazione: 'benzina',
    },
    {
        marca: 'Lamborghini',
        modello: 'Urus',
        alimentazione: 'diesel',
    },
    {
        marca: 'Fiat',
        modello: 'panda',
        alimentazione: 'gpl',
    },
    {
        marca: 'Toyota',
        modello: 'CH-R',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Alfa-Romeo',
        modello: 'Mito',
        alimentazione: 'gpl',
    },
    {
        marca: 'Citroen',
        modello: 'c3',
        alimentazione: 'diesel',
    },
    {
        marca: 'Porsche',
        modello: 'Cayenne',
        alimentazione: 'benzina',
    },
    {
        marca: 'Maserati',
        modello: 'Levante',
        alimentazione: 'metano',
    },
    {
        marca: 'bmw',
        modello: 'serie-1',
        alimentazione: 'diesel',
    },
    {
        marca: 'Audi',
        modello: 'A3',
        alimentazione: 'benzina',
    },


];
//macchine a benzina
const result_benzina = cars.filter(cars => {
    if(cars.alimentazione === 'benzina'){
        return 'benzina'
    }
})  
console.log(result_benzina)

//macchine diesel
const result_diesel = cars.filter(cars => {
    if(cars.alimentazione === 'diesel'){
        return 'diesel'
    }
})  
console.log(result_diesel)
//restanti alimentazioni
const result_notlist = cars.filter(cars => cars.alimentazione !== 'benzina' && cars.alimentazione !== 'diesel')
console.log(result_notlist)
