document.addEventListener('DOMContentLoaded', function() {
    // Get the search input element and button
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    // Add event listener for the search button click
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim(); // Get the trimmed search term

        if (searchTerm !== '') {
            // Perform search operation (e.g., redirect to search results page)
            console.log('Search term:', searchTerm);
        } else {
            alert('Please enter a search term.');
        }
    });

    // Get the cart icon
    const cartIcon = document.querySelector('.cart');

    // Add event listener for the cart icon click
    cartIcon.addEventListener('click', function() {
        // Perform action when cart icon is clicked (e.g., open cart modal)
        console.log('Cart icon clicked');
    });

    // Get all the product buttons
    const productButtons = document.querySelectorAll('.product button');

    // Add event listener for each product button
    productButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement; // Get the parent element of the clicked button (product div)
            const productName = product.querySelector('h3').innerText; // Get the product name
            const productPrice = product.querySelector('p').innerText; // Get the product price

            // Perform action when Add to Cart button is clicked (e.g., add the product to cart)
            addToCart(productName, productPrice);
        });
    });

    // Function to add product to cart
    function addToCart(name, price) {
        // Perform action to add product to cart (e.g., update cart items)
        console.log('Product added to cart:', name, price);
    }
});
