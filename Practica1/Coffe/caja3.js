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

let ExpresAmericano = new Object();
ExpresAmericano.nombre = "Expres Americano";
ExpresAmericano.precio = 45;
ExpresAmericano.tamaño = "Mediano";
ExpresAmericano.disponible = true;

let Capuccino = new Object();
Capuccino.nombre = "Capuccino";
Capuccino.precio = 60;
Capuccino.tamaño = "Grande";
Capuccino.disponible = true;

let Latte = new Object();
Latte.nombre = "Latte";
Latte.precio = 65;
Latte.tamaño = "Grande";
Latte.disponible = true;

// ==========================
// ALIMENTOS
// ==========================

let SandwichJamon = new Object();
SandwichJamon.nombre = "Sandwich de Jamón";
SandwichJamon.precio = 75;
SandwichJamon.disponible = true;

let EnsaladaCeser = new Object();
EnsaladaCeser.nombre = "Ensalada César";
EnsaladaCeser.precio = 90;
EnsaladaCeser.disponible = true;

let Hamburguesa = new Object();
Hamburguesa.nombre = "Hamburguesa";
Hamburguesa.precio = 120;
Hamburguesa.disponible = true;

// ==========================
// PANADERÍA
// ==========================

let Croissant = new Object();
Croissant.nombre = "Croissant";
Croissant.precio = 35;
Croissant.disponible = true;

let DonaChocolate = new Object();
DonaChocolate.nombre = "Dona de Chocolate";
DonaChocolate.precio = 30;
DonaChocolate.disponible = true;

let Muffin = new Object();
Muffin.nombre = "Muffin de Vainilla";
Muffin.precio = 40;
Muffin.disponible = true;

// ==========================
// CATÁLOGO POR SECCIONES
// ==========================

const bebidas   = [ExpresAmericano, Capuccino, Latte];
const alimentos = [SandwichJamon, EnsaladaCeser, Hamburguesa];
const panaderia = [Croissant, DonaChocolate, Muffin];

// const porque este arreglo no se reasigna, solo se le agregan elementos
const todos = [ExpresAmericano, Capuccino, Latte,
               SandwichJamon, EnsaladaCeser, Hamburguesa,
               Croissant, DonaChocolate, Muffin];

// ==========================
// PEDIDO ACTUAL
// ==========================

// Arreglo donde se van guardando los productos que el cliente elige
const pedido = [];

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

    console.log("\n  0.  Cancelar pedido");
    console.log("  00. Terminar pedido y ver total");
}

// ==========================
// NOTIFICACIONES - CALLBACKS
// ==========================

// Callback que se ejecuta cuando el pedido esta listo
// Simula con setTimeout el tiempo de preparacion
// y avisa cuando el pedido ya puede recogerse
function notificarPedidoListo(nombre, callback) {
    console.log("\nPreparando tu pedido...");

    // setTimeout es un callback: 
    // "cuando pasen 2 segundos, ejecuta esto"
    setTimeout(function() {
        console.log("\nPedido listo! Pasa a recogerlo " + nombre + "!");
        callback(); // avisa que termino y cierra el programa
    }, 2000);
}

// Callback que se ejecuta cuando el pedido es cancelado
// Simula con setTimeout el proceso de cancelacion
// y se despide del cliente
function notificarPedidoCancelado(nombre, callback) {
    console.log("\nCancelando tu pedido...");

    // setTimeout es un callback:
    // "cuando pase 1 segundo, ejecuta esto"
    setTimeout(function() {
        console.log("\nPedido cancelado. Hasta pronto " + nombre + "!");
        callback(); // avisa que termino y cierra el programa
    }, 1000);
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
    const subtotal = pedido.reduce(function(acumulador, producto) {

        // PASO 2 - DESTRUCTURING
        // En lugar de escribir producto.precio,
        // extraemos "precio" directamente del objeto producto.
        // Es lo mismo pero mas corto y limpio.
        const { precio } = producto;

        // Suma el precio del producto actual al acumulador
        return acumulador + precio;

    }, 0); // <- el acumulador empieza en 0

    // -------------------------------------------------
    // PASO 3 - CALCULAR IVA Y TOTAL
    // Con el subtotal ya calculado, sacamos el IVA
    // y sumamos todo para obtener el total final.
    // -------------------------------------------------
    const iva   = subtotal * 0.16;
    const total = subtotal + iva;

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
        const { nombre: nombreProducto, precio } = producto;

        console.log("  " + nombreProducto + " - $" + precio);
    });

    console.log("\n  Subtotal: $" + subtotal.toFixed(2));
    console.log("  IVA 16%:  $" + iva.toFixed(2));
    console.log("  Total:    $" + total.toFixed(2));

    // Llama al callback de pedido listo
    // cuando termina de avisar, cierra el programa
    notificarPedidoListo(nombre, function() {
        rl.close();
    });
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
    const producto = todos.find(function(item) {
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
    const indice = todos.findIndex(function(item) {
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

// Funcion que se repite hasta que el cliente termine o cancele su pedido
function elegirProducto(nombre) {
    mostrarMenu();

    rl.question("\nElige el numero de tu producto: ", function(opcion) {

        // primero verificamos si es "00" como texto ANTES de convertir a numero
        // porque parseInt("00") = 0 y confundiria con la opcion de cancelar
        if (opcion.trim() === "00") {
            if (pedido.length === 0) {
                console.log("\nNo elegiste ningun producto.");
                elegirProducto(nombre);
            } else {
                mostrarTotal(nombre);
            }

        } else {
            const seleccion = parseInt(opcion);

            if (seleccion === 0) {
                // Llama al callback de cancelacion
                // cuando termina de avisar, cierra el programa
                notificarPedidoCancelado(nombre, function() {
                    rl.close();
                });

            } else if (seleccion >= 1 && seleccion <= todos.length) {
                // Agrega el producto elegido al pedido
                const producto = todos[seleccion - 1];
                pedido.push(producto);
                console.log("\nAgregado: " + producto.nombre + " - $" + producto.precio);
                console.log("Productos en tu pedido: " + pedido.length);

                // Vuelve a preguntar para agregar mas
                elegirProducto(nombre);

            } else {
                console.log("\nOpcion no valida, intenta de nuevo.");
                elegirProducto(nombre);
            }
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