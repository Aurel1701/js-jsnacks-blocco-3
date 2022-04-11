//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const users = [
    {
        nome: 'Luca',
        cognome: 'Colombo',
        età: '17',
    },
    {
        nome: 'Aurel',
        cognome: 'Tafa',
        età: '24',
    },
    {
        nome: 'Sara',
        cognome: 'Parisi',
        età: '33',
    },
    {
        nome: 'Giorgio',
        cognome: 'angiolini',
        età: '11',
    },
    {
        nome: 'Goku',
        cognome: 'lapomarda',
        età: '15',
    },
    {
        nome: 'stefano',
        cognome: 'falcone',
        età: '19',
    },
    {
        nome: 'giorgia',
        cognome: 'mancuso',
        età: '17',
    },
    {
        nome: 'fabio',
        cognome: 'Pacifici',
        età: '30',
    },
    {
        nome: 'Lucrezia',
        cognome: 'poli',
        età: '50',
    },
    {
        nome: 'Marco',
        cognome: 'mosca',
        età: '14',
    },


];


const result_drive = users.filter(users => {
    if (users.età > 18) {
        return (`${users.nome}${users.cognome}:può guidare`)
    }
})
console.log(result_drive)