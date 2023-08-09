// REPASO EJERCICIOS CLASE PASADA

//Los dos primeros ejercicios los explique la clase pasada
// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// function puedeVerPelicula(edad, tieneAutorizacion){
//     if(edad >= 15){
//         console.log("puede verla")
//     } 
//     else if(tieneAutorizacion === true){
//         console.log("puede verla por aut")
//     }
//     else {
//         console.log("NO PUEDE VERLA")
//     }
    
// }

// puedeVerPelicula(12, true)  // puede verla por aut
// puedeVerPelicula(15, false) // puede verla
// puedeVerPelicula(11, false) // NO PUEDE VERLA
// puedeVerPelicula(18, true) // puede verla


// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)
//                    10      3      20
// function estaEnRango(valor, minimo, maximo){
//     if(valor > minimo && valor < maximo ){
//         console.log(true)
//     } 
//     else {
//         console.log(false)
//     }

// }

// estaEnRango(10, 3, 20) // true
// estaEnRango(3, 3, 20)   // false
// estaEnRango(20, 3, 20)  // false
// estaEnRango(100, 3, 20) // false
// estaEnRango(-20, 3, 20) // false
// estaEnRango(4, 3, 20) // true


// puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// function puedeAvanzar(string){
//     if(string === "verde"){
//         console.log(true)
//     }
//     else if(string === "amarillo" || string === "rojo"){
//         console.log(false)
//     }
//     else{
//         console.log('Error: color de semáforo inválido')
//     }
// }

// puedeAvanzar('verde')     // true
// puedeAvanzar('amarillo')  // false
// puedeAvanzar('rojo')      // false
// puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// function esVocal(letra) {
//     if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// esVocal('a') // true
// esVocal('n') // false

// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// function esConsonante(letra){
//     if(letra !== "a" && letra !== "e" && letra !== "i" && letra !== "o" && letra !== "u"){
//                 console.log(true)
//             }
//             else{
//                 console.log(false)
//             }
// }

// esConsonante('a') // false
// esConsonante('n') // true

// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// function puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos){
//     if(pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// puedeRenovarCarnet(true, true, true)    // false
// puedeRenovarCarnet(true, true, false)   // false
// puedeRenovarCarnet(true, false, true)   // true
// puedeRenovarCarnet(true, false, false)  // false
// puedeRenovarCarnet(false, true, true)   // false
// puedeRenovarCarnet(false, true, false)  // false
// puedeRenovarCarnet(false, false, true)  // false
// puedeRenovarCarnet(false, false, false) // false


// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// function puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada) {
//     if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true){
//         console.log (true)
//     } 
//     else{
//         console.log (false)
//     }
// }
// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false
// puedeGraduarse(80, 45, true)  // false
// puedeGraduarse(80, 45, false) // false
// puedeGraduarse(65, 50, true)  // false
// puedeGraduarse(33, 55, false) // false
// puedeGraduarse(42, 45, true)  // false
// puedeGraduarse(28, 45, false) // false

// esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// function esParOImpar(numero) {
//     if(numero%2 === 0){
//         console.log("par")
//     }
//     else{
//         console.log("impar")
//     }
// }

// esParOImpar(2) //par
// esParOImpar(3) //impar




