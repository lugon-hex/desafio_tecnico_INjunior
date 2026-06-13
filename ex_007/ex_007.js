let queue = [];
let input;

function printQueue(queue) {
    if(queue.length == 0) return "vazia!\n"
    let output = "";
    for (const index in queue) {
        output += `${Number(index)+1}º ${queue[index]}\n`
    }
    return output
}

do {
    input = prompt(`Fila: ${printQueue(queue)}O que deseja fazer?\nDigite o número correspondente:\n1-Adicionar novo cliente\n2-Atender cliente\n3-Sair`)?.trim()
    if(input == null || input == "3") {
        break;
    } else if (input == "1") {
        let new_client;
        do {
            new_client = prompt("Insira o nome do cliente")?.trim()
            if(new_client == null || new_client != "") break;
            alert("Input inválido!");
        } while (true);
        queue.push(new_client);
    } else if (input == "2"){
        let served = queue.shift();
        alert(`Servindo o cliente ${served}`)
    } else {
        alert("Input inválido!");
    }
} while (true);