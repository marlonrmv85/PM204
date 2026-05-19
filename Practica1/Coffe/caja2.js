// Caja en la cual se va a mostrar los pedidos de los clientes los costos y los totales
// Importa el módulo readline que viene incluido en Node.js.
// Es como "activar" la herramienta que permite leer lo que el usuario escribe en la terminal.
// Crea la interfaz de comunicación con el usuario:
// input: process.stdin → escucha lo que el usuario escribe (teclado)
// output: process.stdout → muestra texto en la terminal (pantalla)
// rl es el nombre que le damos a esa interfaz para usarla después

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
// CATÁLOGO POR SECCIONES
// ==========================

var bebidas   = [ExpresAmericano, Capuccino, Latte];
var alimentos = [SandwichJamon, EnsaladaCeser, Hamburguesa];
var panaderia = [Croissant, DonaChocolate, Muffin];

var todos = [ExpresAmericano, Capuccino, Latte,
             SandwichJamon, EnsaladaCeser, Hamburguesa,
             Croissant, DonaChocolate, Muffin];

// ==========================
// PEDIDO ACTUAL
// ==========================

// Arreglo donde se van guardando los productos que el cliente elige
var pedido = [];

// ==========================
// MOSTRAR MENU SECCIONADO
// ==========================

function mostrarMenu() {
    console.log("\n         MENU CAFECITO        ");

    console.log("\n --- BEBIDAS ---");
    bebidas.forEach(function(producto, indice) {
        console.log("  " + (indice + 1) + ". " + producto.nombre + " - $" + producto.precio);
    });

    console.log("\n --- ALIMENTOS ---");
    alimentos.forEach(function(producto, indice) {
        console.log("  " + (indice + 4) + ". " + producto.nombre + " - $" + producto.precio);
    });

    console.log("\n --- PANADERIA ---");
    panaderia.forEach(function(producto, indice) {
        console.log("  " + (indice + 7) + ". " + producto.nombre + " - $" + producto.precio);
    });

    console.log("\n  0. Terminar pedido y ver total");
}

// ==========================
// MOSTRAR TOTAL
// ==========================

function mostrarTotal(nombre) {

    // -------------------------------------------------
    // PASO 1 - REDUCE
    // reduce recorre todo el arreglo "pedido" y va
    // acumulando la suma de los precios uno por uno.
    // El 0 al final es el valor inicial del acumulador,
    // es decir, la suma empieza desde cero.
    // -------------------------------------------------
    var subtotal = pedido.reduce(function(acumulador, producto) {

        // PASO 2 - DESTRUCTURING
        // En lugar de escribir producto.precio,
        // extraemos "precio" directamente del objeto producto.
        // Es lo mismo pero mas corto y limpio.
        var { precio } = producto;

        // Suma el precio del producto actual al acumulador
        return acumulador + precio;

    }, 0); // <- el acumulador empieza en 0

    // -------------------------------------------------
    // PASO 3 - CALCULAR IVA Y TOTAL
    // Con el subtotal ya calculado, sacamos el IVA
    // y sumamos todo para obtener el total final.
    // -------------------------------------------------
    var iva   = subtotal * 0.16;       // 16% de IVA
    var total = subtotal + iva;        // total = subtotal + IVA

    // -------------------------------------------------
    // PASO 4 - MOSTRAR RESUMEN DEL PEDIDO
    // Recorremos el pedido con forEach y usamos
    // destructuring para extraer nombre y precio
    // de cada producto de forma mas limpia.
    // -------------------------------------------------
    console.log("\n --- TU PEDIDO ---");

    pedido.forEach(function(producto) {

        // Destructuring: extraemos nombre y precio del objeto
        // en lugar de escribir producto.nombre y producto.precio
        var { nombre, precio } = producto;

        console.log("  " + nombre + " - $" + precio);
    });

    // toFixed(2) muestra solo 2 decimales en los números
    console.log("\n  Subtotal: $" + subtotal.toFixed(2));
    console.log("  IVA 16%:  $" + iva.toFixed(2));
    console.log("  Total:    $" + total.toFixed(2));
    console.log("\nGracias " + nombre + "! Tu pedido estara listo en breve.");
}

// ==========================
// AGREGAR PRODUCTO
// ==========================

// Agrega un producto nuevo al catalogo
function agregarProducto(producto) {
    todos.push(producto);
    console.log("Producto agregado correctamente");
}

// ==========================
// ACTUALIZAR PRODUCTO
// ==========================

// Busca el producto por nombre y actualiza sus datos
function actualizarProducto(nombreProducto, nuevosDatos) {
    var producto = todos.find(function(item) {
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

// Busca el producto por nombre y lo elimina del catalogo
function eliminarProducto(nombreProducto) {
    var indice = todos.findIndex(function(item) {
        return item.nombre === nombreProducto;
    });

    if (indice !== -1) {
        todos.splice(indice, 1);
        console.log("Producto eliminado");
    } else {
        console.log("Producto no encontrado");
    }
}

// ==========================
// ELEGIR PRODUCTOS
// ==========================

// Funcion que se repite hasta que el cliente escriba 0 para terminar
function elegirProducto(nombre) {
    mostrarMenu();

    rl.question("\nElige el numero de tu producto: ", function(opcion) {
        var seleccion = parseInt(opcion);

        if (seleccion === 0) {
            if (pedido.length === 0) {
                console.log("\nNo elegiste ningun producto.");
            } else {
                mostrarTotal(nombre);
            }
            rl.close();

        } else if (seleccion >= 1 && seleccion <= todos.length) {
            // Agrega el producto elegido al pedido
            var producto = todos[seleccion - 1];
            pedido.push(producto);
            console.log("\nAgregado: " + producto.nombre + " - $" + producto.precio);
            console.log("Productos en tu pedido: " + pedido.length);

            // Vuelve a preguntar para agregar mas
            elegirProducto(nombre);

        } else {
            console.log("\nOpcion no valida, intenta de nuevo.");
            elegirProducto(nombre);
        }
    });
}

// ==========================
// PROGRAMA PRINCIPAL
// ==========================

// Imprime un mensaje en la terminal. No espera nada del usuario, solo muestra el texto.
console.log("Hola Bienvenidos a Cafecito");

// Muestra una pregunta al usuario y espera a que escriba algo y presione Enter.
// "Cual es tu nombre?" es el texto que se muestra
// function(nombre) cuando el usuario escribe y presiona Enter,
// lo que escribio se guarda automaticamente en la variable nombre
rl.question("\nCual es tu nombre? ", function(nombre) {
    console.log("\nHola " + nombre + "! Que vas a ordenar hoy?");

    // Inicia el proceso de eleccion de productos
    elegirProducto(nombre);
});