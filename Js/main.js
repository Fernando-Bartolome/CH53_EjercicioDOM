//Document es el metodo de inicio para entrar a la carpeta de index
let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
// encabezado1.innerText = "<em>Ejercicio DOM</em>";
// encabezado1.innerHTML = "<em>Ejercicio</em> DOM";

let encabezado2 = document.getElementById("encabezado2");
// encabezado2.innerText = "DOM Excersice";

// console.log(encabezado2.innerText);

let lista = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");

let otrosElementos = document.querySelectorAll("ul>li");

let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");

console.log(otrosElementos.length);
console.log("otroElemento: ", otroElemento);

console.log(lista.length);
// console.log(lista[0]);
console.log(lista.item(1));

console.log(elementos.item(2));

console.log(elementos.length);

let contador = 0;
function modifica(){
    //    encabezado1.innerText += "<em>Ejercicio</em> DOM";
    encabezado1.innerHTML += "<em>Ejercicio</em> DOM";

    encabezado2.innerText = ++contador;
}//modifica

btnMostrar.addEventListener("click", function(event){
    event.preventDefault();//No hagas lo que haces por defecto
    // console.log("botón btnModificar presionado");
    let element = document.createElement("li");
    element.innerText=" Another item";// <li> Another item </li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);
    // before Inserta el elemento antes de la lista
    // // lista.item(0).before(element);
    //Prepend Inserta el elemento al principio de la lista 
    // // lista.item(0).prepend(element2);
    //append Inserta el elemento al final de la lista 
    // lista.item(0).append(element);
    //after Inserta el el elmento despues de la lista 
    // lista.item(0).after(element2);
    // afterbegin Inserta ele elemento al principio de las listas 
    // lista.item(1).insertAdjacentElement("afterbegin", element);
    //beforeend Inserta el elemento al final de la lista 
    // lista.item(1).insertAdjacentElement("beforeend", element2);

    lista.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before being item</li>`);
    lista.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After End item</li>`);
    lista.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After End item</li>`);
    lista.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before being item</li>`);

});

//Se ejecuta cuando termina de cargar todos los elementos de la pagina 
window.addEventListener("load", function(event){
    console.log("Se termino de cargar la pagina");
});//load
 function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
 }

//Blur -> cuadno se sale del campo txtRFC

// txtRFC.addEventListener("blur", function(event){
//     // event.preventDefault();
//     // txtRFC.value = txtRFC.value.toUpperCase();
// });//RFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//RFC
//Automatizado ->
txtRFC.addEventListener("blur", txtToUpper);//txtRFC
txtCURP.addEventListener("blur", txtToUpper);//txtCURP

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();

    txtTelefono.value = txtTelefono.value.trim().slice(0,10);

});//txtTelefono
