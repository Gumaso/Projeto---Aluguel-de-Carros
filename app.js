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
  console.log("ola")
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
  console.log("ola")
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
  console.log("ola")
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
  console.log("ola")
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
  console.log("ola")
  var_botao4.style.borderBottom = "3px solid black";
  var_texto4.style.fontSize = "22px";
  var_texto4.style.color = "black";
  
});

var_botao4.addEventListener("mouseout", function() {
  var_botao4.style.borderBottom = "";
  var_texto4.style.fontSize = "";
  var_texto4.style.color = "";
});

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
