
//pegar botao menu

let bot_menu=document.querySelector('#botao_menu');
let linksbot=document.querySelector('#links');

// Função para o menu

let link_mobile=document.querySelector('#links');

bot_menu.onclick=function menu_toggle(){

  

    if(link_mobile.style.display=='none'){
        link_mobile.style.display='flex';
       
    }else{
        link_mobile.style.display='none';
    }
}





