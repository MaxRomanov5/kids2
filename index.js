const form = document.querySelector('#form')


function onSubmit(e) {
    e.preventDefault()
    console.log(e.target.children.name.value);
  alert(`${e.target.children.name.value}, your message is delivered!`)
  form.reset()  
}


form.addEventListener('submit',onSubmit)