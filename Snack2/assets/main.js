const names = ['grogu', 'stefano', 'luke', 'sara']

for (let name of names) {
    name = name.charAt(0).toUpperCase() + name.substr(1);
    console.log(name);
}