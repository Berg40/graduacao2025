
function confirmacao() {
    let nome = window.document.getElementById("nome").value;
    let idade = window.document.getElementById("idade").value;
    let tempoTreino = window.document.getElementById("tempoTreino").value;
    let email = window.document.getElementById("email").value;

    let sexo = window.document.getElementById("sexo1").value;
    let unidade = window.document.getElementById("unidade").value;
    let gPretendida = window.document.getElementById("graduacaoPretendida").value;
    let camiseta = window.document.getElementById("camiseta").value;
    let cartao = window.document.getElementById("cartao").value;

    const resp = window.document.getElementById("resp");

    if (cartao == "Sim") {
         valorCartao = 25
    }
    else {
        valorCartao = 0
    }
    

    

    if (nome.length == 0 || idade.length == 0 || tempoTreino.length == 0 || sexo.length == 0 || gPretendida.length == 0 || camiseta.length == 0 || unidade.length == 0 ) {
        alert("Preencha todos os Campos")
    }
    else {
        if (gPretendida == "Branco/Vermelho") {
                valor = 150;
            
        }
        
        else if (gPretendida == "Vermelho") {
            valor = 200;
        }
        else if (gPretendida == "Vermelho/Azul Claro") {
            valor = 250;
        }
        else if (gPretendida == "Azul Claro") {
            valor = 300;
        }

        
        resp.style.display = "block";
        

        resp.innerHTML = `<h1>Confira dos dados</h1>
        <p>Nome: <b>${nome}</b><br><br>
        Idade: <b>${idade} anos</b><br><br>
        Email: <b>${email}</b><br><br>
        Tempo de Treino: <b>${tempoTreino}</b><br><br>
        Unidade: <b>${unidade}</b><br><br>
        Graduação Pretendida: <b>${gPretendida}</b><br><br>
        Sexo: <b>${sexo}</b><br><br>
        Camiseta: <b>${camiseta}</b><br><br>
        O valor da graduação: <b>R$${valor},00</b><br><br>
        O valor do cartão: <b>R$${valorCartao},00</b> <br><br>
        <hr>
        O valor total do pedido: <b>R$${valor + valorCartao},00</b><br><br>
        Pagamento até dia 20/11/2025<br><br>
        Pix: wandemberg28@gmail.com </p><br>
        <button class="enviar" onclick= "enviarWhats()">Enviar para Whatssapp</button>
        `;
        
    }
    
}
function enviarWhats() {
        const texto = window.document.getElementById("resp").textContent;
        const numero = "5512997071992";
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
        window.open(link, "_blank");
        
        
    }