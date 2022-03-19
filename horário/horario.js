//pegar elementos do HTML
var elemento = document.querySelector(".elemento");
var imagem = document.querySelector("#imagem");
//Tempo
var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes(2);;
console.log(`Agora são ${hora} horas e ${minuto} minutos`);
//Horário agora
mudaHora(6,"madrugada.jpg","de madrugada");
mudaHora(12,"dia.jpg","da manhã");
mudaHora(18,"tarde.jpg","da tarde");
mudaHora(24,"noite.jpg","da noite");
//função para mudar o tempo
function mudaHora(tempo,ceu,periodo){
    if(hora < tempo){
        elemento.textContent = `Agora sao ${hora}:${minuto} ${periodo}`;
        var imagem2 = imagem.src = ceu;
        imagem = imagem2;
    }
}
