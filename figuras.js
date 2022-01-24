// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4
}

function areaCuadrado(lado) {
  return lado * lado
}

// Código del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2
}

// Código del circulo
//Diámetro

function diametroCirculo(radio) {
  return radio * 2
}

//PI
const PI = Math.PI

//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * PI
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI
}

function calcularPerimetroCuadrado() {
  const value = document.getElementById("InputCuadrado").value
  const perimetro = perimetroCuadrado(value)
  alert(perimetro)
}

function calcularAreaCaudrado() {
  const value = document.getElementById("InputCuadrado").value
  const area = areaCuadrado(value)
  alert(area)
}

function calcularPerimetroTriangulo() {
  const value1 = parseFloat(document.getElementById("Lado1Triangulo").value)
  const value2 = parseFloat(document.getElementById("Lado2Triangulo").value)
  const base = parseFloat(document.getElementById("BaseTriangulo").value)
  console.log(typeof value1)
  const perimetro = perimetroTriangulo(value1, value2, base)
  alert(perimetro)
}

function calcularAreaTriangulo() {
  const base = parseFloat(document.getElementById("BaseTriangulo").value)
  const altura = parseFloat(document.getElementById("AlturaTriangulo").value)
  const areaTraingulo = areaTriangulo(base, altura)
  alert(areaTraingulo)
}

function calcularDiametroCirculo() {
  const radio = document.getElementById("RadioCirculo").value
  const diametro = diametroCirculo(radio)
  alert(diametro)
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById("RadioCirculo").value
  const perimetro = perimetroCirculo(radio)
  alert(perimetro)
}

function calcularAreaCirculo() {
  const radio = document.getElementById("RadioCirculo").value
  const area = areaCirculo(radio)
  alert(area)
}