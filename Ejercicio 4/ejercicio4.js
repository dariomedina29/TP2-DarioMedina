const boton = document.getElementById("boton");

boton.addEventListener("click", ()=>{
    const peso = parseFloat(document.getElementById("valor").value);
    const altura = parseFloat(document.getElementById("valor2").value);

    const IMC = peso / (altura * altura);
    alert("Tu IMC es: " + IMC.toFixed(2));
});
