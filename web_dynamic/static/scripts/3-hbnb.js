document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search/';

  async function searchPlaces () {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const placesSection = document.querySelector('.places');
      placesSection.innerHTML = '';

      data.forEach(place => {
        const article = document.createElement('article');
        article.innerHTML = `
                    <h2>${place.name}</h2>
                    <p>${place.description}</p>
                    <p>Price: $${place.price_by_night}</p>
                `;
        placesSection.appendChild(article);
      });
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  }

  searchPlaces();
});
