const url = "http://localhost:8080/api/controladores/gates/4"

function getGate(){
    axios.get(url)
    .then(response =>{
        console.log(response)
    })
    .catch(erros => console.log(error))
}


getGate()