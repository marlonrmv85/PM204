
// Caja en la cual se va a mostrar los pedidos de los clientes los costos y los totales
// que hace el codigo  Importa el módulo readline que viene incluido en Node.js.
//  Es como "activar"
//  la herramienta que permite leer lo que el usuario escribe en la terminal.
//Crea la interfaz de comunicación con el usuario:
// input: process.stdin → escucha lo que el usuario escribe (teclado)
// output: process.stdout → muestra texto en la terminal (pantalla)
// rl es el nombre que le damos a esa interfaz para usarla después

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hola Bienvenidos a Cafecito");
//Imprime un mensaje en la terminal. No espera nada del usuario, solo muestra el texto.
// Muestra una pregunta al usuario y espera a que escriba algo y presione Enter.
//"¿Cuál es tu nombre? " → es el texto que se muestra
//function(nombre) → cuando el usuario escribe y presiona Enter, 
//lo que escribió se guarda automáticamente en la variable nombre
rl.question("¿Cuál es tu nombre? ", function(nombre) {

    console.log("Hola: " + nombre + "¿Que vas a ordenar el dia de hoy?, este es el menu");
    // Imprime la respuesta usando lo que el usuario escribió. 
    // El + une los textos. Por ejemplo si escribió Marlo muestra: Hola: Marlo!
    rl.close();
    // Cierra la interfaz readline. Es importante ponerlo al final para que el programa termine correctamente, si no, el programa se queda "colgado" esperando más input.




// ==========================
// BEBIDAS
// ==========================

var ExpresAmericano = new Object();

ExpresAmericano.nombre = "Expres Americano";
ExpresAmericano.precio = 45;
ExpresAmericano.tamaño = "Mediano";
ExpresAmericano.disponible = true;


var Capuccino = new Object();

Capuccino.nombre = "Capuccino";
Capuccino.precio = 60;
Capuccino.tamaño = "Grande";
Capuccino.disponible = true;


var Latte = new Object();

Latte.nombre = "Latte";
Latte.precio = 65;
Latte.tamaño = "Grande";
Latte.disponible = true;


// ==========================
// ALIMENTOS
// ==========================

var SandwichJamon = new Object();

SandwichJamon.nombre = "Sandwich de Jamón";
SandwichJamon.precio = 75;
SandwichJamon.disponible = true;


var EnsaladaCeser = new Object();

EnsaladaCeser.nombre = "Ensalada César";
EnsaladaCeser.precio = 90;
EnsaladaCeser.disponible = true;


var Hamburguesa = new Object();

Hamburguesa.nombre = "Hamburguesa";
Hamburguesa.precio = 120;
Hamburguesa.disponible = true;


// ==========================
// PANADERÍA
// ==========================

var Croissant = new Object();

Croissant.nombre = "Croissant";
Croissant.precio = 35;
Croissant.disponible = true;


var DonaChocolate = new Object();

DonaChocolate.nombre = "Dona de Chocolate";
DonaChocolate.precio = 30;
DonaChocolate.disponible = true;


var Muffin = new Object();

Muffin.nombre = "Muffin de Vainilla";
Muffin.precio = 40;
Muffin.disponible = true;


// ==========================
// CATÁLOGO GENERAL
// ==========================

var catalogo = [
    ExpresAmericano,
    Capuccino,
    Latte,
    SandwichJamon,
    EnsaladaCeser,
    Hamburguesa,
    Croissant,
    DonaChocolate,
    Muffin
];


// ==========================
// MOSTRAR PRODUCTOS
// ==========================

function mostrarCatalogo() {

    console.log("===== CATÁLOGO =====");

    catalogo.forEach(function(producto) {

        console.log(
            "Nombre: " + producto.nombre +
            " | Precio: $" + producto.precio
        );

    });

}


// ==========================
// AGREGAR PRODUCTO
// ==========================

function agregarProducto(producto) {

    catalogo.push(producto);

    console.log("Producto agregado correctamente");

}


// ==========================
// ACTUALIZAR PRODUCTO
// ==========================

function actualizarProducto(nombreProducto, nuevosDatos) {

    var producto = catalogo.find(function(item) {
        return item.nombre === nombreProducto;
    });

    if (producto) {

        Object.assign(producto, nuevosDatos);

        console.log("Producto actualizado");

    } else {

        console.log("Producto no encontrado");

    }

}


// ==========================
// ELIMINAR PRODUCTO
// ==========================

function eliminarProducto(nombreProducto) {

    var indice = catalogo.findIndex(function(item) {
        return item.nombre === nombreProducto;
    });

    if (indice !== -1) {

        catalogo.splice(indice, 1);

        console.log("Producto eliminado");

    } else {

        console.log("Producto no encontrado");

    }
}


