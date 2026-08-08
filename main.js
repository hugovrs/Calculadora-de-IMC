function calcular() {
  const p = +document.querySelector('#peso').value
  const a = +document.querySelector('#altura').value
  const imc = (p / (a * a)).toFixed(1)

  if (!p || !a) {
    document.querySelector('#resultado').innerHTML = 'Preencha os campos!'
    return
  }

  document.querySelector('#resultado').innerHTML = 'IMC: ' + imc
}
