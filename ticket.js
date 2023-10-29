/* Método Resumen */
function montoPagar(event) {
    event.preventDefault();
    let cantidad = parseInt(document.getElementById("input-cantidad").value);
    let categoria = parseInt(document.getElementById("select-tickets").value);
        const valor = 200;
    let valorTotal = 0;

    if (cantidad > 0 && categoria > 0 && categoria <= 4) {
        /* El valor 1 del select representa al primer elemento Estudiante */
        if (categoria == 1) {
            valorEntrada = valor * 0.2;
            valorTotal = valorEntrada * cantidad;
        } else if (categoria == 2) {
            valorEntrada = valor * 0.5;
            valorTotal = valorEntrada * cantidad;
        } else if (categoria == 3) {
            valorEntrada = valor * 0.85;
            valorTotal = valorEntrada * cantidad;
        } else if (categoria == 4) {
            valorEntrada = valor;
            valorTotal = valorEntrada * cantidad;
        }
        document.getElementById("input-total-pagar").value = 'Monto total a pagar: $' + valorTotal;
    } else {
        /* Alerta personalizada de la librería SweetAlert2 */
        Swal.fire({
            title: 'Error!',
            text: 'No se ha completado un campo o se ha ingresado un valor inválido',
            icon: "error",
            width: '330px'
        });
    }
}

/* Método borrar */
function borrar() {
    document.getElementById("formulario-tickets").reset();
}
