
console.log("Hola mundo JS desde el servidor")  



//promedio 2 variables 
let edad1=11
let edad2=33
console.log("edad promedio")
console.log((edad1+edad2)/2)

//medir el timpo de procesos 

console.time("mi proceso")
    for(let i=0; i<1000000; i++){}
console.timeEnd("miProceso")


// objetos tipos tabla
let usuarios=[
    {nombre:"marlon",edad:"21"},
    {nombre:"mendieta",edad:"21"},
]
console.table(usuarios)


let frutas = ["Manzana", "Banana"];

console.log(frutas.length);