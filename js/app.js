


//Criando array de peças

let pecas_painel=['graf1.png','graf2.png','graf3.png','graf4.png','graf5.png','graf6.png','graf7.png'];
pecas_painel.reverse();

let legendas=['Panfleto para pizarria','DVD para projeto educativo','Panfleto para divulgação de serviços','Logomarcas diversas','Cartões de visitas - diversos','Arte para status','Cartaz promocional'];
legendas.reverse();
let painelDesign=document.querySelector('#painelDesign2');
let legendaGraf=document.querySelector('.tooltip');

for(let conta=0;conta<=6;conta++){

    let pecas_Item='<div class="pecas" style="background-image:url(img/'+pecas_painel[conta]+'); "><span class="tooltip">'+legendas[conta]+'</span></div>';
    painelDesign.insertAdjacentHTML('afterbegin',pecas_Item);

}



//Pegando modal design grafico
//let modalG=document.querySelector('#graficModel');


//pegando design Grande

//let designG=document.querySelector('#designBig');



//pegando botoes design grafico

//let design1=document.querySelector('#p1');

/*função botao design 1

design1.onclick=function Mostra_peca(){

  modalG.style.display='flex';
  designG.style="background-color:transparent;background-image:url(ANTIRABICA1.png);background-size:contain;background-repeat:no-repeat;background-position:center;"
  
}
*/
/*Fechar o modal

modalG.onclick=function fechar_peca(){
    modalG.style.display='none';
}
*/

//Selecionando os botoes de ilustração
let tabagismo=document.querySelector('#ilust1');
let havai=document.querySelector('#ilust2');
let oscarito=document.querySelector('#ilust3');
let vacina=document.querySelector('#ilust4');
let fred=document.querySelector('#ilust5');
let hair=document.querySelector('#ilust6');


//Selecionando painel de ilustração
let painelIlust=document.querySelector('#painelIlustra');



//função para o botão 1 de ilustrações
tabagismo.onclick = function taba1(){
painelIlust.style.backgroundImage='url(../img/TABAGISMO.png) ';
painelIlust.style.backgroundRepeat='no-repeat';
painelIlust.style.backgroundSize='contain';
painelIlust.style.backgroundPosition='center';
painelIlust.style.transform='translate(1)';
painelIlust.style.animation='none';

}

//função para o botão 2 de ilustrações
havai.onclick = function taba2(){
    painelIlust.style.backgroundImage='url(../img/havai.jpg) ';
    painelIlust.style.backgroundRepeat='no-repeat';
    painelIlust.style.backgroundSize='contain';
    painelIlust.style.backgroundPosition='center';
    painelIlust.style.animation='none';
    }


//função para o botão 3 de ilustrações
oscarito.onclick = function taba3(){
    painelIlust.style.backgroundImage='url(../img/grande_Otelo_Oscarito.jpg) ';
    painelIlust.style.backgroundRepeat='no-repeat';
    painelIlust.style.backgroundSize='contain';
    painelIlust.style.backgroundPosition='center';
    painelIlust.style.animation='none';
    }

//função para o botão 4 de ilustrações
vacina.onclick = function taba4(){
    painelIlust.style.backgroundImage='url(../img/vacina1.jpg) ';
    painelIlust.style.backgroundRepeat='no-repeat';
    painelIlust.style.backgroundSize='contain';
    painelIlust.style.backgroundPosition='center';
    painelIlust.style.animation='none';
    }

//função para o botão 5 de ilustrações
fred.onclick = function taba5(){
    painelIlust.style.backgroundImage='url(../img/diaristas2.png) ';
    painelIlust.style.backgroundRepeat='no-repeat';
    painelIlust.style.backgroundSize='contain';
    painelIlust.style.backgroundPosition='center';
    painelIlust.style.animation='none';
    }    
    
//função para o botão 6 de ilustrações
hair.onclick = function taba6(){
    painelIlust.style.backgroundImage='url(../img/Manuela_Hair.jpg) ';
    painelIlust.style.backgroundRepeat='no-repeat';
    painelIlust.style.backgroundSize='contain';
    painelIlust.style.backgroundPosition='center';
    painelIlust.style.animation='none';
    }    
        

let galeria3d=document.querySelector('#gal3d');

let fundo=['3d1.png','3d2.png','3d3.png','3d4.png','3d5.png','3d6.png','3d7.png','3d8.png',];
let titu3d=['Smalte Mocup','Modelagem orgânica','Stand exposição','Mocup - Achocolatado','Bolo no pote','Interiores Diversos','MP3 Player','Sabonete Líquido',];
titu3d.reverse();

let paragrafo=[];
paragrafo[0]=" Modelagem de um mocup para rotulagem de produtos.";
 paragrafo[1]=" Modelagem orgânica de uma formiga numa planta ao ar livre.";
 paragrafo[2]=" Modelagem de stand expositivo para feiras.";
 paragrafo[3]=" Modelagem de um mocup para embalagem de produtos.";
 paragrafo[4]=" Modelagem de um mocup para bolo no pote";
 paragrafo[5]=" Modelagem para ambientes em geral - interiores e exteriores";
 paragrafo[6]=" Modelagem publicitária para anúncios e Outdors";
 paragrafo[7]=" Modelagem de um mocup para rotulagem de produtos.";
 

 paragrafo.reverse();
 

//let item='<div class="item-3d" ><div class="texto3d"><h1>Sabonete líquido - Natus Cheiro  </h1><p>Modelagem de produto e rotulagem para produto de fabricação artesanal. Modelagem e composição feita com softeares Blender e Gimp.</p></div></div>';

for(let i=0; i<=7;i++){

    let item='<div class="item-3d" style="background-image:url(../img/'+fundo[i]+');"><div class="texto3d"><h1>'+titu3d[i]+'</h1><p>'+paragrafo[i]+'</p></div></div>';

galeria3d.insertAdjacentHTML('afterbegin',item);
    
}

//pegar botao menu

let bot_menu=document.querySelector('#botao_menu');

// Função para o menu

let link_mobile=document.querySelector('#links');

bot_menu.onclick=function menu_toggle(){

  

    if(link_mobile.style.display=='none'){
        link_mobile.style.display='flex';
       
    }else{
        link_mobile.style.display='none';
    }
}

