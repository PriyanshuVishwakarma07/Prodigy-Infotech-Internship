        // Simple cart functionality
        let cartCount = 0;
        const cartCountElement = document.getElementById('cart-count');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                cartCount++;
                cartCountElement.textContent = cartCount;
                
                // Change button text and disable it
                button.textContent = 'Added to Cart';
                button.disabled = true;
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.disabled = false;
                }, 2000);
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });