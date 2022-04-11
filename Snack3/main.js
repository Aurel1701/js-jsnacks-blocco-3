const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  ]


  const result_mammiferi = animals.filter(animals => {
    if(animals.classe === 'mammiferi'){
        return 'benzina'
    }
})  
console.log(result_mammiferi)