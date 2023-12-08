// services/api.js
const API_KEY = '39981844-a5c860657bd892c0024acfeec';

const fetchImages = async (query, page) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchImages;
