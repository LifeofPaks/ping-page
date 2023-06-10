const input = document.querySelector('.input')
const errorMessage = document.querySelector('.error-message')

input.addEventListener('input', ()=>{

    if(input.value == ''){
        input.classList.add('error')
        errorMessage.classList.add('active')
    } 
    else if(input.value != ""  && input.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        input.classList.remove('error')
        errorMessage.classList.remove('active')
    }

})
