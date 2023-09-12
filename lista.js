const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. [${tarea.completada ? 'x' : ' '}] ${tarea.descripcion}`);
  });
}

function agregarTarea(descripcion) {
  tareas.push({ descripcion, completada: false });
  console.log(`Tarea "${descripcion}" añadida.`);
}

function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    const tareaEliminada = tareas.splice(indice, 1)[0];
    console.log(`Tarea "${tareaEliminada.descripcion}" eliminada.`);
  } else {
    console.log('Índice de tarea no válido.');
  }
}

function completarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log(`Tarea "${tareas[indice].descripcion}" completada.`);
  } else {
    console.log('Índice de tarea no válido.');
  }
}

rl.question('¿Qué acción deseas realizar? (agregar/eliminar/completar/listar/salir): ', (accion) => {
  if (accion === 'salir') {
    rl.close();
  } else if (accion === 'listar') {
    mostrarTareas();
    rl.question('Presiona Enter para continuar...', () => {
      rl.close();
    });
  } else if (accion === 'agregar') {
    rl.question('Descripción de la tarea: ', (descripcion) => {
      agregarTarea(descripcion);
      rl.close();
    });
  } else if (accion === 'eliminar') {
    rl.question('Índice de la tarea a eliminar: ', (indice) => {
      eliminarTarea(parseInt(indice) - 1);
      rl.close();
    });
  } else if (accion === 'completar') {
    rl.question('Índice de la tarea a completar: ', (indice) => {
      completarTarea(parseInt(indice) - 1);
      rl.close();
    });
  } else {
    console.log('Acción no válida.');
    rl.close();
  }
});
