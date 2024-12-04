// Adicione ouvintes no formulário
document.getElementById("form1").addEventListener("submit",
    function(event){
        
        let valido = true
        let mensagem = []


        //validar o nome com pelo menos duas palavras
        const nome = document.getElementById("nome").value
        if(nome.split(" ").length <2){
            valido = false
            mensagem.push("O nome deve conter pelo menos duas palvaras")
        }

        // validar o campo sexo
        const sexomasc = document.getElementById("masculino").checked
        const sexofem = document.getElementById("feminino").checked
        if(!sexomasc && !sexofem){
            valido = false
            mensagem.push("Selecione o campo sexo")
        }


    

        //validar o campo comentario
        const comentario = document.getElementById("comentario").value
        if(comentario.length < 100){
            valido = false
            mensagem.push("O comentáro deve ter pelo menos 100 caracteres")
        }

      
      
      
        if(valido == false){            //impede o envio do fomulario   
            event.preventDefault()
            alert(mensagem.join("\n"))
        }
    }

)