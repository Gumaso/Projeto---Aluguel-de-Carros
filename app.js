var var_botao1_div_esquerda_secao1 = document.getElementById("botao1_div_esquerda_secao1");
var var_botao2_div_esquerda_secao1 = document.getElementById("botao2_div_esquerda_secao1");


var_botao2_div_esquerda_secao1.addEventListener("mouseover", function() {
    var_botao1_div_esquerda_secao1.classList.add("botao_ativado");
});

var_botao2_div_esquerda_secao1.addEventListener("mouseout", function() {
    var_botao1_div_esquerda_secao1.classList.remove("botao_ativado");
});


const botao_registrar = document.getElementById('registrar_id_botao');
const botao_logar = document.getElementById('logar_id_botao');

botao_registrar.addEventListener('mouseover', function() {
    botao_logar.style.backgroundColor = '#C0C0C0'; // Muda o background color do botão 2
    botao_logar.style.borderColor = "#C0C0C0"
    botao_registrar.style.backgroundColor = 'white';
    botao_registrar.style.borderColor = "white"

});

botao_registrar.addEventListener('mouseout', function() {
    botao_registrar.style.backgroundColor = '';
    botao_registrar.style.borderColor = ""
    botao_logar.style.backgroundColor = ''; // Muda o background color do botão 2
    botao_logar.style.borderColor = ""
});

botao2.addEventListener('mouseover', function() {
  botao1.style.backgroundColor = '#ff0000';
});

botao2.addEventListener('mouseout', function() {
  botao1.style.backgroundColor = '';
});
