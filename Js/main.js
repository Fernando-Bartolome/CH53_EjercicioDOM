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

let otroElemento = document.querySelector("ul>li")

let otrosElementos = document.querySelectorAll("ul>li")
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

    // lista.item(0).before(element);
    // lista.item(0).prepend(element2);
    lista.item(0).append(element);
    lista.item(0).after(element2);


});
