let buttonResumen = document.querySelector(".button-resumen");
console.log(buttonResumen);


buttonResumen.addEventListener("click",aplicarDescuento);

function aplicarDescuento (){
    let totalPago = document.querySelector(".container-totalPago__p");
    let inputCategoria = document.querySelector(".input-categoria");
    let inputCantidad = parseInt(document.getElementById("cantidad").value);
    
    
    if(inputCantidad <= 0){
        totalPago.innerHTML = "<span style = color:red> error al ingresar la cantidad de entradas </span>"
        return;
    }

    if(inputCategoria.value == "Estudiante"){
        totalPago.textContent = "total a pagar: $" + (inputCantidad*10000 - ((inputCantidad*10000)*80)/100);
    }

    else if(inputCategoria.value == "Trainee"){
        totalPago.textContent = "total a pagar: $" + (inputCantidad*10000 - ((inputCantidad*10000)*50)/100);
    }
    else if(inputCategoria.value == "Junior"){
        totalPago.textContent = "total a pagar: $" + (inputCantidad*10000 -((inputCantidad*10000)*15)/100);
    }

}

let buttonBorrar = document.querySelector(".button-borrar");
console.log(buttonBorrar);

buttonBorrar.addEventListener("click",borrarInputs);

function borrarInputs(){

    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = ""; 
    document.getElementById("Correo").value = ""; 
    document.getElementById("cantidad").value = "";
    document.querySelector(".input-categoria").value = "";
}