function compactarTexto(str) {
    if(str.length == 0) return "";
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}

let input;
do {
    input = prompt('Digite o texto que deseja compactar');
    if (input !== "" && input !== null) {
        const compactText = compactarTexto(input);
        alert(`Entrada: ${input}\nSaída: ${compactText}`);
        break;
    }
    if (input === null) break;
    alert("Input Inválido!");
} while (true);