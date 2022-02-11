const url = "http://localhost:8080/api/controladores/gates/2"

const tempoGate = 500; // 10 segundos em milisegundos
const Contador = 0;

function getGate() {
    axios.get(url)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data.descricao)
            console.log("atualizando informações do gate")
            if (data.descricao == "Aguardando caminhão") {
                renderResults.textContent = "Sem caminhão em cima da balança";
            } else {
                renderResults.textContent = JSON.stringify(data.descricao)
            }
        }) 
        .catch(erros => console.log(erros))
}

getGate()

function teste() {
    const info = info;
    // var info = prompt("Qual o a situação atual do gate?");
    switch (info) {
        case 'Sem caminhão em cima da balança':
            alert("Situação: Sem caminhão em cima da balança")
            break
        case 'Aguardando caminhão':
            alert("Situação: DEPOSITE SEU CRACHÁ")
            break
        case 'BIO':
            alert("Situação: REALIZE A BIOMETRIA")
        default: 
            alert("deu ruim!")
    }
}.


