
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElmento) {
      return valorAcumulado + nuevoElmento
    }
  )
  const promediLista = sumaLista / lista.length
  return promediLista
}