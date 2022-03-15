// const urlGate = "http://localhost:8080/api/controladores/gates/4"

const tempoAtualizacao = 10000; // 10 segundos em milisegundos


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
    console.log("inicando passo 1")
    switch (infoGate) {
        case 'Aguardando caminhão':
            console.log("Situação do Gate: ", infoGate)
            break
        case 'Aguardando pesagem':
            console.log("Situação do Gate: ", infoGate)
            break
        case 'Aguardando Controle de Acesso':
            Contador = 0;
            // Inicio do tratamento da api do controle de acesso
            while (Contador <= 0) {
                let responseControl = await fetch(`http://localhost:8080/api/controladores/equipamentos/1`);
                let controlData = await responseControl.json();
                var infoControl = controlData.evento;
                setTimeout(() => {
                    switch (infoControl) {
                        case '10':
                            console.log("Iniciando integração com Controle de acesso")
                            console.log("Contador: ", Contador);
                            console.log("EVENTO 10: Acesso Concluido")
                            Contador++
                            console.log("Contador: ", Contador);
                            break
                        case '40':
                            console.log("EVENTO 40: Biometria não confere")
                            // Contador++
                            console.log("Contador: ", Contador);
                            break
                        case '7':
                            console.log("EVENTO 7: Tentativa de Reentrada")
                            //  Contador++
                            console.log("Contador: ", Contador);
                            break
                        case '8':
                            console.log("EVENTO 8: Acesso Não Concluído")
                            console.log("Contador: ", Contador);
                            //  Contador++
                            break
                    }
                }, 5000)
                Contador ++
            }Contador --
        break
        default:
            console.log("acabou!")
    }
}


setInterval(() => {
    getGate2(2);
}, tempoAtualizacao);


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

