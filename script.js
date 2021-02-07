/*
*UNIVERSIDAD DEL VALLE DE GUATEMALA
*SISTEMAS Y TECNOLOGIAS WEB/LAB05 JS
*@author: Edwin Eduardo Ramirez Herrera
* 19946
*/



let refresh;
var nxtln = document.createElement('br');

let primaryColor = '#3A48B2';
let secondColor = '#555765';
let lightColor = '#C7CCED';
let backColor = '#DFDFDF';

window.onload = function(){
  createUser();
  loadingCircle();

  //document.body.style.backgroundColor = "white";
  document.body.style.padding = "cover";
  document.body.style.fontFamily = "PT Sans";
  document.body.style.backgroundImage="linear-gradient(45deg, rgba(27,94,215,1) 0%, rgba(43,233,206,1) 100%)";
  document.body.style.backgroundSize="100vw";

}

function createUser(){

//login container
  var logContainer = document.createElement('FORM');
  logContainer.id ='divLogin';

  logContainer.style.border="0";
  //logContainer.style.boxShadow = "5px 5px 2px #1b5ed7";
  logContainer.style.borderRadius="20px";
  logContainer.style.backgroundColor="white";
  logContainer.style.padding="60px";
  logContainer.style.position="absolute";
  logContainer.style.left="50%";
  logContainer.style.top="50%";
  logContainer.style.transform="translate(-50%, -50%)";
  logContainer.style.alignContent="center";

  document.body.appendChild(logContainer);

//header of container
  var headerLog = document.createElement('div');
  headerLog.id ='divLogin1';

  headerLog.style.border="0";
  headerLog.style.borderRadius="20px 20px 0px 0px";
  headerLog.style.background="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,81,208,1) 100%)";
  headerLog.style.paddingTop="20px";
  headerLog.style.paddingBottom="20px";
  headerLog.style.marginLeft="-60px";
  headerLog.style.marginRight="-60px";
  headerLog.style.marginTop="-60px";
  headerLog.style.display="flex";
  headerLog.style.flexDirection="column";

  logContainer.appendChild(headerLog);

//h3 with title
  var logTxt = document.createElement('H3');
  var textA = document.createTextNode("User Login");
  logTxt.style.textAlign="center";
  logTxt.style.fontWeight="bold";
  logTxt.style.marginTop="35px";
  logTxt.style.display="flex";
  logTxt.style.flexDirection="column";

  logTxt.appendChild(textA);
  logContainer.appendChild(logTxt);

//input for the username

  var user = document.createElement('input');

  user.id = "username";

  user.setAttribute("type", "text");
  user.setAttribute("placeholder", "Username");
  user.style.padding="6px";
  user.style.margin="auto";
  user.style.marginTop="30px";
  user.style.border="0";
  user.style.borderRadius="8px";
  user.style.backgroundColor=backColor;
  user.style.display="flex";
  user.style.flexDirection="column";

  user.style.fontFamily="PT Sans";

  logContainer.appendChild(user);

  logContainer.appendChild(nxtln);

//login button
  var logButt = document.createElement('button');
  var textB = document.createTextNode('LOGIN');

  logButt.setAttribute("type", "submit");
  logButt.id ="btnlog";
  logButt.style.marginTop="25px";
  logButt.style.background="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,81,208,1) 100%)";
  logButt.style.border="0"
  logButt.style.paddingLeft="46px";
  logButt.style.paddingRight="46px";
  logButt.style.paddingTop="6px";
  logButt.style.paddingBottom="6px";
  logButt.style.marginRight="15px";
  logButt.style.marginLeft="15px";
  logButt.style.marginTop="10px";
  logButt.style.borderRadius="16px";
  logButt.style.color="white";
  logButt.style.fontFamily="PT Sans";
  logButt.style.fontWeight="Bold";

  logButt.appendChild(textB);
  logContainer.appendChild(logButt);


  const name = document.getElementById("username");

  divLogin.addEventListener("submit", (e) =>{

    e.preventDefault();
    checkInput();
  });
  
}
function checkInput(){

  if(name.value === ''){
    setErrorFor();
  }else{
    hideLogin();
  }
}

function setErrorFor(){
  alert("Nombre de usuario requerido");
}

//funcion para ocultar ventana de login
function hideLogin(){
  div = document.getElementById('divLogin');
  div1 = document.getElementById('divLogin1');

  div.style.display='none';
  div1.style.display='none';

  showLoader();
  waitTime();

  //console.log("entre al metodo");
}

function showLogin(){
  div = document.getElementById('divLogin');
  div1 = document.getElementById('divLogin1');

  div.style.display='';
  div1.style.display='';
}

function loadingCircle(){

  var loader = document.createElement('div');
  loader.id = "loader";
  loader.style.position="absolute";
  loader.style.display="none";
  loader.style.right="50%";
  loader.style.top="50%";
  loader.style.transform="translate(-50%, -50%)";
  loader.style.border = "12px solid #64F0D7";
  loader.style.borderRadius="50%";
  loader.style.borderTop="12px solid white";
  loader.style.width="80px";
  loader.style.height="80px";
  loader.style.marginLeft="auto";
  loader.style.marginRight="auto";
  loader.style.animation="spin 2s linear infinite";
  loader.style.alignContent="center";
  document.body.appendChild(loader);

}
//mostrar el loader
function showLoader(){
  load = document.getElementById('loader');
  load.style.display='';
  //console.log("entre al metodo");
}
//ocultar el loader
function hideLoader(){
  load = document.getElementById('loader');
  load.style.display='none';
  //console.log("entre al metodo");
}
//esperar antes de mostrar chat
function waitTime(){
  var time = setTimeout(showChat, 2000);
}
//mostrar chat
function showChat(){
  hideLoader();
// container del chat
  var chatContainer = document.createElement("div");

  chatContainer.style.border="0";
  //chatContainer.style.boxShadow = "5px 5px 2px #1b5ed7";
  chatContainer.style.borderRadius="15px";
  chatContainer.style.backgroundColor="white";
  chatContainer.style.width="420px";
  chatContainer.style.height="550px";
  chatContainer.style.marginLeft="auto";
  chatContainer.style.marginRight="auto";
  chatContainer.style.marginTop="55px";
  chatContainer.style.marginBottom="55px";
  chatContainer.style.display="block";
  chatContainer.style.flexDirection="column";
  

  document.body.appendChild(chatContainer);
//header del chat
  var chatHeader = document.createElement('div');
  chatHeader.style.border="0";
  chatHeader.style.borderRadius="15px 15px 0px 0px";
  chatHeader.style.background="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,81,208,1) 100%)";
  chatHeader.style.width="420px";
  chatHeader.style.height="70px";
  
  
  chatHeader.style.display="flex";
  chatHeader.style.flexDirection="row";

  chatContainer.appendChild(chatHeader);

  const name = document.getElementById("username");
  const usern = name.value;
//detalles del perfil
  var profName = document.createElement("H3");
  profName.style.color="black";
  profName.style.textAlign="center";
  profName.innerHTML = usern;
  profName.style.padding="0";
  profName.style.margin="0";
  profName.style.marginTop="auto";
  profName.style.marginBottom="auto";
  profName.style.marginLeft="auto";
  profName.style.marginRight="auto";

  chatHeader.appendChild(profName);

  var iconUser = document.createElement("IMG");
  iconUser.setAttribute("src", "icons/icon1.png");
  iconUser.style.width="35px";
  iconUser.style.height="35px";
  iconUser.style.margin="0";
  iconUser.style.marginTop="auto";
  iconUser.style.marginBottom="auto";
  iconUser.style.marginLeft="200px";
  iconUser.style.marginRight="auto";
  
  chatHeader.appendChild(iconUser);
  
  var messages = document.createElement("div");

  messages.style.background="white";
  messages.style.height="395px";
  messages.style.width="400px";
  chatContainer.appendChild(messages);

//type area
  var typearea = document.createElement("TEXTAREA");

   typearea.id = "typearea";
   typearea.maxLength = "140";
   typearea.placeholder = "Escribe un mensaje aquí";
   typearea.style.fontFamily="PT Sans";
   typearea.autofocus = "true";
   typearea.style.color = 'black';
   typearea.style.padding = "10px";
   typearea.style.width = "320px";
   typearea.style.height = "63px";
   typearea.style.border = "2px solid #C7CCED ";
   typearea.style.borderLeft = "none";
   typearea.style.borderRight = "none";
   typearea.style.borderBottom = "none";
   typearea.style.borderRadius="0px 0px 15px 15px";
   typearea.style.display="relative";
   typearea.style.bottom = "0";
   
   typearea.style.resize="none";

  chatContainer.appendChild(typearea);

  var send = document.createElement("button");

  send.id ="sendButton";

  send.style.height="85px";
  send.style.width="80px";
  send.style.background="linear-gradient(45deg, rgba(4,133,6,1) 0%, rgba(13,255,0,1) 100%)";
  send.style.border="0";
  send.style.borderRadius="0px 0px 15px 0px";
  send.style.position="absolute";
  send.innerHTML="Enviar";
  send.style.fontFamily="PT Sans";
  send.style.fontWeight="bold";
  send.style.color="white";

  chatContainer.appendChild(send);

  var sndbt = document.getElementById("sendButton");
  sndbt.addEventListener("click", (e)=>{
    var text = e.target.value;
    msgGlobe();
  });

  var intro = document.getElementById("typearea");

  intro.addEventListener("keydown",function(e){
    if(e.key === 'Enter'){
      (e)=>{
        var text = e.target.value;
        msgGlobe();
      }
    }
  });

}

function msgGlobe(){

  var msg = document.createElement("div");
  msg.style.width = "400px";
  msg.style.minHeight = "60px";
  msg.style.display = "flex";
  msg.style.backgroundColor = "white";
  msg.style.borderRadius = "80px 50px 50px 0px";
  msg.style.fontcolor = "black";  
  var msgText = document.getElementById("typearea").value;
  msg.textContent = msgText;
  messages.appendChild(msg);
}



//CREAR CHAT
