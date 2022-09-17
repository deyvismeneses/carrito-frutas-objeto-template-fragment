const carritoId = document.getElementById("carritoId");
const templateId = document.getElementById("templateId");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.frutas);

    const producto = {
        titulo: e.target.dataset.frutas,
        id: e.target.dataset.frutas,
        cantidad: 1
    };

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    };

    carritoObjeto[producto.titulo] = producto;
    // console.log(carritoObjeto)
    pintarCarrito();
};

const pintarCarrito = () => {
    // console.log("pintar carrito", producto);
    carritoId.textContent = "";
    Object.values(carritoObjeto).forEach(item => {
         const clone = templateId.content.firstElementChild.cloneNode(true);
         clone.querySelector(".lead").textContent = item.titulo;
         clone.querySelector(".badge").textContent = item.cantidad;

         fragment.appendChild(clone);
    });
    carritoId.appendChild(fragment);
};

botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));