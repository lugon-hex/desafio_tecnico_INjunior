const time = []

function adicionarJogador(nome, idade, pos, points) {
    let newPlay = {nome: nome, idade: idade, pos: pos, pontuacao: points}
    time.push(newPlay)
}

function buscarPorPosicao(searchPos) {
    const playerInPos = time.filter(x => x.pos.toLowerCase() === searchPos.toLowerCase())
    if (playerInPos.length == 0) {
        return `Nenhum jogador encontrado na posição "${searchPos}".`
    } else {
        let resultado = `Jogadores na posição: ${searchPos}\n`
        playerInPos.forEach(x => {resultado += player2str(x);})
        return resultado
    }
}

function listarTime() {
    let output = ""
    time.forEach((player, i) => {output += `${i + 1}. `+ player2str(player);})
    return output
}

function calcularPontuacaoMedia() {
    if (time.length == 0) return 0
    let totalSum = 0
    time.forEach(x => {totalSum += x.pontuacao;})
    let avg = totalSum / time.length
    return avg
}

function player2str(player) {
    return `Nome: ${player.nome} | Idade: ${player.idade} | Posição: ${player.pos} | Pontuação: ${player.pontuacao}\n`
}

let input
do {
    input = prompt(
        "Selecione uma opção:\n1-Adicionar jogador\n2-Buscar por posição\n3-Listar time\n4-Calcular pontuação média\n5-Sair"
    )
    if (input === null) input = "5"

    switch (input) {
        case "1":
            let nome = prompt("Digite o nome:")?.trim()
            if (!nome) { 
                alert("Nome inválido!")
                break
            }

            let idade = Number(prompt("Digite a idade:")?.trim())
            if (Number.isNaN(idade) || idade <= 0) { 
                alert("Idade inválida!")
                break
            }

            let pos = prompt("Digite a posição:")?.trim()
            if (!pos || pos == "") { alert("Posição inválida!"); break; }

            let pointsInput = prompt("Digite a pontuação:")
            let points = Number(pointsInput)
            if (pointsInput === "" || Number.isNaN(points)) { 
                alert("Pontuação inválida!")
                break
            }
            adicionarJogador(nome, idade, pos, points)
            break
        case "2":
            let searchPos = prompt("Digite a posição que deseja buscar:")
            let resultado;
            if (searchPos !== "" && searchPos !== null) {
                resultado = buscarPorPosicao(searchPos)
                alert(resultado);
            }
            break
        case "3":
            let teamList = listarTime()
            alert(teamList)
            break
        case "4":
            let avg = calcularPontuacaoMedia()
            alert(`Pontuação média: ${avg.toFixed(2)}`)
            break
        case "5":
            break
        default:
            alert("Input inválido!")
            break
    }
} while (input !== "5")