function confirmacao() {
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const tempoTreino = document.getElementById("tempoTreino").value.trim();
    const email = document.getElementById("email").value.trim();
    const sexo = document.getElementById("sexo1").value.trim();
    const unidade = document.getElementById("unidade").value.trim();
    const gPretendida = document.getElementById("graduacaoPretendida").value.trim();
    const camiseta = document.getElementById("camiseta").value.trim();
    const cartao = document.getElementById("cartao").value.trim();

    const resp = document.getElementById("resp");

    let valor = 0;
    let valorCartao = (cartao === "Sim") ? 25 : 0;

    // Verifica se há campos vazios
    if (!nome || !idade || !tempoTreino || !sexo || !gPretendida || !camiseta || !unidade) {
        alert("Preencha todos os campos!");
        return;
    }
    else {
        // Define o valor da graduação
        if (gPretendida === "Branco/Vermelho") {
            valor = 150
        }
        else if (gPretendida === "Vermelho") {
            valor = 200
        }
        else if (gPretendida === "Vermelho/AzulClaro") {
            valor = 250
        }
        else if (gPretendida === "AzulClaro") {
            valor = 300
        }
        else if (gPretendida === "AzulClaro/AzulEscuro") {
            valor = 350
        }
    }
   

    

    const valorTotal = valor + valorCartao;

    resp.style.display = "block";
    resp.innerHTML = `
        <h1>Confira os dados</h1>
        <p>
        Nome: <b>${nome}</b><br><br>
        Idade: <b>${idade} anos</b><br><br>
        Email: <b>${email}</b><br><br>
        Tempo de Treino: <b>${tempoTreino}</b><br><br>
        Unidade: <b>${unidade}</b><br><br>
        Graduação Pretendida: <b>${gPretendida}</b><br><br>
        Sexo: <b>${sexo}</b><br><br>
        Camiseta: <b>${camiseta}</b><br><br>
        O valor da graduação: <b>R$${valor},00</b><br><br>
        O valor do cartão: <b>R$${valorCartao},00</b><br><br>
        <hr>
        O valor total do pedido: <b>R$${valorTotal},00</b><br><br>
        Pagamento até dia 20/11/2025<br><br>
        Pix: wandemberg28@gmail.com
        </p><br>
        <button class="enviar" onclick="enviarWhats()">Enviar para WhatsApp</button>
    `;
}

function enviarWhats() {
    const texto = document.getElementById("resp").innerText;
    const numero = "5512997071992";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
}
