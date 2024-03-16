import { CREAT_COMMENT } from './util.js';

const commenFn = CREAT_COMMENT();

const popap = document.querySelector('.big-picture');
const mainPicture = popap.querySelector('.big-picture__img img');
const btnClose = popap.querySelector('.cancel');
const picturesList = document.querySelector('.pictures');
const likeMain = popap.querySelector('.likes-count');
const numberCommentText = document.querySelector('.social__comment-shown-count');
const listComment = document.querySelector('.social__comments');

function createComment(commentOBJ) {
  const cloneBlock = document.querySelector('.social__comment').cloneNode(true);
  const cloneImg = cloneBlock.querySelector('.social__picture');
  const cloneDesc = cloneBlock.querySelector('.social__text');
  const fragmet = document.createDocumentFragment();
  cloneImg.src = commentOBJ.avatar;
  cloneDesc.textContent = commentOBJ.message;
  return fragmet.appendChild(cloneBlock);
}
const commentUser = createComment(commenFn);

picturesList.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.className === 'picture__img') {
    popap.classList.remove('hidden');
    mainPicture.src = target.src;
    likeMain.textContent = target.parentNode.querySelector('.picture__likes').textContent;
    numberCommentText.textContent = target.parentNode.querySelector('.picture__comments').textContent;
    const likeCount = parseInt(likeMain.textContent, 10);
    listComment.innerHTML = '';
    for (let i = 0; i < likeCount; i++) {
      listComment.appendChild(commentUser);
    }
  }

});

btnClose.addEventListener('click', () => {
  popap.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    popap.classList.add('hidden');
  }
});
