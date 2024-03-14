import { CREAT_PHOTO } from "./data.js"
/*
Описание изображения description подставьте в атрибут alt изображения.
Количество лайков likes выведите в блок .picture__likes.
Количество комментариев comments выведите в блок .picture__comments.
Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте

  <template id="picture">
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
  </template>

*/
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
