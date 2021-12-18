import { galleryItems } from './gallery-items.js';

class Gallerey1 {
    constructor (preview, original, description) {
        this.preview = preview
        this.original = original
        this.description = description
   }
}

// получим родителя для нашей галереии
const gallerey = document.querySelector( '.gallery' )


// функция динамической разметки передаем в нее любой  массив изображений и рендерим разметку
const html = (gallery) => {
    return gallery.map( ( img ) => {
        const imgEl = new Gallerey1( img.preview, img.original, img.description )
        const htmlEl = `<a class="gallery__item" href="${imgEl.original}">
            <img class="gallery__image" src="${imgEl.preview}" title ="${imgEl.description}" alt="${imgEl.description}" />
            </a>`
       return htmlEl
    })
}
      
// повесим нашу разметку на сайт
gallerey.insertAdjacentHTML("beforeend", html(galleryItems).join(""))

//  в аргументы передаем настройки для новой галереи
let gallerySet = new SimpleLightbox( '.gallery a', { captionPosition: "bottom", captionDelay: 250 } );

gallerySet.on( 'show.simplelightbox', function () {
    console.log( "Получаеться прослушивать клики даже ненужно, все уже есть под капотом" )
} );