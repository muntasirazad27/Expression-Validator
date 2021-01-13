// fetch html elements

let email = document.querySelector('#email1')
let numb = document.querySelector('#number1')
let postcode = document.querySelector('#postcode1')



email.addEventListener('submit',checking1)
numb.addEventListener('submit',checking2)
postcode.addEventListener('submit',checking3)
  
function checking1(e) {
    let emailtext = document.querySelector('#email').value
    let reg1 = /(.+)@(.+){2,}\.(.+){2,}/
    if(emailtext === '') {
        alert('empty field!')
    }
    else {
        
        
    if(reg1.test(emailtext)){
        
        alert("Your email is not valid")


    }
    else{
        alert("Your email is not valid")
    }
    }

    document.querySelector('#email').value = '';
    
    
    
    //console.log(emailtext)
    e.preventDefault();
    
}


function checking2(e) {
    let number = document.querySelector('#number').value
    let reg1 = /^01[0-9]{9}$/
    if(number === '') {
        alert('empty field!')
    }
    else {
        
        
    if(reg1.test(number)){
        
        alert("Your number is valid")


    }
    else{
        alert("Your number is not valid")
    }
    }

    document.querySelector('#number').value = '';
    
    
    
    //console.log(emailtext)
    e.preventDefault();
    
}

function checking3(e) {
    let pc = document.querySelector('#postcode').value
    let reg1 = /^12[0-9]{2}$/
    if(pc === '') {
        alert('empty field!')
    }
    else {
        
        
    if(reg1.test(pc)){
        
        alert("Your postcode is valid")


    }
    else{
        alert("Your postcode is not valid")
    }
    }

    document.querySelector('#postcode').value = '';
    
    
    
    //console.log(emailtext)
    e.preventDefault();
    
}








