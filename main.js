
// Mostrar colores -------------
var ulHeaderColores = document.getElementById("ulHeader__colores");
var colores = document.getElementById("colores");


ulHeaderColores.addEventListener("click", () => {
 colores.style.display = "block";
})

ulHeaderColores.addEventListener("dblclick", () => {
    colores.style.display = "none";
})

// fin --------------

//----------- texto animado --------------

var designer = document.getElementById("designer");

const texLoand = () => {
    setTimeout(() => {
        designer.textContent = "Donaxi";
    }, 0)
    setTimeout(() => {
        designer.textContent = "Jimenez";
    }, 4000)
    setTimeout(() => {
        designer.textContent = "Cujia";
    }, 8000)
}

texLoand();
setInterval(texLoand, 12000)

// fin --------------

// Cambiar colores -------------------
var cAmarillo = document.getElementById("c__amarillo");
var cAzul = document.getElementById("c__azul");
var cRojo = document.getElementById("c__rojo");
var cVerde = document.getElementById("c__verde");


var tituloSegundoColor = document.getElementById("titulo__segundoColor");
var ulHeaderColores = document.getElementById("ulHeader__colores");
var fondoSaludo = document.getElementById("fondo__saludo");
var hello = document.getElementById("hello");
var designer = document.getElementById("designer");
var soyHello = document.getElementById("soy__hello");
var soyHelloP = document.getElementById("soy__helloP");
var circuloReproductor = document.getElementById("circulo__reproductor");
var fotoReproducir = document.getElementById("foto__reproducir");
var spanMe = document.getElementById("span__Me");
var sobreMiMore = document.getElementById("sobreMi__More");
var sobreMiP = document.getElementById("sobreMi__P");



function CambiarColor__Amarillo(){
    tituloSegundoColor.style.color = "yellow";
    hello.style.color = "black";
    fondoSaludo.style.backgroundColor = "yellow";
    designer.style.color = "yellow";
    soyHello.style.backgroundColor = "yellow";
    soyHelloP.style.color = "black";
    circuloReproductor.style.backgroundColor = "yellow";
    fotoReproducir.src = "./imagenes/boton-reproducir-negro.png";
    spanMe.style.color = "yellow";
    sobreMiMore.style.backgroundColor = "yellow";
    sobreMiP.style.color = "black";
}   

function CambiarColor__Azul(){
    tituloSegundoColor.style.color = "blue";
    hello.style.color = "black";
    fondoSaludo.style.backgroundColor = "blue";
    designer.style.color = "blue";
    soyHello.style.backgroundColor = "blue";
    soyHelloP.style.color = "black";
    circuloReproductor.style.backgroundColor = "blue";
    fotoReproducir.src = "./imagenes/boton-reproducir-negro.png";
    spanMe.style.color = "blue";
    sobreMiMore.style.backgroundColor = "blue";
    sobreMiP.style.color = "black";
}

cAmarillo.addEventListener("click", () => {
    CambiarColor__Amarillo()
    colores.style.display = "none";

})

cAzul.addEventListener("click", () => {
    CambiarColor__Azul()
    colores.style.display = "none";
})

// Fin -------------