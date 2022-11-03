import axios from 'axios';

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.

// Fetch images by name
class Pixabay {
  static URL = 'https://pixabay.com/api/';
  static API_KEY = '29730166-90781f613c54edfa0d110c161';
  static PER_PAGE = 12;

  constructor() {}

  static fetchImageByName = async (name, page) => {
    const param = new URLSearchParams({
      key: Pixabay.API_KEY,
      q: name,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: Pixabay.PER_PAGE,
    });

    return axios.get(`${Pixabay.URL}?${param.toString()}`);
  };
}

export { Pixabay };
