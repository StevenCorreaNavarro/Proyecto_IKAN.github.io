const puntos = document.querySelectorAll('.punto');

puntos.forEach(punto => {
    punto.addEventListener('mouseenter', mostrarnombrePrenda);
    punto.addEventListener('mouseleave', ocultarnombrePrenda);
});

function mostrarnombrePrenda(event) {
    const nombrePrenda = obtenerNombrePrenda(event.target.id);
    const nombrePrendaElemento = document.createElement('div');
    nombrePrendaElemento.textContent = nombrePrenda;
    nombrePrendaElemento.id = 'nombrePrenda';
    nombrePrendaElemento.style.position = 'absolute';
    nombrePrendaElemento.style.top = `${event.clientY}px`;
    nombrePrendaElemento.style.left = `${event.clientX}px`;
    document.body.appendChild(nombrePrendaElemento);
}

function ocultarnombrePrenda() {
    const nombrePrendaElemento = document.getElementById('nombrePrenda');
    if (nombrePrendaElemento) {
        document.body.removeChild(nombrePrendaElemento);
    }
}

function obtenerNombrePrenda(id) {
    // Esta función debería devolver el nombre de la prenda según el ID del punto
    // Aquí puedes implementar la lógica para obtener el nombre de la prenda según el ID
    // Por ejemplo, podrías tener un objeto o una función que mapee IDs de puntos a nombres de prendas
    // Por ahora, simplemente devolveré un nombre de ejemplo para propósitos de demostración
    return "Nombre de la prenda";
}
