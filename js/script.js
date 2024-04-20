
// Call the renderProducts function to display products
renderProducts();

// Function to handle adding/removing product from cart
function handleCartAction(productId) {
    // Get the product from the products array
    const product = getProductById(productId);

    // Check if the product is already in the cart
    const isProductInCart = function isProductInCart(productId) {
        // Get the cart data from localStorage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Check if the product exists in the cart data
        const productInCart = cartData.find(item => item.id === productId);
    
        // Return true if the product is in the cart, otherwise return false
        return productInCart ? true : false;
    };

    // If the product is not in the cart, add it
    if (!isProductInCart) {
        // Add product to cart (you can use localStorage or sessionStorage to store cart data)
        function addToCart(product) {
            // Get the cart data from localStorage
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        
            // Add the product to the cart data
            cartData.push(product);
        
            // Update the cart data in localStorage
            localStorage.setItem('cart', JSON.stringify(cartData));
        }

        // Update button text to "Remove from Cart"
        const cartButton = document.getElementById(`cart-button-${productId}`);
        cartButton.textContent = "Remove from Cart";
    } else {
        function removeFromCart(productId) {
            // Get the cart data from localStorage
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        
            // Find the index of the product in the cart data
            const index = cartData.findIndex(item => item.id === productId);
        
            // If the product is found in the cart, remove it
            if (index !== -1) {
                cartData.splice(index, 1);
        
                // Update the cart data in localStorage
                localStorage.setItem('cart', JSON.stringify(cartData));
            }
        }

        // Update button text to "Add to Cart"
        const cartButton = document.getElementById(`cart-button-${productId}`);
        cartButton.textContent = "Add to Cart";
    }
}

// Function to handle adding/removing product from wishlist
function handleWishlistAction(productId) {
    // Get the product from the products array
    const product = getProductById(productId);

    // Check if the product is already in the wishlist
    const isProductInWishlist = /* Your logic to check if the product is in the wishlist */;

    // If the product is not in the wishlist, add it
    if (!isProductInWishlist) {
        // Add product to wishlist (you can use localStorage or sessionStorage to store wishlist data)
        /* Your logic to add product to wishlist */

        // Update button icon to "Remove from Wishlist"
        const wishlistButton = document.getElementById(`wishlist-button-${productId}`);
        wishlistButton.innerHTML = '<i class="fa-solid fa-heart-broken"></i>';
    } else {
        // If the product is already in the wishlist, remove it
        // Remove product from wishlist (update localStorage/sessionStorage)
        /* Your logic to remove product from wishlist */

        // Update button icon to "Add to Wishlist"
        const wishlistButton = document.getElementById(`wishlist-button-${productId}`);
        wishlistButton.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
}

// Function to render products
function renderProducts() {
    // Loop through each product
    products.forEach(product => {
        // Create a new div element for each product
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Add product details to the div
        productDiv.innerHTML = `
        <div  class="d-flex justify-content-evenly">
            <div class="card" id="card-width">
                <img src="${product.image}" alt="${product.title}" class="img" width="100%" height="240px">
                <div class="card-body">
                    <h3 class="card-subtitle mb-2 text-muted">${product.title}</h3>
                    <p class="card-title">Price: $${product.price}</p>
                    <p class="card-subtitle mb-2 text-muted">Color: ${product.color}</p>
                    <a href="/cart.html" role="button" id="cart-button-${product.id}" class="btn btn-primary card-link py-2 px-4" onclick="handleCartAction(${product.id})">Add to Cart</a>
                    <a title="Add to wishlist" href="#" id="wishlist-button-${product.id}" class="btn btn-outline-primary card-link" onclick="handleWishlistAction(${product.id})"> 
                    <i class="fa-solid fa-heart"></i></a>
                </div>
            </div>
        </div>
    
            
        `;

        // Append the product div to the container
        productContainer.appendChild(productDiv);
    });
}

// Call the renderProducts function to display products
renderProducts();
