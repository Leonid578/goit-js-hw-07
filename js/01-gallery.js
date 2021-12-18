import { galleryItems } from './gallery-items.js';

const galleryConteiner  = document.querySelector('.gallery')

const photoMarkup = createGalleryy(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', photoMarkup);


function createGalleryy(galleryItems) {
return galleryItems.map(({preview, original, description}) => 
  { return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `
  }).join('')
};

galleryConteiner.addEventListener( "click", onGalleryClick );

function onGalleryClick(evt) {
    evt.preventDefault()
    const imgItem = evt.target.classList.contains('gallery__image');
    if (!imgItem) {
      return
    }
    console.log(evt.target.dataset.source);
  
    const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="1400" height="900">
  `)
  
    instance.show()
    
    document.addEventListener("keydown", evt => {
      if (evt.code === "Escape") {
      instance.close(() => console.log('lightbox not visible anymore'))
    }
  });
  }