

const input = document.querySelector('input')
const add = document.querySelector('.add')
const remove = document.querySelector('.remove')
const boxes = document.querySelector('.boxes')


function onAdd(e) {

    const boxAmount = +input.value
console.log(boxAmount);

for (let i = 0; i < boxAmount; i++) {
    
    const markup = `<div class="box">

    </div>
    `
    boxes.insertAdjacentHTML('beforeend', markup)

}
  
input.value = 0
}
function onRemove(e) {

    boxes.innerHTML = ''
    
}

add.addEventListener('click', onAdd)
remove.addEventListener('click', onRemove)
