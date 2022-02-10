const url = "http://localhost:8080/api/controladores/gates/4"

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
        .catch(erros => console.log(error))
}

    setTimeout(getGate(), tempoGate)
