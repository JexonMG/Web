let entradaNum = document.getElementById('entrada');
const resultadoParrafo = document.getElementById('resultadoParrafo');

function ponerValor(valor) {
    // Verificar si el valor es cero y si el último carácter en txtNumero1.value es un dígito numérico
    if (valor === '0' && !/\d$/.test(entradaNum.value)) {
        return; // No hacer nada si no hay dígitos numéricos antes del cero
    }
    
    entradaNum.value += valor;
}

function calcular() {
    let resultado = eval(entradaNum.value);
    resultadoParrafo.textContent = resultado;
}

