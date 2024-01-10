function gestionarListaCompras() {
    //Lista para almacenar producto y el precios
    let listaCompras = [];
    //Variable para calcular el total
    let totalPrecio = 0;

    //Bucle para agregar productos y precio
    while (true) {
        let producto = prompt("Ingrese el nombre del producto (o escriba 'total' para finalizar):");

        //Verifica si se debe finalizar la lista
        if (producto.toLowerCase() === 'total') {
            break;
        }

        //Solicita el precio
        let precio = parseFloat(prompt(`Ingrese el precio para ${producto}:`));

        //Verifica precio es un número válido
        if (isNaN(precio)) {
            alert("Ingrese un precio válido. Intente nuevamente.");
            continue;
        }

        //Agrega producto y precio a lista
        listaCompras.push({ producto, precio });

        //Aviso se agrego el producto con precio
        alert(`${producto}" ha sido agregado a la lista por $${precio.toFixed(2)}`);
    }

    //Calcula total
    for (let i = 0; i < listaCompras.length; i++) {
        totalPrecio += listaCompras[i].precio;
    }

    // Muestra la lista y total
    mostrarResultados(listaCompras, totalPrecio);
}

//Función para dar formato de lista
function formatoLista(listaCompras) {
    let resultado = "";
    for (let i = 0; i < listaCompras.length; i++) {
        resultado += `${i + 1}. ${listaCompras[i].producto} - $${listaCompras[i].precio.toFixed(2)}\n`;
    }
    return resultado; 
    
}                        

//Función para mostrar (lista y total)
function mostrarResultados(listaCompras, totalPrecio) {
    alert("Lista de Compras:\n\n" + formatoLista(listaCompras) + "\nTotal: $" + totalPrecio.toFixed(2));
}

//Iniciar el proceso 
gestionarListaCompras();