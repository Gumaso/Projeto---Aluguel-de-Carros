var carros_populares_html =`<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Fiat Uno</p>
    <button class="botao_curtir_secao4" id="botao_curtir1" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/Fiat Uno.webp" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Volkswagen Gol
        </p>
    <button class="botao_curtir_secao4" id="botao_curtir2" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/volkswagen-go.jpg" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Ford Ka
        </p>
    <button class="botao_curtir_secao4" id="botao_curtir3" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/ford ka.webp" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Chevrolet Onix
        </p>
    <button class="botao_curtir_secao4" id="botao_curtir4" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/onix.webp" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Renault Kwid
        </p>
    <button class="botao_curtir_secao4" id="botao_curtir5" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/kwid.jpg" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Hyundai HB20
         </p>
    <button class="botao_curtir_secao4" id="botao_curtir6" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/hb20.jpg" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Toyota Etios
        </p>
    <button class="botao_curtir_secao4" id="botao_curtir7" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/toyota-etios.jpg" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>
<div class="blocos_grade_secao4">
<div class="infos_cima_blocos_grade_secao4">
    <p>Nissan March</p>
    <button class="botao_curtir_secao4" id="botao_curtir8" style="background-image: url('/assets/coracao.svg')"></button>
</div>
<img class="imagem_carro_secao4" src="assets/nissan march.jpg" alt="">
<div class="infos_baixo_blocos_grade_secao4">
    <p>R$72.00/ Dia</p>
    <button class="botao_secao4">Alugar</button>
</div>
</div>` 
var carros_grandes_html  = ``
var carros_pequenos_html  = ``
var carros_exclusivos_html  = ``
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


var var_botao1 = document.getElementById("link1_menu_navegacao_links")
var var_botao2 = document.getElementById("link2_menu_navegacao_links")
var var_botao3 = document.getElementById("link3_menu_navegacao_links")
var var_botao4 = document.getElementById("link4_menu_navegacao_links")


var var_botao1 = document.getElementById("link1_menu_navegacao_links");
var_botao1.addEventListener("mouseover", function() {
  var_botao1.style.borderBottom = "3px solid black";
  
});
var_botao1.addEventListener("mouseout", function() {
  var_botao1.style.borderBottom = "";
});

/*CÓDIGOS MUDANÇA BORDA DE BAIXO BOTOES SECAO 4 */
/* BOTAO 1*/
var var_botao1 = document.getElementById("link1_menu_navegacao_links");
var var_texto1 = document.getElementById("texto1_menu_navegacao_links");
var_botao1.addEventListener("mouseover", function() {
  var_botao1.style.borderBottom = "3px solid black";
  var_texto1.style.fontSize = "22px";
  var_texto1.style.color = "black";
  
});
var_botao1.addEventListener("mouseout", function() {
  var_botao1.style.borderBottom = "";
  var_texto1.classList.remove("textos_links_ativado");
  var_texto1.style.fontSize = "";
  var_texto1.style.color = "";

});
/* BOTAO 2*/
var var_botao2 = document.getElementById("link2_menu_navegacao_links");
var var_texto2 = document.getElementById("texto2_menu_navegacao_links");

var_botao2.addEventListener("mouseover", function() {
  var_botao2.style.borderBottom = "3px solid black";
  var_texto2.style.fontSize = "22px";
  var_texto2.style.color = "black";
  
});
var_botao2.addEventListener("mouseout", function() {
  var_botao2.style.borderBottom = "";
   var_texto2.style.fontSize = "";
  var_texto2.style.color = "";
});
/* BOTAO 3*/

var var_botao3 = document.getElementById("link3_menu_navegacao_links");
var var_texto3 = document.getElementById("texto3_menu_navegacao_links");

var_botao3.addEventListener("mouseover", function() {
  var_botao3.style.borderBottom = "3px solid black";
  var_texto3.style.fontSize = "22px";
  var_texto3.style.color = "black";
  
});

var_botao3.addEventListener("mouseout", function() {
  var_botao3.style.borderBottom = "";
   var_texto3.style.fontSize = "";
  var_texto3.style.color = "";
});
/* BOTAO 4*/
var var_botao4 = document.getElementById("link4_menu_navegacao_links");
var var_texto4 = document.getElementById("texto4_menu_navegacao_links");

var_botao4.addEventListener("mouseover", function() {
  var_botao4.style.borderBottom = "3px solid black";
  var_texto4.style.fontSize = "22px";
  var_texto4.style.color = "black";
  
});

var_botao4.addEventListener("mouseout", function() {
  var_botao4.style.borderBottom = "";
  var_texto4.style.fontSize = "";
  var_texto4.style.color = "";
});
function mudarCorBotao(botao){
  if (botao.style.backgroundImage.includes('coracao.svg')) {
    botao.style.backgroundImage = 'url("/assets/coracao_cheio.svg")';
  } 
  else {
    botao.style.backgroundImage = 'url("/assets/coracao.svg")';
  }
};

var botao_curtir1_secao4 = document.getElementById("botao_curtir1")
var botao_curtir2_secao4 = document.getElementById("botao_curtir2")
var botao_curtir3_secao4 = document.getElementById("botao_curtir3")
var botao_curtir4_secao4 = document.getElementById("botao_curtir4")
var botao_curtir5_secao4 = document.getElementById("botao_curtir5")
var botao_curtir6_secao4 = document.getElementById("botao_curtir6")
var botao_curtir7_secao4 = document.getElementById("botao_curtir7")
var botao_curtir8_secao4 = document.getElementById("botao_curtir8")
/*BOTAO CURTIR 1 */
botao_curtir1_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir1_secao4)
});
/*BOTAO CURTIR 2 */
botao_curtir2_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir2_secao4)

});
/*BOTAO CURTIR 3 */
botao_curtir3_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir3_secao4)

});
/*BOTAO CURTIR 4 */
botao_curtir4_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir4_secao4)

});
/*BOTAO CURTIR 5 */
botao_curtir5_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir5_secao4)

});
/*BOTAO CURTIR 6 */
botao_curtir6_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir6_secao4)

});
/*BOTAO CURTIR 7 */
botao_curtir7_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir7_secao4)

});
/*BOTAO CURTIR 8 */
botao_curtir8_secao4.addEventListener("click", function(){
  mudarCorBotao(botao_curtir8_secao4)

});
var pagina_secao_carros = document.getElementById("grade_carros_secao4")
var botao_carros_populares = document.getElementById("link1_menu_navegacao_links")
var botao_carros_grandes = document.getElementById("link2_menu_navegacao_links")
var botao_carros_pequenos = document.getElementById("link3_menu_navegacao_links")
var botao_carros_exclusivos= document.getElementById("link4_menu_navegacao_links")

botao_carros_populares.addEventListener("click", function(){
  pagina_secao_carros.innerHTML = ''
})
/*SECAO 6 */
var radio = document.querySelector(".manual_btn")
var cont = 1;
document.getElementById("radio1").checked = true

setInterval(() => {
    proximaImg()
}, 5000)


function proximaImg(){
    cont ++
    if (cont > 6){
        cont = 1
    }
    document.getElementById(`radio${cont}`).checked = true

}
/*FIM SECAO 6 */

/*INICIO SECAO 7 */
var var_radio1 = document.getElementById("radio1_secao7");
var var_radio2 = document.getElementById("radio2_secao7");
var var_radio3 = document.getElementById("radio3_secao7");
var var_radio4 = document.getElementById("radio4_secao7");


var_radio1.addEventListener("click", function() {
    if (var_radio1.checked  == true){
        var_radio2.checked  = false
        var_radio3.checked  = false
        var_radio4.checked  = false}
    
});


var_radio2.addEventListener("click", function(){
    if (var_radio2.checked  == true){
        var_radio1.checked  = false
        var_radio3.checked  = false
        var_radio4.checked  = false}

})

var_radio3.addEventListener("click", function(){
    if (var_radio3.checked  == true){
        var_radio1.checked  = false
        var_radio2.checked  = false
        var_radio4.checked  = false}

})
var_radio4.addEventListener("click", function(){
  if (var_radio4.checked  == true){
      var_radio1.checked  = false
      var_radio2.checked  = false
      var_radio3.checked  = false}

})
/*FIM SECAO 7 */
