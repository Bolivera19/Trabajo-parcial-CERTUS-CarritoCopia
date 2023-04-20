/* Obtener referencia a todos los botones */
let botones = window.document.querySelectorAll("#catalogo > article > button");

/* Agregar el escucha del evento Click, ejecutar la función */
botones.forEach(element => {
  element.addEventListener("click", agregarCarrito);
});

/* Método para conseguir los datos de mi producto */
function agregarCarrito(producto){
  /* conseguí los datos de mi producto */
  let tituloProducto = producto.target.parentElement.querySelector("h3");
  let precioProducto = producto.target.parentElement.querySelector("p");
  let imagenProducto = producto.target.parentElement.querySelector("picture");
  /* Ahora colocar en el modal */
  let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");

/* Condicional para saber si esta vacio */
if (modalCuerpo.querySelector("p").innerHTML == "Su carrito está actualmente vacio."){
  modalCuerpo.innerHTML = "";
}
modalCuerpo.innerHTML = "<h3>"+tituloProducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p>";

/* avisar que se agrego al carrito */
alert("Se agregó correctamente el producto.");


}




