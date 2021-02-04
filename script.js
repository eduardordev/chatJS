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
  document.body.style.padding = "5px";
  document.body.style.fontFamily = "PT Sans";
  document.body.style.background="linear-gradient(45deg, rgba(27,94,215,1) 0%, rgba(43,233,206,1) 100%)";

}

function createUser(){

//login container
  var logContainer = document.createElement('div');

  logContainer.style.border="1px solid #ACAEB6";
  logContainer.style.borderRadius="20px";
  logContainer.style.backgroundColor=backColor;
  logContainer.style.padding="60px";
  logContainer.style.position="absolute";
  logContainer.style.left="50%";
  logContainer.style.top="50%";
  logContainer.style.transform="translate(-50%, -50%)";

  document.body.appendChild(logContainer);

//header of container
  var headerLog = document.createElement('div');

  headerLog.style.border="0";
  headerLog.style.borderRadius="20px 20px 0px 0px";
  headerLog.style.background="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,81,208,1) 100%)";
  headerLog.style.paddingTop="3px";
  headerLog.style.paddingBottom="3px";
  headerLog.style.padding="15px";
  headerLog.style.paddingLeft="125px";
  headerLog.style.paddingRight="125px";
  headerLog.style.marginTop="-50px;"




//input for the username
  var user = document.createElement('input');

  user.setAttribute("type", "text");
  user.setAttribute("placeholder", "Username");
  user.style.fontfamily="calibri";
  user.style.padding="6px";
  user.style.border="1px solid #ACAEB6"
  user.style.borderRadius="8px";
  user.style.marginTop="15px";
  user.style.fontFamily="PT Sans";

  logContainer.appendChild(user);

  logContainer.appendChild(nxtln);

//login button
  var logButt = document.createElement('button');
  var textB = document.createTextNode('LOGIN');

  logButt.style.marginTop="25px";
  logButt.style.background="linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(11,81,208,1) 100%)";
  logButt.style.border="0"
  logButt.style.paddingLeft="46px";
  logButt.style.paddingRight="46px";
  logButt.style.paddingTop="6px";
  logButt.style.paddingBottom="6px";
  logButt.style.marginRight="15px";
  logButt.style.marginLeft="15px";
  logButt.style.marginTop="35px";
  logButt.style.borderRadius="16px";
  logButt.style.color="white";
  logButt.style.fontFamily="PT Sans";
  logButt.style.fontWeight="Bold";

  logButt.appendChild(textB);
  logContainer.appendChild(logButt);
  //const login = document.querySelector(".btnadd")

}
