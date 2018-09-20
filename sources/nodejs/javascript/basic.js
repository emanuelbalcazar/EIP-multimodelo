/**
 * Conceptos Basicos de Javascript.
 * Se pueden probar en la consola de NodeJS.
 */

/**
 * SINTAXIS BASICA
 * Comprensión de declaraciones, nombres de variables, espacios en blanco,
 * y otras sintaxis básicas de JavaScript.
 */
var x;
var y = 2;
var z = 3 + 2;

const t = 1234; // declaracion de una constante, su valor no se puede modificar.

// declaracion de cadenas.
var hello = 'hello';

// imprime el valor de la variable "hello"
console.log(hello);



/**
 * OPERADORES BASICOS
 * Los operadores básicos permiten manipular valores.
 */
var foo = 'hello';
var bar = 'world';

console.log(foo + ' ' + bar);

// multiplicacion y division.
var a = 2 * 3;
var b = 10 / 2;

// incrementacion y decrementacion.
var i = 1;
var j = i++;
var k = ++i;

// suma vs concatenacion.
var foo = 1;
var bar = '2';
console.log(foo + bar); // error: la consola muestra un 12.

var foo = 1;
var bar = '2';

// el constructor 'Number' obliga a la cadena comportarse como un número.
console.log(foo + Number(bar));  // la consola de depuración muestra 3



/**
 * OPERADORES LOGICOS
 * Los operadores lógicos permiten evaluar una serie de operandos utilizando operaciones AND y OR.
 */
var foo = 1;
var bar = 0;

// El operador || (OR lógico) devuelve el valor del primer operando, si éste es verdadero.
foo || bar // devuelve 1, el cual es verdadero (true)

// El operador && (AND lógico) devuelve el valor del primer operando si éste es falso
foo && bar // devuelve 0, el cual es falso (false)



/**
 * OPERADORES DE COMPARACION
 * Los operadores de comparación permiten comprobar si determinados valores son equivalentes o idénticos.
 */
var foo = 1;
var bar = 0;
var baz = '1';
var bim = 2;

foo == bar; // devuelve falso (false)
foo != bar; // devuelve verdadero (true)
foo == baz; // devuelve verdadero (true); tengan cuidado!

foo === baz; // devuelve falso (false)
foo !== baz; // devuelve verdadero (true)
foo === parseInt(baz); // devuelve verdadero (true)

foo > bim;   // devuelve falso (false)
bim > baz;   // devuelve verdadero (true)
foo <= baz;  // devuelve verdadero (true)



/**
 * CODIGO CONDICIONAL
 * A veces se desea ejecutar un bloque de código bajo ciertas condiciones.
 * Las estructuras de control de flujo — a través de la utilización de las declaraciones if y else permiten hacerlo
 */
var foo = true;
var bar = false;

if (bar) {
    // este código NO se ejecutará
    console.log('bar!');
}

if (!bar) {
    // este código SI se ejecutará
    console.log('!bar!');
}



/**
 * ELEMENTOS VERDADEROS Y FALSOS
 * Para controlar el flujo adecuadamente, es importante entender qué tipos de valores son "verdaderos"
 * y cuales "falsos". A veces, algunos valores pueden parecer una cosa pero al final terminan siendo otra.
 */

//  valores que devuelven verdadero (true)
'0';          // una cadena de texto cuyo valor sea 0
'any string'; // cualquier cadena
[];           // un array vacío
{ };           // un objeto vacío
1;            // cualquier número distinto a cero

// valores que devuelven falso (false)
0;
'';        // una cadena vacía
NaN;       // la variable JavaScript "not-a-number" (No es un número)
null;      // un valor nulo
undefined; // tenga cuidado -- indefinido (undefined) puede ser redefinido



/**
 * VARIABLES CONDICIONALES
 * A veces se desea establecer el valor de una variable dependiendo de cierta condición.
 * Para hacerlo se puede utilizar una declaración if/else, sin embargo en muchos casos es más conveniente utilizar el operador ternario.
 * [Definición: El operador ternario evalúa una condición;
 * si la condición es verdadera, devuelve cierto valor, caso contrario devuelve un valor diferente.]
 */
// establecer a foo igual a 1 si bar es verdadero;
// caso contrario, establecer a foo igual a 0
var bar = true;
var foo = bar ? 1 : 0;



/**
 * BUCLES
 * Los bucles (en inglés loops) permiten ejecutar un bloque de código un determinado número de veces.
 */
// muestra en la consola 'intento 0', 'intento 1', ..., 'intento 4'
for (var i = 0; i < 5; i++) {
    console.log('intento ' + i);
}

var i = 0;

while (i < 10) {
    // Este bloque de código se ejecutará 100 veces
    console.log('Actualmente en ' + i);
    i++; // incrementa la variable i
}



/**
 * ARRAYS
 * Los arrays (en inglés arrays) son listas de valores con índice-cero (en inglés zero-index), es decir,
 * que el primer elemento del array está en el índice 0.
 * Estos son una forma práctica de almacenar un conjunto de datos relacionados (como cadenas de caracteres),
 * aunque en realidad, un array puede incluir múltiples tipos de datos, incluso otros arrays.
 */
var myArray = ['hello', 'world'];

var myArray = ['hello', 'world', 'foo', 'bar'];
console.log(myArray[3]);   // muestra en la consola 'bar'

var myArray = ['hello', 'world'];
console.log(myArray.length);   // muestra en la consola 2

var myArray = ['hello', 'world'];
myArray[1] = 'changed'; // cambia el valor de un item del array

var myArray = ['hello', 'world'];
myArray.push('new'); // añade un nuevo item al array

// trabajando con arrays...
var myArray = ['h', 'e', 'l', 'l', 'o'];
var myString = myArray.join('');   // 'hello'
var mySplit = myString.split('');  // [ 'h', 'e', 'l', 'l', 'o' ]



/**
 * OBJETOS
 * Los objetos son elementos que pueden contener cero o más conjuntos de pares de nombres claves y valores asociados a dicho objeto.
 * Los nombres claves pueden ser cualquier palabra o número válido.
 * El valor puede ser cualquier tipo de valor: un número, una cadena, un array, una función, incluso otro objeto.
 */

var myObject = {
    sayHello: function () {
        console.log('hello');
    },
    myName: 'Rebecca'
};

// se llama al método sayHello, el cual muestra en la consola 'hello'
myObject.sayHello();

// se llama a la propiedad myName, la cual muestra en la consola 'Rebecca'
console.log(myObject.myName);



/**
 * FUNCIONES
 * Las funciones contienen bloques de código que se ejecutaran repetidamente.
 * A las mismas se le pueden pasar argumentos, y opcionalmente la función puede devolver un valor.
 */

function foo() { /* hacer algo */ }

var foo = function () { /* hacer algo */ }

// utilizacion de una funcion simple.
var greet = function (person, greeting) {
    var text = greeting + ', ' + person;
    console.log(text);
};

greet('Rebecca', 'Hello');  // muestra en la consola 'Hello, Rebecca'


// utilizacion de una funcion que devuelve un valor.
var greet = function (person, greeting) {
    var text = greeting + ', ' + person;
    return text;
};

console.log(greet('Rebecca', 'hello'));


// utilizacion de una funcion que devuelve otra funcion.
// la función devuelve 'Hello, Rebecca',
// la cual se muestra en la consola
var greet = function (person, greeting) {
    var text = greeting + ', ' + person;
    return function () { console.log(text); };
};

var greeting = greet('Rebecca', 'Hello');
greeting();  // se muestra en la consola 'Hello, Rebecca'



/**
 * FUNCIONES ANONIMAS (O LAMBDAS)
 * Son equivalentes a las funciones comunes solo que no se declaran con la palabra reservada "function".
 * Se suelen utilizar para funciones que se declaran en el "momento".
 */

var div;

div = function (a, b) {
    return a / b;
}

div = (a, b) => {
    return a / b;
}

console.log(div(10, 2));

/**
 * CALLBACK
 * O tambien llamadas funciones de retrollamada, se pasan como parametro a otra funcion que luego la ejecutará
 * cuando termine su ejecución.
 * */

// declaro la funcion que se va a ejecutar cuando la multiplicacion se termine de realizar.
// los callback siempre siguen el patron de error - resultado
var print = function (error, result) {
    console.log('[print] - Despues de multiplicar:', result);
}

// defino la funcion que quiero ejecutar, ahora ademas de los operandos recibe una funcion de retorno.
var mult = function (a, b, callback) {
    var result = a * b;
    callback(false, result);
}

// llamo a la funcion multiplicar y le paso la funcion de retorno.
mult(2, 5, print);

// o tambien puedo...
mult(2, 6, function (error, result) {
    console.log('[mult] - Despues de multiplicar:', result);
});

// ulala señor frances, funciones anonimas, incorporadas recientemente en javascript e incluso en java.
mult(2, 7, (error, result) => {
    console.log('[mult] - Despues de multiplicar:', result);
});
