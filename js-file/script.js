function bodyScale(){
    var devicewidth = document.documentElement.clientWidth;
    var scale = devicewidth / 1440;  // Mother - size of the design
    document.body.style.zoom = scale;
}

window.onload = window.onresize = function () {
    bodyScale()
}

let noteFinale = 0

function selectUsed(selectedId){
    let selectId = document.getElementById(selectedId)
    if(!selectId.value){
        selectId.style.border = '2px solid red'
    }
    else{
        selectId.style.border = '2px solid green'
    }
}
function checkInputText(str){
    let strg = document.getElementById(str).value  
    strg =  strg.toUpperCase() 
    document.getElementById(str).value = strg   
    if(strg.length <= 1 || !isNaN(strg)){
        document.getElementById(str).style.border = "2px solid red"
    }
    else{
        document.getElementById(str).style.border = "2px solid green"
    }
}
function checkInputAge(){
    let age = parseInt(document.getElementById('age').value)
    if(age < 15 || !age){
       document.getElementById('age').style.border = "2px solid red"
    }
    else{
        document.getElementById('age').style.border = "2px solid green" 
    }
}
function checkEmail(){
    let email = document.getElementById('email').value
    let cpt1 = 0; let cpt2 = 0
    if(!email){
        document.getElementById('email').style.border = '2px solid red'
    }
    for(let i = 0; i<email.length; i++){
        if(email.charAt(i) == '@'){
            cpt1++
        }
        if(email.charAt(i) == '.'){
            cpt2++
        }
        if(cpt1 != 1 || cpt2 < 1){
            document.getElementById('email').style.border = '2px solid red'
        }
        else{
            document.getElementById('email').style.border = '2px solid green'
        }
    }
}
function checkNumberPhone(){
    let numberPhone = document.getElementById('numberPhone').value
    let checking = /[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}/.test(numberPhone)
    if(numberPhone.length != 14 && checking == false){
        document.getElementById('numberPhone').style.border = '2px solid red'
    }
    else{
        document.getElementById('numberPhone').style.border = '2px solid green'
    }
}
// si click sur bouton suivant et aucun champs n'est rempli = bordures rouges activées
function preventContinuing(){
    let inputs = document.getElementsByTagName('input')
    let selects = document.getElementsByTagName('select')
    
    for(let i = 0; i < inputs.length - 1; i++){
        if(!inputs[i].value){
            inputs[i].style.border = '2px solid red'
        }
    }
    for(let i = 0; i < selects.length; i++){
        if(!selects[i].value){
            selects[i].style.border = '2px solid red'
        }
    }
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function activatingCookie(){

    let lastName = document.getElementById('lastName')
    lastName = document.getElementById('lastName').value
    setCookie('lastName', lastName, 3)
    let firstName = document.getElementById('firstName')
    firstName = document.getElementById('firstName').value
    setCookie('firstName', firstName, 3)
    
    
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// afficher nom + prénom grâce au cookie
let identite = document.querySelector('.identite')
if(identite){
    let resultLastName = getCookie('lastName')
    let resultFirstName = getCookie('firstName')
    identite.textContent = resultLastName + " " + resultFirstName
}



let delaiDeReponse = document.querySelector('input[name="response_wait"]:checked')
let easyFind = document.querySelector('input[name="easyFind"]:checked')
let responseWait = document.querySelector('input[name="responseWait"]:checked')
if(delaiDeReponse){
    noteFinale += parseInt(delaiDeReponse.value)
    // console.log(noteFinale);
}
if(easyFind){
    noteFinale += parseInt(easyFind.value)
    // console.log(noteFinale);
}
if(responseWait){
    noteFinale += parseInt(responseWait.value)
    // console.log(noteFinale);
}

// Page 4 : boutons pour créer note sur 10 
mark = document.querySelector('.mark')
if(mark){
    markBtns = document.querySelectorAll('.markBtns')
    let count = 10
    mark.innerHTML = count

    markBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            let hasIncrease = e.currentTarget.classList.contains('increase')
            let hasDecrease = e.currentTarget.classList.contains('decrease')
            if(hasIncrease && count < 10){
                count++
            }
            else if(hasDecrease && count > 0){
                count--
            }
            mark.innerHTML = count
            noteFinale += count
        })
    })
}
// fin page 4 boutons note sur 10

let degreDeSatisfaction = document.querySelector('.degreDeSatisfaction')
if(document.querySelector('.degreDeSatisfaction')){
    document.querySelector('.degreDeSatisfaction').innerHTML = noteFinale
}