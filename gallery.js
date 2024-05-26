

const gallery = document.querySelector('.galleryList')



function closeModal (e){
    if(e.target.nodeName === 'IMG'){
        return
        }
e.currentTarget.remove()

}

function onClickGallery (e){


if(e.target.nodeName !== 'IMG'){
return
}


console.log(e.target.src);
const markup = `<div class="modal">
  <img class="content" src=${e.target.src} alt="">

</div>`

document.body.insertAdjacentHTML('beforeend', markup)

document.querySelector('.modal').addEventListener('click', closeModal)


}


gallery.addEventListener('click',onClickGallery)