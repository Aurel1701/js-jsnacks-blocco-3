const names = ['grogu', 'MANDO', 'Luke', 'sara']

for (let name of names) {
    name = name.charAt(0).toUpperCase() + name.substr(1);
    console.log(name);
}