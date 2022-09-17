const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
 const templateCard = document.getElementById("templateCard").content
 const templateFooter = document.getElementById("templateFooter").content
 const templateCarrito = document.getElementById("templateCarrito").content
 const fragment = document.createDocumentFragment()
 let carrito = {} //colocamos let por let si se puede sobrescribir y estamos creando un objeto vacio {} con las llaves sin valor dentro

 document.addEventListener("DOMContentLoaded", () => {
     fetchData()
 })
 cards.addEventListener("click", e => {
     addCarrito(e)
 })

 const fetchData = async () => {
     try {
         const res = await fetch('api.json')
         const data = await res.json()
//         // console.log(data)
         pintarCards(data)
     } catch (error) {
//         // console.log(error)
     }
 }

 const pintarCards = data => {
     data.forEach(producto => {
         templateCard.querySelector("h5").textContent = producto.title
         templateCard.querySelector("p").textContent = producto.precio
         templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl)
         templateCard.querySelector(".btn-dark").dataset.id = producto.id

         const clone = templateCard.cloneNode(true)
         fragment.appendChild(clone)
     })
 cards.appendChild(fragment)
 }

 const addCarrito = e => {
     // console.log(e.target) //prueba
     // console.log(e.target.classList.contains("btn-dark"))//prueba
     if (e.target.classList.contains("btn-dark")){
     // console.log(e.targe.parentElement) //prueba
         setCarrito(e.target.parentElement)
     }
     e.stopPropagation() // nos sirve para detener cualquier otro evento que se pueda generar en nuestro cards donde se esta haciendo el click
 }

 const setCarrito = objeto => {
     const producto = {
         id: objeto.querySelector(".btn-dark").dataset.id,
         title: objeto.querySelector("h5").textContent,
         precio: objeto.querySelector("p").textContent,
         cantidad: 1
     }
     if(carrito.hasOwnProperty(producto.id)){
         producto.cantidad = carrito[producto.id].cantidad + 1
     }
     carrito[producto.id] = {...producto} //los tres puntos significa que estamos adquiriendo la informacion del objeto y estamos haciendo una copia
     // console.log(producto) //primero pruebaproducto
     // console.log(carrito) //despues pruebacarrito
     pintarCarrito()
 }
 const pintarCarrito = () => {
     console.log(carrito) //prueba
     Object.values(carrito).forEach(producto => {
         templateCarrito.querySelector("th").textContent = producto.title
         templateCarrito.querySelectorAll("td")[0].textContent = producto.cantidad
         templateCarrito.querySelector(".btn-info").dataset.id = producto.id
         templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
         templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio
         const clone = templateCarrito.cloneNode(true)
         fragment.appendChild(clone)
         })
         items.appendChild(fragment)
 }