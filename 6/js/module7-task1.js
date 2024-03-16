import { CREAT_PHOTO } from './util.js';

const list = document.querySelector('.pictures');
function photo(array) {
  const blockElementLink = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    const cloneBlockElementLink = blockElementLink.cloneNode(true);
    const imgTeg = cloneBlockElementLink.querySelector('.picture__img');
    const commentTeg = cloneBlockElementLink.querySelector('.picture__comments');
    const likes = cloneBlockElementLink.querySelector('.picture__likes');
    cloneBlockElementLink.dataset.id = i;
    imgTeg.src = CREAT_PHOTO[i].url;
    imgTeg.alt = CREAT_PHOTO[i].description;
    commentTeg.textContent = CREAT_PHOTO[i].comments.length;
    likes.textContent = CREAT_PHOTO[i].likes;
    fragment.appendChild(cloneBlockElementLink);
  }
  return fragment;
}

const creadPhoto = photo(CREAT_PHOTO);
list.appendChild(creadPhoto);

export{photo};
