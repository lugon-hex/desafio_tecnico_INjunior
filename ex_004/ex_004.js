function isPalindrome(str) {
    normalizedStr = normalizeString(str)
    const reverseStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reverseStr
}

function normalizeString(str){
    return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

do {
    sentence = prompt("Digite uma frase:")
    if(sentence == null) break;
    if(sentence !== "") {
        if(isPalindrome(sentence)) alert("A frase é um palíndromo!")
        else alert("A frase não é um palíndromo!")
        break;
    }
    alert("Input Inválido!")
} while (true);

