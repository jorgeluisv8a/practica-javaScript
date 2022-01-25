function calcularDescuento() {
  const descuento = parseFloat(document.getElementById("Descuento").value)
  const precio = parseFloat(document.getElementById("Precio").value)
  const porcentajePrecioConDescuento = (100 - descuento)
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
  const resultP = document.getElementById("ResultPrice")
  resultP.innerText = `Discounted price is: $ ${precioConDescuento} `
}

