function factorial(n) {
    if(n<0n) return undefined;
    n = BigInt(n);
    let result = 1n;
    for (let index = 2n; index <= n; index++) result *= index;
    return result;
}

function runFactorial() {
    let n, ans, firstExecution = true;
    do {
        do {
            n = prompt("Digite um número inteiro positivo:");
            if (firstExecution == true) {
                firstExecution = false;
                if (n === null) return;
            }

            if (n != "") {
                n = Number(n);
                if(Number.isInteger(n) && n >= 0) break;   
            }   
            
            alert("Input inválido!");
        } while (true);

        let result = factorial(n);
        alert(`O fatorial do número é ${result}`);
        do {
            ans = prompt("Você deseja calcular o fatorial de outro número?\nDigite s se sim e n caso contrário.")?.trim().toUpperCase();
            if(ans === null || ans === undefined || ans === 'N' || ans === 'S') break;
            alert("Input Inválido!");
        } while (true);

    } while (ans === "S");   
}

runFactorial()


