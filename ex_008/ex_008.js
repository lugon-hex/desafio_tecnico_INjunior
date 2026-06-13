const consumos = [120, 250, 180, 300, 250];

function analisarConsumo(consumo, max) {
    let categories = []
    for (const i in consumo) {
        if(consumo[i] > max) {
            categories[i] = "Acha que é sócio da Enel";
        } else if(consumo[i] === max){
            categories[i] = "No Limite";
        } else {
            categories[i] = "Econômico";
        }
    }
    return categories
}

let input;
do {
    input = prompt('Digite o máximo de consumo para a categoria "Econômico"');
    if(input !== "" && input !== null){
        input = Number(input);
        if(!Number.isNaN(input)){
            const categories = analisarConsumo(consumos, input);

            let i = 1, output = "";
            categories.forEach(element => {output += `Aparelho ${i++}: ${element}\n`});
            alert(output)
            break
        }
    }
    if(input === null) break;
    alert("Input Inválido!")
} while (true);


