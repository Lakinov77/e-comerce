var imagen = document.getElementById("firstIMG");
var cantidad = 0;
const cart = document.getElementById("cart");
const cartNumber = document.getElementById("new")
var elemento = document.getElementById("cantidad");

const producto = document.getElementById("producto");
const h5 =document.getElementsByTagName("h5");

const menu = document.getElementById("main");

function img1(){
    imagen.src ="images/image-product-1.jpg";
    imagen.style.animation = "opacidad 2s";
    
}
function img2(){
    imagen.src ="images/image-product-2.jpg";
    imagen.style.animation = "opacidad 2s";
}
function img3(){
    imagen.src ="images/image-product-3.jpg";
    imagen.style.animation = "opacidad 2s";

}
function img4(){
    imagen.src ="images/image-product-4.jpg";
    imagen.style.animation = "opacidad 2s";
}
let agregar = () =>{
    cantidad += 1; 
    elemento.textContent = cantidad;
}

function quitar(){
    if(cantidad > 0){
    cantidad -=1;
    elemento.textContent = cantidad;
    }
}

let carta = () =>{
    cart.style.display ="flex";   
}

let cartafuera = () => {
    cart.style.display =" none";
}

let aceptar = () =>{
    if(cantidad == 0){
        cartNumber.style.display = "none";
        
    }else{
    cartNumber.textContent = cantidad;
    cartNumber.style.display = "flex";
    }
    
if(cantidad > 0){
    h5[0].style.display = "none"
    producto.style.display = "flex";
    var calcular = cantidad * 125;

    precio.textContent = `$125.00 x ${cantidad} $${calcular}.00` ;
}
}
var precio = document.getElementById("precioTotal");

var imagenes = new Array ("images/image-product-1.jpg",
 "images/image-product-2.jpg",
 "images/image-product-3.jpg", 
"images/image-product-4.jpg");

const cuadroImagen = document.getElementById("cuadroImagen");

var i = 0;

let next = () =>{
    i +=1;
    if(i>3){
        i=0;
    }
    cuadroImagen.src = imagenes[i];
}
let previous = () =>{
    i-=1;
    if(i < 0){
        i = 3;
    }
    cuadroImagen.src = imagenes[i];


}
const alerta = document.getElementById("cuadrodealerta");
const oscuro = document.getElementById("modoOscuro");
let cerrar = () =>{
    alerta.style.display = "none";
    oscuro.style.display = "none";
}

let dialogo = () =>{
    alerta.style.display = "flex";
    oscuro.style.display = "flex";
}

let header = () =>{
    let head = document.getElementById("head");
    head.style.display = "flex";
    head.style.flexDirection = "column";
    head.style.backgroundColor = "white";
    head.style.width = "60vw";
    head.style.position ="fixed";
    head.style.left = "0";
    head.style.top = "0";
    head.style.height = "100vh";
    oscuro.style.display = "flex";
    head.style.justifyContent ="flex-start";

}