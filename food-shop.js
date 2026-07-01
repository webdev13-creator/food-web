// ============================================
// FRESHFLAVORS FOOD SHOP - JAVASCRIPT
// ============================================

// ===== WELCOME MODAL FUNCTIONALITY =====

// Display welcome modal when page loads
window.addEventListener('DOMContentLoaded', function() {
    console.log("🎉 Welcome to FreshFlavors!");
    
    // Show welcome modal
    const welcomeModal = document.getElementById('welcomeModal');
    
    // Check if user has already seen the modal
    if (!localStorage.getItem('welcomeShown')) {
        welcomeModal.classList.remove('hidden');
        localStorage.setItem('welcomeShown', 'true');
        
        // Add welcome message to console
        console.log('%c🍲 FreshFlavors Food Shop 🍲', 'font-size: 20px; color: #FF8C00; font-weight: bold;');
        console.log('%cWelcome to our vegetarian food paradise!', 'font-size: 14px; color: #FF6B35;');
        console.log('%cEnjoy fresh snacks, drinks, and shakes!', 'font-size: 12px; color: #666;');
    } else {
        welcomeModal.classList.add('hidden');
    }
    
    // Initialize all features
    initializeProductCards();
    initializeButtons();
    initializeNavigation();
    initializeCartSystem();
    addAnimationsToElements();
});

// Close welcome modal
function closeWelcomeModal() {
    const welcomeModal = document.getElementById('welcomeModal');
    welcomeModal.classList.add('hidden');
    console.log("✨ Modal closed. Let's explore the menu!");
}

// ===== PRODUCT CARD FUNCTIONALITY =====

function initializeProductCards() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach((card, index) => {
        // Add staggered animation
        card.style.animation = `slideUp 0.6s ease ${index * 0.1}s both`;
        
        // Add hover 3D effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
        });
        
        // Add click animation
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            const productPrice = this.querySelector('.product-price').textContent;
            console.log(`📦 Clicked: ${productName} - ${productPrice}`);
        });
    });
}

// ===== ADD TO CART FUNCTIONALITY =====

let cart = [];
let cartCount = 0;

function initializeCartSystem() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('freshflavors-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
    
    // Add click handlers to all "Add" buttons
    const addButtons = document.querySelectorAll('.add-to-cart');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const card = this.closest('.product-card');
            const productName = card.querySelector('.product-name').textContent.trim();
            const productPrice = card.querySelector('.product-price').textContent;
            const productCategory = card.querySelector('.product-category').textContent;
            
            // Create product object
            const product = {
                id: Date.now(),
                name: productName,
                price: productPrice,
                category: productCategory,
                quantity: 1,
                timestamp: new Date().toLocaleString()
            };
            
            // Add to cart
            addToCart(product);
            
            // Show feedback
            showAddToCartAnimation(button);
            showNotification(`✓ ${productName} added to cart!`, 'success');
        });
    });
}

function addToCart(product) {
    // Check if product already in cart
    const existingProduct = cart.find(p => p.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }
    
    // Save to localStorage
    localStorage.setItem('freshflavors-cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    console.log('🛒 Cart updated:', cart);
}

function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(`📊 Items in cart: ${cartCount}`);
}

function showAddToCartAnimation(button) {
    // Save original text
    const originalText = button.textContent;
    
    // Change button appearance
    button.textContent = '✓ Added!';
    button.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    
    // Revert after 1 second
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1000);
}

// ===== NOTIFICATION SYSTEM =====

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease;
        z-index: 5000;
        font-weight: 600;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== BUTTON FUNCTIONALITY =====

function initializeButtons() {
    // Browse Menu button
    const browseMenuBtn = document.querySelector('.hero-buttons .btn-primary');
    if (browseMenuBtn) {
        browseMenuBtn.addEventListener('click', function() {
            document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
            showNotification('🍲 Let\'s explore our menu!', 'info');
        });
    }
    
    // Watch Demo button
    const watchDemoBtn = document.querySelector('.hero-buttons .btn-secondary');
    if (watchDemoBtn) {
        watchDemoBtn.addEventListener('click', function() {
            document.querySelector('.video-section').scrollIntoView({ behavior: 'smooth' });
            showNotification('🎬 Watch our food preparation process', 'info');
        });
    }
    
    // Order Now button in header
    const orderNowBtn = document.querySelector('header .cta-button');
    if (orderNowBtn) {
        orderNowBtn.addEventListener('click', function() {
            if (cartCount === 0) {
                showNotification('⚠️ Please add items to your cart first!', 'info');
            } else {
                showOrderSummary();
            }
        });
    }
}

// ===== NAVIGATION =====

function initializeNavigation() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    
                    // Log navigation
                    console.log(`📍 Navigated to: ${href}`);
                }
            }
        });
    });
    
    // Highlight active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            
            // Update nav links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = '#FF8C00';
                }
            });
        }
    });
}

// ===== ANIMATIONS =====

function addAnimationsToElements() {
    // Add slide-in animation to sections
    const sections = document.querySelectorAll('.products, .about, .video-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add pulse animation to glow text
    const glowTexts = document.querySelectorAll('.glow-text, .highlight-glow');
    glowTexts.forEach(element => {
        element.style.animation = 'glow-pulse 2s ease-in-out infinite';
    });
}

// ===== ORDER SUMMARY =====

function showOrderSummary() {
    // Create modal for order summary
    const modal = document.createElement('div');
    modal.className = 'welcome-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        backdrop-filter: blur(5px);
    `;
    
    // Create content
    const content = document.createElement('div');
    content.className = 'modal-content';
    content.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 20px;
        max-width: 500px;
        max-height: 80vh;
        overflow-y: auto;
        animation: slideUp 0.5s ease;
    `;
    
    // Build order summary
    let orderHTML = `
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #FF8C00; margin-bottom: 1.5rem;">📦 Order Summary</h2>
        <div style="background: #F8F5F0; padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
    `;
    
    if (cart.length === 0) {
        orderHTML += '<p style="text-align: center; color: #666;">Your cart is empty</p>';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            const itemTotal = price * item.quantity;
            total += itemTotal;
            
            orderHTML += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid #ddd;">
                    <div>
                        <strong>${item.name}</strong><br/>
                        <small style="color: #888;">${item.category}</small>
                    </div>
                    <div>
                        <div>${item.quantity} × ${item.price}</div>
                        <strong style="color: #FF8C00;">₹${itemTotal}</strong>
                    </div>
                </div>
            `;
        });
        
        orderHTML += `
                <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #FF8C00;">
                    <strong style="font-size: 1.2rem;">Total:</strong>
                    <strong style="font-size: 1.2rem; color: #FF8C00;">₹${total}</strong>
                </div>
        `;
    }
    
    orderHTML += `
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="this.closest('.welcome-modal').remove()" style="
                background: #ccc;
                color: #333;
                border: none;
                padding: 0.8rem 1.5rem;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            ">Continue Shopping</button>
            <button onclick="checkout()" style="
                background: linear-gradient(135deg, #FF8C00, #FF6B35);
                color: white;
                border: none;
                padding: 0.8rem 1.5rem;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
            ">Proceed to Checkout</button>
        </div>
    `;
    
    content.innerHTML = orderHTML;
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ===== CHECKOUT FUNCTIONALITY =====

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'info');
        return;
    }
    
    // Calculate total
    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ''));
        return sum + (price * item.quantity);
    }, 0);
    
    console.log('🛍️ Processing checkout...');
    console.log('📋 Items:', cart);
    console.log('💰 Total Amount: ₹' + total);
    
    // Simulate order processing
    showNotification('⏳ Processing your order...', 'info');
    
    setTimeout(() => {
        // Show success message
        const successModal = document.createElement('div');
        successModal.className = 'welcome-modal';
        successModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(5px);
        `;
        
        const successContent = document.createElement('div');
        successContent.className = 'modal-content';
        successContent.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            animation: slideUp 0.5s ease;
        `;
        
        successContent.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem; animation: float 1s ease-in-out infinite;">✅</div>
            <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #FF8C00; margin-bottom: 1rem;">Order Placed!</h2>
            <p style="color: #666; margin-bottom: 1rem;">Thank you for your order! Your items will be delivered soon.</p>
            <p style="font-weight: 600; color: #FF8C00; margin-bottom: 1.5rem;">Order Total: ₹${total}</p>
            <p style="font-size: 0.9rem; color: #888; margin-bottom: 1.5rem;">Order ID: #FF${Date.now().toString().slice(-8)}</p>
            <button onclick="this.closest('.welcome-modal').remove(); location.reload();" style="
                background: linear-gradient(135deg, #FF8C00, #FF6B35);
                color: white;
                border: none;
                padding: 0.8rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
            ">Back to Home</button>
        `;
        
        successModal.appendChild(successContent);
        document.body.appendChild(successModal);
        
        // Clear cart
        cart = [];
        localStorage.removeItem('freshflavors-cart');
        cartCount = 0;
        
        // Close order summary modal if open
        const orderModals = document.querySelectorAll('.welcome-modal');
        if (orderModals.length > 1) {
            orderModals[orderModals.length - 2].remove();
        }
    }, 1500);
}

// ===== KEYBOARD SHORTCUTS =====

document.addEventListener('keydown', function(e) {
    // Press 'C' to view cart
    if (e.key.toLowerCase() === 'c' && e.ctrlKey) {
        e.preventDefault();
        showOrderSummary();
        console.log('🔑 Shortcut: Ctrl+C - View Cart');
    }
    
    // Press 'H' for home
    if (e.key.toLowerCase() === 'h' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log('🔑 Shortcut: Ctrl+H - Go to Home');
    }
});

// ===== ADDITIONAL ANIMATIONS =====

// Add CSS keyframes if not already in stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== PAGE PERFORMANCE LOG =====

window.addEventListener('load', function() {
    console.log('%c🚀 FreshFlavors Website Loaded Successfully!', 'font-size: 16px; color: #FF8C00; font-weight: bold;');
    console.log('%cHotkeys: Ctrl+C to view cart | Ctrl+H to go home', 'font-size: 12px; color: #666;');
    console.log('%cTotal Products: 9 | Categories: Snacks, Drinks, Shakes', 'font-size: 12px; color: #666;');
});

// ===== MOUSE TRACKING EFFECT =====

document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create subtle glow effect on hover
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const glowX = (x / rect.width) * 100;
            const glowY = (y / rect.height) * 100;
            card.style.backgroundImage = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 140, 0, 0.1), transparent)`;
        }
    });
});

console.log('%c💡 Pro Tips:', 'font-size: 14px; color: #FF8C00; font-weight: bold;');
console.log('1. Click any product to add to cart');
console.log('2. Use Ctrl+C to quickly view your cart');
console.log('3. All orders are saved in localStorage');
console.log('4. Enjoy our fresh and delicious vegetarian food! 🥗');
