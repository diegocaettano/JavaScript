// const urlGate = "http://localhost:8080/api/controladores/gates/4"

const tempoAtualizacao = 3000; // 10 segundos em milisegundos


async function getGate2(gate) {
        //Pegar Situação do Gate
        let responseGate = await fetch(`http://localhost:8080/api/controladores/gates/${gate}`);
        let gateData = await responseGate.json();

        //Pegar Informação da Controladora
        // let responseControl = await fetch(`http://localhost:8080/api/controladores/equipamentos/1`);
        // let controlData = await responseControl.json();

        //Armazenando informações em variaveis
        var infoGate = gateData.descricao;
        // var infoControl = controlData.evento;

        //console.log(infoGate)
        //Tratamento das informações obtidas
        var Contador = 0;
        
        console.log("inicando passo 1")
            if (infoGate == 'Aguardando caminhão'){
                console.log("Situação do Gate: ", infoGate)
            }else if(infoGate == 'Aguardando pesagem'){
                console.log("Situação do Gate: ", infoGate)
            }else if(infoGate == 'Aguardando Controle de Acesso'){
                // Inicio do tratamento da api do controle de acesso
                let responseControl = await fetch(`http://localhost:8080/api/controladores/equipamentos/1`);
                let controlData = await responseControl.json();
                var infoControl = controlData.evento;
                console.log("info controle de acesso",infoControl)
                if (infoControl == "10"){
                    Contador ++;
                    setTimeout(() => {
                    console.log("algo")
                    }, 5000) 
                }else{
                    setTimeout(() => {
                    console.log("diferente")
                    }, 5000)
                }
            }
        
}


    
getGate2(2);

// setInterval(() => {
//     getGate2(2);
// }, tempoAtualizacao);

// for (i = 0; i < a.length; i++) {
//     if (a[i] == theValue) {
//       break;
//     }
//   }

// getGate2(2)

// var cont = 0
// var SuaCondicao = false
// while (cont <= 0) {

//     if (SuaCondicao == true) {
//     } else {
//         setTimeout(function () {
//             // SuaCondicao = true
//             console.log("Faz algo se vc quiser");
            
//         }, 3000);
//         cont++
// //     }

// }



// function getGate() {
//     axios.get(url)
//         .then(response => {
//             const data = response.data
//             renderResults.textContent = JSON.stringify(data.descricao)
//             console.log("atualizando informações do gate")
//             if (data.descricao == "Aguardando caminhão") {
//                 renderResults.textContent = "Sem caminhão em cima da balança";
//             } else {
//                 renderResults.textContent = JSON.stringify(data.descricao)
//             }
//         })
//         .catch(erros => console.log(erros))
// }

// getGate()

