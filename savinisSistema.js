let dataAtual =  ("2021-09-02")
let dataDoEvento =  ("2021-09-27")

if (dataDoEvento > dataAtual) {
    console.log("Data Válida. Cadastro do evento permitido")   
} else {
    console.log("Data do evento inválida, favor informar uma data Futura.")
}

// Validação do cadastro do participante. Se menor de 18 anos de idade impedir e alertar. Caso maior de 18 anos, permitir. 
// Validando Maioridade (18 anos)
let dataDeNascimento = new Date('2002-09-06')
let diaAtual = new Date ('2021-09-01')
let maioridade = 6570 // Quantidade de dias referente a 18 anos
diaAtual.setDate(diaAtual.getDate() - maioridade)

if (dataDeNascimento >= diaAtual ) {
    console.log('Cadastro não permitido! Evento apenas para Maiores de 18 anos')
} else {
    console.log('Cadastro efetuado')
}


// Lista de participantes e palestrantes do evento
// Quantidade de participante

let listaDeParticipantes = ["Adriano", "Carlos","Pedro", "Thiago"];

let quantidadeDeParticipantes = listaDeParticipantes.length;


if(quantidadeDeParticipantes < 100) {
    listaDeParticipantes.push("Thierry");

	console.log("Inscrição feita com sucesso")
    console.log(listaDeParticipantes);
} else {
    console.log("A quantidade limide de " + listaDeParticipantes.length + " participantes Foi atingida")
}