//pegar elementos do HTML
var elemento = document.querySelector(".elemento");
var imagem = document.querySelector("#imagem");
//Tempo
var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes(2);;
console.log(`Agora são ${hora} horas e ${minuto} minutos`);

//Horário agora
var time = time();

//função para mudar o tempo
function mudaHora(tempo,ceu,periodo){
    if(hora < tempo){
        elemento.textContent = `Agora são ${hora}:${minuto} ${periodo}`;
        var imagem2 = imagem.src = ceu;
        imagem = imagem2;
    }
}
//Propriedade tempo
function time(){
    var tempoMuda = {
        madrugada: mudaHora(6,"madrugada.jpg","de madrugada"),
        dia: mudaHora(12,"dia.jpg","da manhã"),
        tarde: mudaHora(18,"tarde.jpg","da tarde"),
        noite: mudaHora(24,"noite.jpg","da noite")
    }
    return tempoMuda;
}

//Evento de clique
var botao = document.querySelector("#botao");

botao.addEventListener("click",function(event){
    event.preventDefault();

})