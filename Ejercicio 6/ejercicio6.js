const boton = document.getElementById("boton");

boton.addEventListener("click" , ()=>{
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = parseInt(document.getElementById("edad").value);
    const estatura = parseInt(document.getElementById("estatura").value)
    const correoElectronico = document.getElementById("correo").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado1.innerHTML = "";

    const errores = [];
    if (nombre === "" || nombre.length > 50 ){
        errores.push("El nombre esta vacio y no puede superar los 50 caracteres");
    }

    if (apellido === "" || apellido.length > 50){
        errores.push("El apellido esta vacio y no puede superar los 50 caracteres");
    }

    if (isNaN(edad) || edad < 0){
        errores.push("La edad no puede ser un valor menor a 0");
    }else if(edad < 18){
        errores.push("Debe ser mayor de edad");
    }

    if (isNaN(estatura) || estatura < 0 || estatura >230){
        errores.push("la altura no puede ser menor a 0 y tampoco mayor a 230 cm");
    }

    if (correoElectronico === "" || !correoElectronico.includes("@")){
        errores.push("El correo electronico debe llevar el @ y no puede estar vacio");
    }

    if (errores.length > 0){
        resultado1.innerHTML = errores.join("<br>");
    }
    
    const validaciones = [];

    if(nombre != "" && nombre.length < 50 ){
        validaciones.push(`${nombre}`);
    }

    if (apellido != "" && apellido.length < 50){
        validaciones.push(`${apellido}`);
    }

    if(!isNaN(edad) && edad >= 18){
        validaciones.push(`${edad}`);
    }

    if(!isNaN(estatura) && estatura > 0 && estatura < 230){
        validaciones.push(`${estatura}`);
    }

    if (correoElectronico != "" && correoElectronico.includes("@")){
        validaciones.push(`${correoElectronico}`);
    }

    if (validaciones.length > 0){
        resultado.innerHTML = validaciones.join("<br>")
    }
})