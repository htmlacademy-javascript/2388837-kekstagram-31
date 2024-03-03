const id = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
]
// генерация url
const url_fn_wrapper = () => {
    let all_array_photo = [];
    return function url_cicle() {
        for (let i = 0; i < id.length; i++) {
            all_array_photo.push('..photos/' + id[i] + '.jpg');
        }
        return all_array_photo;
    }
}
// делает из типа функции в массив 
const generaite = url_fn_wrapper();
const avatar= generaite();

const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

const name = [
    'Maga',
    'Sergo',
    'Zud',
    'Zoxa',
    'Tigo',
];

const get_random_integer = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const get_random_array_rlement=(elements)=>elements[get_random_integer(0,elements.length-1)];
const obj_person=()=>({
    id:get_random_array_rlement(id),
    avatar:get_random_array_rlement(avatar),
    message:get_random_array_rlement(message),
    name:get_random_array_rlement(name),
});
const number_repeat= 30;
const repeat_obj = Array.from({length: number_repeat}, obj_person);
console.log(repeat_obj)