const form = document.querySelector('#form')

function onSubmit(e) {
    e.preventDefault()
    const inputNameValue = e.target.children.name.value
    const inputMessage = e.target.children.message.value
console.log(inputNameValue.length);
    if(inputNameValue.length < 3){
alert('Your name is too short!')
return
    }
    if(inputMessage.length <10){
alert('Your message is too short!')
return
    }



  alert(`${e.target.children.name.value}, your message is delivered!`)
  form.reset()  
}
form.addEventListener('submit',onSubmit)



///text changer


// const inputName = document.querySelector('[name="name"]')
// const title = document.querySelector('.contactTitle')


// function onInput(e) {

//   if(e.target.value === ''){
//     title.textContent = 'Contact Us'
//    return
//   }

//   title.textContent = e.target.value
  
// }

// inputName.addEventListener('input',onInput)