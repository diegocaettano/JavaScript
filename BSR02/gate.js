/*                                                                                                              --
CODIGOS DOS GATES:
        1	Balança de entrada rodoviária GEXPO lado esquerdo	      						--
        2	Balança de entrada rodoviária GEXPO lado direito			    				-- 
        3	Balança de saída rodoviária GEXPO lado esquerdo									--
        4	Balança de saída rodoviária GEXPO lado direito									--
*/

const urlGate = "http://localhost:8080/api/controladores/gates/4"
images = document.querySelectorAll("#slider img")

function getGate() {
        axios.get(urlGate)
                //SITAÇÕES IMPORTANTES
                        //AMBIENTE HOMOLOG
                                // 1- Aguardando Caminhão
                                // 2- Aguardando Controle de Acesso
                                // 3- Aguardando Pesagem
                                //15- Saida da balança
                                //10- Pesagem Concluida

                        // AMBIENTE DE PROD
                                // 7  - Saida da balança															    --
                                // 15 - Aguardando controle de acesso													--
                                // 16 - Aguardando Pesagem	

                .then(response => {
                        const data = response.data
                        // renderResults.textContent = JSON.stringify(data.descricao)
                        if (data.descricao == 'Aguardando caminhão') {
                                console.log("STATUS GATE: ", data.descricao)
                                return images[9].classList.add("selected")
                                // return renderResults.textContent = "Sem caminhão em cima da balança";
                        } else if (data.descricao == "Aguardando controle de acesso") {
                                console.log("STATUS GATE: ", data.descricao)
                                images[1].classList.add("selected")
                                // renderResults.textContent = "Aguardando Controle de Acesso";
                                // return getCTRLAcesso()
                                setTimeout(() => {
                                        return window.location.href = './ctrlAcesso.html';
                                }, 5000);
                        } else if (data.descricao == "Aguardando pesagem") {
                                console.log("STATUS GATE: ", data.descricao)
                                return images[7].classList.add("selected")
                                // return renderResults.textContent = "Aguarde... Veículo sendo pesado, em breve seu Ticket será impresso";
                        } else if (data.descricao == "Saída da balança") {
                                console.log("STATUS GATE: ", data.descricao)
                                return images[8].classList.add("selected")
                        }
                })
                .catch(erros => console.log("Não há informações para serem passadas"))
}

var contador=0
setInterval(() => {
        getGate()
        contador ++
        console.log(contador)
        if(contador === 100){
                return window.location.href = './index.html';
        }
        
}, 3000)