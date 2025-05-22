const calcular = document.getElementById("calcular");

calcular.addEventListener("click", ()=>{
    const alturaA = parseFloat(document.getElementById("alturaA").value);
    const base = parseFloat(document.getElementById("base").value);
    const alturaC = parseFloat(document.getElementById("alturaC").value);
    const resultado = document.getElementById("resultado");

    const areaRectangulo = base * alturaC;
    const areaTriangulo = (base * (alturaA - alturaC)) / 2;
    const areaTotal = areaRectangulo + areaTriangulo;

    resultado.innerText = `El área total es: ${areaTotal}`; 
});