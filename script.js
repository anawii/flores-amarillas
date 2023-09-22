function mostrarMensaje() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    
    if (nombre) {
        const mensaje = `¡Feliz Día de la Amistad, ${nombre}!. Te quiero  ♡
        Atte: Anahi :D`;
        alert(mensaje);
    }
}
