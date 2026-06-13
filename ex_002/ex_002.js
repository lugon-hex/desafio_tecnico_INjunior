alert("Esse programa mostra informações sobre uma equação quadrática na forma: ax² + bx + c = 0")
let a = Number(prompt("Digite o valor de a"))
let b = Number(prompt("Digite o valor de b"))
let c = Number(prompt("Digite o valor de c"))
let delta = b**2 - 4*a*c
alert(`O valor do discriminante é ${delta}`)
if (delta > 0) {
    let root_1 = ((-b) + Math.sqrt(delta))/(2*a)
    let root_2 = ((-b) - Math.sqrt(delta))/(2*a)
    alert(`A equação possui como raízes reais os valores ${root_1.toFixed(2)} e ${root_2.toFixed(2)}`)
} else if(delta === 0){
    let root = ((-b) + Math.sqrt(delta))/(2*a)
    alert(`A equação possui como raiz real o valor ${root.toFixed(2)}`)
} else {
    alert("A equação não possui raízes reais!")
}
