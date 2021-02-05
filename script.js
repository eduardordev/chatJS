/*
*UNIVERSIDAD DEL VALLE DE GUATEMALA
*SISTEMAS Y TECNOLOGIAS WEB/LAB05 JS
*@author: Edwin Eduardo Ramirez Herrera
* 19946
*/


var chatContainernput;
var chatContainer;
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
  loader.style.borderTop="12px solid black";
  loader.style.width="80px";
  loader.style.height="80px";
  loader.style.marginLeft="auto";
  loader.style.marginRight="auto";
  loader.style.animation="spin 2s linear infinite";
  document.body.appendChild(loader);

}

function showLoader(){
  load = document.getElementById('loader');
  load.style.display='';
  console.log("entre al metodo");
}

function hideLoader(){
  load = document.getElementById('loader');
  load.style.display='none';
  console.log("entre al metodo");
}

function createUser(){

//login container
  var logContainer = document.createElement('div');
  logContainer.id ='divLogin';

  logContainer.style.border="0";
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

  document.getElementById("btnlog").addEventListener("click", hideLogin);

}

//funcion para ocultar ventana de login
function hideLogin(){
  div = document.getElementById('divLogin');
  div1 = document.getElementById('divLogin1');

  div.style.display='none';
  div1.style.display='none';

  showLoader();

  console.log("entre al metodo");
}



//FALTA MOSTRAR LOADER Y CREAR CHAT
