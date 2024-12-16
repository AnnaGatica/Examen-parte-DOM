let boton = document.querySelector('#boton')
let titulo = document.querySelector('#titulo')
let imagen = document.querySelector('#imagen')

boton.onclick = function () {
    titulo.textContent = "¡Feliz Navidad y Próspero Año Nuevo!";
    titulo.style.color = "red";
    imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbr0psbOgJYD7YEWVJewy2lrlHp6twkUmTcw&s'
    imagen.alt = "Muñeco de Nieve";
}
