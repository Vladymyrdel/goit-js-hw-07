import { galleryItems } from './gallery-items.js';

const list = document.querySelector('ul.gallery');

function makeGallery(items) {
    let listElements = items.map(item => {
        let itemEl = document.createElement('li');
        itemEl.classList.add('gallery__item');

        let itemLink = document.createElement('a');
        itemLink.classList.add('gallery__link');
        itemLink.href = item.original;
        itemLink.rel = "noopener noreferrer";
        itemEl.append(itemLink);

        let imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = item.preview;
        imgEl.alt = item.description;
        imgEl.dataset.source = item.original;
        itemLink.append(imgEl);

        return itemEl;
    });
    console.log(listElements);
    list.append(...listElements);
    
};
makeGallery(galleryItems);


list.addEventListener('click', onListCkick,);



function onListCkick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }


  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `, {
    onShow: (instance) => {
      document.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
          instance.close();
        }
      })
    },
                        
    onClose: (instance) => { 
      document.removeEventListener('keydown', () => { });
      list.removeEventListener('click', () => { });
    },
  });   

  instance.show();
}