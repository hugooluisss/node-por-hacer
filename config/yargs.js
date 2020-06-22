const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Descripción de la tarea por hacer"
        },
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Descripción de la tarea a actualizar"
        },
        completado: {
            alias: 'c',
            default: true,
            desc: "Indica si la tarea fue completada (true) o no (false)"
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Descripción de la tarea a borrar"
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};