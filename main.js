const urlGate = "http://localhost:8080/api/controladores/gates/4"

const tempoAtualizacao = 1000; // 10 segundos em milisegundos
const Contador = 0;

async function getGate2(gate) {
    //Pegar Situação do Gate

    let responseGate = await fetch(`http://localhost:8080/api/controladores/gates/${gate}`);
    let gateData = await responseGate.json();

    //Pegar Informação da Controladora
    let responseControl = await fetch(`http://localhost:8080/api/controladores/equipamentos/19`);
    let controlData = await responseControl.json();

    //Armazenando informações em variaveis
    var infoGate = gateData.descricao;
    var infoControl = controlData.evento;

    //Tratamento das informações obtidas
    switch (infoGate) {
        case 'Aguardando caminhão':
            alert("Situação: Aguardando Caminhão")
            break
        case 'Aguardando Controle de acesso':
            // Inicio do tratamento da api do controle de acesso
            switch (infoControl) {
                case '10':
                    alert("EVENTO 10: Acesso Concluido")
            }
        // default: 
        //     return infoGate = "Aguardando caminhão";
    }
}
getGate2(4)



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

