window.onload = function() {
    // setInterval(ocultarChat, 100);
     ocultarChat()
  }
  let ancho = document.documentElement.clientWidth;
// var ancho = screen.width;
 function ocultarChat(){
    if (ancho < 768) { 
         listachats = document.querySelector('#collapseExample');
        listachats.classList.remove('show');
      }
  }

  function nuevoMensaje(){
    borrarClase = document.querySelector('#no-leido');
    borrarClase.classList.remove('fw-bolder');



    spanElement = document.querySelector("#no-leido span");
   parentElement = spanElement.parentNode;
   parentElement.removeChild(spanElement);
  }