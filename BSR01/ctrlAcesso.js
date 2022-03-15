
/* 
EQUIPAMENTO TESTE MATRIZ CODIGO = 3 
EQUIPAMENTO BSR01 CODIGO = 18
EQUIPAMENTO BSR02 CODIGO = 19

*/
const urlCTRLAcesso = "http://localhost:8080/api/controladores/equipamentos/BSR01/18"

images = document.querySelectorAll("#slider img")

function getCTRLAcesso() {
        axios.get(urlCTRLAcesso)
                //  8-  Acesso não concluído
                //  10- Acesso concluído
                //  40- Biometria não Confere

                .then(response => {
                        const data = response.data
                        // renderResults2.textContent = JSON.stringify(data.descricao)
                        console.log("atualizando informações do Controle de Acesso:", data.evento)
                        if (data.evento == "1") {
                                // console.log(data.evento)
                                return images[3].classList.add("selected")
                        } else if (data.evento == "8") {
                                return console.log(data.evento)
                        } else if (data.evento == "40") {
                                console.log("Biometria não reconhecida, por favor realizar reconhecimento biometrico novamente")
                                return images[4].classList.add("selected")
                                // renderResults2.textContent = "Biometria não reconhecida, por favor realizar reconhecimento biometrico novamente"
                        } else if (data.evento == '10') {
                                // console.log(data.evento)
                                // return renderResults2.textContent = "Controle de Acesso Concluído";
                                images[7].classList.add("selected")
                                setTimeout(() => {
                                        window.location.href='./index.html';
                                }, 5000);

                        }
                })
                .catch(erros => console.log("Sem informações para serem exibidas de Controle de Acesso:"))
}

function main() {
        getCTRLAcesso()

}


setInterval(() => {
        main()
}, 3000)

