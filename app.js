var colors = require('colors');

const argv = require('./config/yargs.js').argv;
const porHacer = require('./porHacer/porHacer.js');

switch (argv._[0]) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        for (let tarea of porHacer.getListado()) {
            console.log("=========== Por Hacer =========".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("===============================".green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}