'use strict';

const movies = [];

const number = parseInt(prompt('How many movies do you want to rate?'));

for (let i = 0; i < number; i++) {
  const title = prompt(`Enter the title of movie ${i + 1}:`);
  const rating = parseFloat(prompt(`Enter your rating (1-5) for "${title}":`));

  const movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

const movieList = document.getElementById('movieList');

for (const movie of movies) {
  const listItem = document.createElement('li');
  listItem.textContent = `${movie.title} - Rating: ${movie.rating}/5`;
  movieList.append(listItem);
}

if (movies.length > 0) {
  const bestMovie = movies[0];

  document.getElementById('bestMovie').textContent =
    `The best-rated movie is "${bestMovie.title}" with a rating of ${bestMovie.rating}/5.`;
}
