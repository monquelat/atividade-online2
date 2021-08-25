console.log("Bem vindo(a) ao Sistema de Eventos");

let evento = ("Programação Mil Grau");
console.log("Evento: " + evento);


let dataevento = "28/08/2021";

if (dataevento <= "24/08/2021") {
    console.log("Data inválida");
    return evento;

}
else {
    var nome = "Renan";
    var idade = 32;
    console.log("Bem vindo(a) " + nome + " você tem " + idade + " anos");
}

if (idade <= 18) {
    console.log("Idade não Permitida!");
    return evento;
}

else {
    var participantes = nome + [, "Gasparzinho", "Jiraya", "Robocop", "Hilda Furacão"];
    var palestrantes = ["Rubens Java", "Madalena Python", "Gomercindo Html"];
}

if (participantes.length < 100) {
    console.log("Lista dos Participantes: " + participantes);
    console.log("Lista dos Palestrantes: " + palestrantes);
    console.log("Cadastro Realizado com Sucesso!");
}

else {
    console.log("Cadastro não Permitido, Excedeu o Número de Participantes!");
    return evento;
}





