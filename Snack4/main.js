//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const users = [
    {
        nome: 'Luca',
        cognome: 'Colombo',
        eta: '17',
    },
    {
        nome: 'Aurel',
        cognome: 'Tafa',
        eta: '24',
    },
    {
        nome: 'Sara',
        cognome: 'Parisi',
        età: '33',
    },
    {
        nome: 'Giorgio',
        cognome: 'angiolini',
        eta: '11',
    },
    {
        nome: 'Goku',
        cognome: 'lapomarda',
        eta: '15',
    },
    {
        nome: 'stefano',
        cognome: 'falcone',
        eta: '19',
    },
    {
        nome: 'giorgia',
        cognome: 'mancuso',
        eta: '17',
    },
    {
        nome: 'fabio',
        cognome: 'Pacifici',
        eta: '30',
    },
    {
        nome: 'Lucrezia',
        cognome: 'poli',
        eta: '50',
    },
    {
        nome: 'Marco',
        cognome: 'mosca',
        eta: '14',
    },


];


const result_drive = users.filter(users => {
    if (users.eta > 18) {
        return (`${users.nome}${users.cognome}:può guidare`)
    }
})
console.log(result_drive)