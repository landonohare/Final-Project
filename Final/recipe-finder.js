document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBox').value;
    searchRecipes(searchTerm);
});

function searchRecipes(searchTerm) {
    const url = `https://api.spoonacular.com/food/products/search?query=${encodeURIComponent(searchTerm)}&apiKey=e5305a5e96b74a34a6dd969395901a1f`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => displayRecipes(data.products)) // Assuming the array is in data.products
        .catch(error => console.error('Error fetching data: ', error));
}

function displayRecipes(products) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    products.forEach(product => {
        const recipeCard = `
            <div class="recipe-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.summary}</p>
                <a href="${product.detailsUrl}" target="_blank" class="details-link">View Recipe</a>
            </div>
        `;
        resultsContainer.innerHTML += recipeCard;
    });
}
