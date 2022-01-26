var prompt = require('prompt-sync')();

console.log("Em 1980, nascia César, uma criança perfeita, mimada por seus pais, César tinha uma vida, muito boa, tudo que ele queria seus pais não mediam esforços para fazer suas vontades, certo dia a família resolveu viajar, quando estavam quase chegando ao destino seu pai perdeu o controle do carro, e acabaram se acidentando, no acidente eles acabaram falecendo e Cesar ficou paraplegico, nessa epoca Cesar tinha apenas 14 anos, com o acidente ele acabou tendo que ir morar na casa da sua tia, que era a única pessoa que poderia cuidar dele, César se esforçou muito para retomar a sua vida, quando descobriu que ele mesmo dessa forma poderia praticar esportes, e começou a jogar basquete, quando ele tinha 17 anos foi notado por um empresário, e levou ele para treinar né um time de pessoas com necessidades especiais, logo César se destacou entre seus amigo e está próximo a convocação para a seleção de basquete. Ajude Cesar a chegar a seu objetivo.\n");

console.log("Responda sim ou nao")
const sim = []
const nao = []

const pergunta1 = prompt("Você acha que César tem habilidades para isso? ");
if (pergunta1 === "sim" ){ 
sim.push(pergunta1);
}
else if (pergunta1 === "nao" ){
    nao.push(pergunta1);
}  
const pergunta2 = prompt("Você acha que César se dedicou bastante para conseguir essa oportunidade? ");
if (pergunta2 === "sim" ){ 
    sim.push(pergunta2);
    }
    else if (pergunta2 === "nao" ){
        nao.push(pergunta2);
    }  
const pergunta3 = prompt("Você acha que a Tia dele o apoia nesse esporte? ");
if (pergunta3 === "sim" ){ 
    sim.push(pergunta3);
    }
    else if (pergunta3 === "nao" ){
        nao.push(pergunta3);
    }  
const pergunta4 = prompt("Você acha que esse é o momento certo de César tentar essa oportunidade? ");
if (pergunta4 === "sim" ){ 
    sim.push(pergunta4);
    }
    else if (pergunta4 === "nao" ){
        nao.push(pergunta4);
    }  
const pergunta5 = prompt("Você acha que Cézar começou a jogar basquete por causa do seu problema? ");
if (pergunta5 === "sim" ){ 
    sim.push(pergunta5);
    }
    else if (pergunta5 === "nao" ){
        nao.push(pergunta5);
    }  

if (sim.length === 0){
console.log("Você falha miseravelmente.")       
}
else if(sim.length > 0 && sim.length <=2){
console.log("Você falha, mas ainda consegue fugir da situação.")
}
if (sim.length === 3){
console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco..")       
}
else if(sim.length === 4){
console.log(" Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.")
}
if (sim.length === 5){
console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.")
}
