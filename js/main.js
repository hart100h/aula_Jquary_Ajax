// As funções aqui só são possíveis de ser realizadas por causa da biblioteca jquery
function consultaCep(){

    $(".barra-progresso").show(); //mostra a barra de progresso
    $(".cep_centro").hide();

    var cep = document.getElementById("cep").value; //Pega o valor do elemento com ID = cep e armazena na variável cep. 
    console.log(cep)
    var url = "http://viacep.com.br/ws/" + cep +"/json/" //Usa-se o link de consulta, porém passando o cep inputado.


    $.ajax({//Função ajax
        url: url, // "http://viacep.com.br/ws/01001000/json/"  " //link para consulta cep json
        type: "GET",
        
        success: function(response){ //responde se for uma requição bem sucedida
            console.log(response.erro);

           /* document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("UF").innerHTML = response.uf; */
            
            // # o elemento é pegado por id e . por class podendo ser feito pelo ajax do seguinte modo:
            if(response.erro){

                alert("Cep inexistente.\nVerifique o número do cep e tente novamente!");
                window.location.reload();}

            else{

                $("#logradouro").html(response.logradouro);
                $("#bairro").html(response.bairro);
                $("#localidade").html(response.localidade);
                $("#UF").html(response.uf);
                $("#titulo_cep").html(response.cep);
                $(".cep").show();
                $(".barra-progresso").hide(); //omit a barra de progresso
                $(".cep_centro").show();
            }
        },

        error: function(){
            alert('Formato de CEP inválido!\nDigite 9 números sem caracteres especial ou letras.\nTente novamente!');
            window.location.reload(); //refresh na pagina   
        }
    })
}

$(function(){
    $(".cep").hide(); //esconde os elementos de uma classe
    $(".barra-progresso").hide();
});
