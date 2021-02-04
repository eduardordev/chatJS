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
let backColor = '#EBEBEB';

window.onload = function(){
  createUser();

  document.body.style.backgroundColor = "white";
  document.body.style.padding = "16px";
  document.body.style.fontFamily = "PT Sans";
  document.body.style.backgroundImage = "url(hexa.png)";

}

function createUser(){

//login container
  var logContainer = document.createElement('div');

  logContainer.style.border="1px solid #ACAEB6";
  logContainer.style.borderRadius="20px";
  logContainer.style.backgroundColor=backColor;
  logContainer.style.padding="40px";
  logContainer.style.position="absolute";

  document.body.appendChild(logContainer);

//input for the username
  var user = document.createElement('input');

  user.setAttribute("type", "text");
  user.setAttribute("placeholder", "Username");
  user.style.fontfamily="calibri";
  user.style.padding="6px";
  user.style.border="1px solid #ACAEB6"
  user.style.borderRadius="8px";
  user.style.fontFamily="PT Sans";

  logContainer.appendChild(user);

  logContainer.appendChild(nxtln);

//login button
  var logButt = document.createElement('button');
  var textB = document.createTextNode('LOGIN');

  logButt.style.marginTop="25px";
  logButt.style.background="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,81,208,1) 100%)";
  logButt.style.border="0"
  logButt.style.paddingLeft="66px";
  logButt.style.paddingRight="66px";
  logButt.style.paddingTop="6px";
  logButt.style.paddingBottom="6px";
  logButt.style.borderRadius="16px";
  logButt.style.color="white";
  logButt.style.fontFamily="PT Sans";
  logButt.style.fontWeight="Bold";

  logButt.appendChild(textB);
  logContainer.appendChild(logButt);
  //const login = document.querySelector(".btnadd")

}
