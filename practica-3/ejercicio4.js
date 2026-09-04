// Categoría por edad: Solicite la edad del usuario. Clasifíquelo en: niño (0-12), adolescente (13-17), adulto (18-64) o adulto mayor (65+).

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Ingrese su edad: ", (edad) => {
    if(edad >= 0 && edad <=12){
        console.log(`Niño`);
    }else if (edad > 12 && edad <= 17){
        console.log(`Adolescente`);
    } else if(edad >= 18 && edad <= 64) {
        console.log(`Adulto`);
    } else if(edad > 65){
        console.log(`Adulto mayor`)
    }

    rl.close();
})