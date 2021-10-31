function bodyScale(){
    var devicewidth = document.documentElement.clientWidth;
    var scale = devicewidth / 1440;  // Mother - size of the design
    document.body.style.zoom = scale;
}

window.onload = window.onresize = function () {
    bodyScale()
}


function checkJeSuis(){
    let jeSuis = document.getElementById('selectCategory').value
}
function checkAnciennete(){
    let anciennete = document.getElementById('selectAnciennete').value
}
function checkInputText(){
    let lastName = document.getElementById('lastName').value  
    lastName =  lastName.toUpperCase() 
    document.getElementById('lastName').value = lastName 
    let firstName = document.getElementById('firstName').value
    firstName =  firstName.toUpperCase() 
    document.getElementById('firstName').value = firstName
  
    if(lastName.length <= 1 || !isNaN(lastName)){
        document.getElementById('lastName').style.border = "2px solid red"
    }
    else{
        document.getElementById('lastName').style.border = "2px solid green"
    }
    if(firstName.length <= 1 || !isNaN(firstName)){
        document.getElementById('firstName').style.border = "2px solid red"
    }
    else{
        document.getElementById('firstName').style.border = "2px solid green"
    }
}
function checkInputAge(){
    let age = parseInt(document.getElementById('age').value)
    if(age < 15 || age == null || age == undefined){
       document.getElementById('age').style.border = "2px solid red"
    }
    else{
        document.getElementById('age').style.border = "2px solid green" 
    }
}
function checkEmail(){
    let email = document.getElementById('email').value
    let cpt1 = 0; let cpt2 = 0

    for(let i = 0; i<email.length; i++){
        if(email.charAt(i) == '@'){
            cpt1++
        }
        if(email.charAt(i) == '.'){
            cpt2++
        }
        if(cpt1 == 1 && cpt2 >= 1){
            document.getElementById('email').style.border = '2px solid green'
        }
        else{
            document.getElementById('email').style.border = '2px solid red'
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

// page 1
// if(jeSuis == 'Un particulier'){

// }

// page 4
markBtns = document.querySelectorAll('.markBtns')
mark = document.querySelector('.mark')
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
    })
})
