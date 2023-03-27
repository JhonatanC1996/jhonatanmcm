let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === '../../1/2/3/bote.jpg') {
      miImage.setAttribute('src','images/sombrero.jpg');
    } else {
      miImage.setAttribute('src', '../../1/2/3/bote.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'El Bombuscaro is genial, ' + miNombre;
    }
  }

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'El Bombuscaro es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
