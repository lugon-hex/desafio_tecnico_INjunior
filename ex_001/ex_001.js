function roundMoney(value) {
    return Math.round(value * 100) / 100;
}

let real = Number(prompt("Digite um valor em reais"))
let euro = real * 6.1
let dolar = real * 5.7
euro = roundMoney(euro)
dolar = roundMoney(dolar)
alert(`Valor inserido(em reais): ${real.toFixed(2)}\nValor em dólar: ${dolar.toFixed(2)}\nValor em euro: ${euro.toFixed(2)}`)