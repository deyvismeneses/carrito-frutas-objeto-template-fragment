 const carritoId = document.getElementById("carritoId");
 const templateId = document.getElementById("templateId");
 const fragment = document.createDocumentFragment();
 const botones = document.querySelectorAll(".card .btn");
// array
 const carritoObjeto = [];

 const agregarAlCarrito = (e) => {
     console.log(e.target.dataset.frutas);

     const producto = {
       titulo: e.target.dataset.frutas,
       id: e.target.dataset.frutas,
       cantidad: 1,
   };

   const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

    console.log(indice);

    if(indice === -1){
        carritoObjeto.push(producto)
    } else {
        carritoObjeto[indice].cantidad++;
    }
console.log(carritoObjeto)
    //  if(carritoObjeto.hasOwnProperty(producto.titulo)){
    //      producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    //  };

    //  carritoObjeto[producto.titulo] = producto;
    //  // console.log(carritoObjeto)

      pintarCarrito(carritoObjeto);
 };

 const pintarCarrito = (array) => {
    carritoId.textContent = "";
     // console.log("pintar carrito", producto);//     carritoId.textContent = "";
     array.forEach((item) => {
          const clone = templateId.content.firstElementChild.cloneNode(true);
          clone.querySelector(".lead").textContent = item.titulo;
          clone.querySelector(".badge").textContent = item.cantidad;

          fragment.appendChild(clone);
     });
     carritoId.appendChild(fragment);
 };

 botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));







// // Explicando el metodo >>Map<< video 370

// const frutas = ["🍌", "🍏", "🍓"];

// ////const nuevoArray = frutas.map((fruta) => fruta);
// //     return item
// // })

// ////console.log(nuevoArray);

// const copiaArray = frutas //da el mismo resultado que haciendo la funcion flecha

// frutas.push("🍉", "🍒")

// console.log(copiaArray)

// // otro ejemplo con el map
// const usersMap = [
//     { name: "John", age: 34 },
//     { name: "Amy", age: 20 },
//     { name: "camperCat", age: 10 },
// ];

// const names = usersMap.map((user) => user.name) // como es la propiedad de un objeto lo podemos devolver.
// console.log(names);

// // otro ejemplo
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosPorDos = numeros.map((numero) => numero * 4);

// console.log(numerosPorDos);

// // iniciamos con la explicacion del metodo filter video 371

// const usersFilter = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Juan", age: 58 },
//     { uid: 3, name: "Amy", age: 20 },
//     { uid: 4, name: "Carla", age: 29 },
//     { uid: 5, name: "CamperCat", age: 10 },
//     { uid: 6, name: "Pedro", age: 30 },
//     { uid: 7, name: "Luis", age: 15 },
// ];
// //El filtar lo utilizamos para filtrar un cierto elemento, por ejemplo si queremos solamente observar mayores de 30 a#os porque existe una promocion en la pagina web para mayores de 30 a#os
// const mayoresA30 = usersFilter.filter((user) => user.age > 30);
// const menoresA30 = usersFilter.filter((user) => user.age < 30);
// const nameUsers = usersFilter.filter((user) => user.name);
// console.log(mayoresA30);
// console.log(menoresA30);
// console.log(nameUsers);

// // pero si queremos eliminar algun elemnto del array
// const eliminarUid = usersFilter.filter((user) => user.uid !== 4);
// const usersUid = usersFilter.filter((user) => user.uid === 4);
// console.log(usersUid);

// // Explicamos ahora el metodo find con el video 372

// const usersFind = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Juan", age: 58 },
//     { uid: 3, name: "Amy", age: 20 },
//     { uid: 4, name: "Carla", age: 29 },
//     { uid: 5, name: "CamperCat", age: 10 },
//     { uid: 6, name: "Pedro", age: 30 },
//     { uid: 7, name: "Luis", age: 15 },
// ];

// const carla = usersFind.find((user) => user.uid === 4); //vamnos a buscar a carla
// console.log(carla);

// // aplicamos destructuring para solo ver una propiedad del objeto que esta dentro del Array, por ejemplo si solo quremos ver l edad de carla

// const { age } = usersFind.find((user) => user.uid === 6);
// console.log(age);
// // siempre tenemos que poner un valor valido en el find al utilizar destructuring porque si no da error

// // vamos ahora con el some para verificar si al menos un elemento del array cumple con la condicion, y devuelve un true verdadero o un false falso

// const usersSome = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Juan", age: 58 },
//     { uid: 3, name: "Amy", age: 20 },
//     { uid: 4, name: "Carla", age: 29 },
//     { uid: 5, name: "CamperCat", age: 10 },
//     { uid: 6, name: "Pedro", age: 30 },
//     { uid: 7, name: "Luis", age: 15 },
// ];

// const existe = usersSome.some((user) => user.uid === 3);
// const existe1 = usersSome.some((user) => user.uid === 8);
// console.log(existe);
// console.log(existe1);

// // Vamos ahora con findIndex el cual devuelve el indice del primer elemento que cumpla con la funcion de flecha proporcionada, es decir yo selecionio el uid 6 y me devuelve el 5

// const usersFindIndex = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Juan", age: 58 },
//     { uid: 3, name: "Amy", age: 20 },
//     { uid: 4, name: "Carla", age: 29 },
//     { uid: 5, name: "CamperCat", age: 10 },
//     { uid: 6, name: "Pedro", age: 30 },
//     { uid: 7, name: "Luis", age: 15 },
// ];

// const existe2 = usersFindIndex.findIndex((user) => user.uid === 2);
// const existe3 = usersFindIndex.findIndex((user) => user.uid === 6);
// const existe4 = usersFindIndex.findIndex((user) => user.uid === 9);
// const existe5 = usersFindIndex.findIndex((user) => user.uid === 7);
// console.log(existe2);
// console.log(existe3);
// console.log(existe4);
// console.log(usersFindIndex[existe5]);

// // iniciamos con el metodo slice el cual devuelve una copia de una parte del array dentro de un nuevo array

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// //             0     [1      2]        3
// const newArray = arr.slice(0, 3);
// const newArray1 = arr.slice(1, 3);
// const newArray2 = arr.slice(0, 2);

// console.log(newArray);
// console.log(newArray1);
// console.log(newArray2);

// // El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3); //juntamos los array concatenacion

// // Spread syntax (opens new window): permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.

// const array1A = ["a", "b", "c"];
// const array2A = ["d", "e", "f"];
// const array3A = [...array1A, ...array2A];
// // ...array1 esto se llama spread operaiton
// console.log(array3A);

// // reduce (opens new window): El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// ////Sumar todos los números:

// const numerosReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumaTodos = numerosReduce.reduce((acc, valorActual) => acc + valorActual);
// // acc = acumulador
// console.log(sumaTodos);

// // Aplanar matrices anidadas #01:

// const arrayNumeros = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
// ];

// const soloNumeros = arrayNumeros.reduce( //Ccon reduce
//     (acc, current) => acc.concat(current)
// );

// console.log(soloNumeros);

// // Aplanar matrices anidadas #02:
// const flatSingle = [].concat(...arrayNumeros); //con catencaion
// console.log(flatSingle);

// //Aplanar matrices anidadas #03: flat()(opens new window)
// //crea una nueva matriz
// const flatSingle1 = arrayNumeros.flat(); //con flat 
// console.log(flatSingle);

// // split: El método split() divide un objeto de tipo String en un array, mediante un separador.

// const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const arrayMeses = cadenaMeses.split(",");
// console.log(arrayMeses);

// // join (opens new window): el método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
// const cadenaMesesA = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const arrayMesesA = cadenaMesesA.split("-");
// console.log(arrayMeses);

// const nuevamenteString = arrayMesesA.join(",");
// console.log(nuevamenteString);