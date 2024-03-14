import { CREAT_PHOTO } from './data.js';

const list = document.querySelector('.pictures');
function photo(array) {
  const blockElementLink = document.querySelector('#picture').content.querySelector('.picture');
  const imgTeg = blockElementLink.querySelector('.picture__img');
  const commentTeg = blockElementLink.querySelector('.picture__comments');
  const likes = blockElementLink.querySelector('.picture__likes');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    const cloneBlockElementLink = blockElementLink.cloneNode(true);
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
