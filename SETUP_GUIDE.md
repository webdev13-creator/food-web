# 🍲 FreshFlavors Food Shop Website - Setup Guide

## 📋 Overview

Welcome to your professional food shop website! This complete solution includes HTML, CSS, and JavaScript with modern 3D effects, animations, and interactive features.

---

## 🚀 Quick Start

### 1. **Files You Have**
- `food-shop-website.html` - Main HTML file with embedded CSS
- `food-shop.js` - JavaScript for interactivity
- `SETUP_GUIDE.md` - This guide

### 2. **How to Use**

**Option A: Local File (Easiest)**
1. Save both files in the same folder
2. Make sure they're in the same directory
3. Open `food-shop-website.html` in your web browser
4. Done! The website is ready to use

**Option B: Web Hosting**
1. Upload both files to your web hosting server
2. Keep them in the same directory
3. Access via your domain name

---

## 🎨 Key Features Included

### ✨ Design Features
- **Orange & White Theme**: Modern, appetizing color scheme
- **3D Effects**: Rotating product cards with perspective transforms
- **Glow Text**: Highlighted important words with glowing effects
- **Smooth Animations**: Page load, scroll, and hover animations
- **Responsive Design**: Works on desktop, tablet, and mobile

### 🎯 Interactive Features
- **Welcome Modal**: Greets first-time visitors
- **Shopping Cart**: Add items, view summary, checkout simulation
- **Product Cards**: 3D hover effects, smooth transitions
- **Navigation**: Smooth scrolling to sections
- **Notifications**: Success/info messages for user actions
- **Keyboard Shortcuts**: Ctrl+C for cart, Ctrl+H for home

### 📱 Responsive Sections
1. **Header/Navigation** - Fixed, with smooth links
2. **Hero Section** - Eye-catching banner with call-to-action buttons
3. **Products Grid** - 3D cards for snacks, drinks, and shakes
4. **Video Section** - Showcase your food preparation
5. **About Section** - Tell your story with features
6. **Footer** - Contact info, links, social media

---

## 🖼️ How to Add Your Images and Videos

### **For Product Images:**

1. **Current Setup**: Website uses emoji placeholders (🥔, 🍌, etc.)

2. **To Replace with Your Images**:

Find this code in the HTML (around line 500):
```html
<div class="product-image">🥔</div>
```

Replace with:
```html
<div class="product-image">
    <img src="YOUR_IMAGE_PATH.jpg" alt="Product Name">
</div>
```

**Examples:**
```html
<!-- From your computer -->
<img src="images/crispy-chips.jpg" alt="Crispy Chips">

<!-- From a URL -->
<img src="https://example.com/images/chips.jpg" alt="Crispy Chips">

<!-- From Google Drive (share link) -->
<img src="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" alt="Chips">
```

### **For Video Section:**

Find this code (around line 850):
```html
<video controls>
    <source src="YOUR_VIDEO_URL.mp4" type="video/mp4">
</video>
```

Replace `YOUR_VIDEO_URL.mp4` with:
- Local video file: `videos/food-preparation.mp4`
- YouTube embed: Use YouTube's embed code
- Google Drive: Share video link

**Example:**
```html
<video controls width="800">
    <source src="food-preparation.mp4" type="video/mp4">
    Your browser doesn't support videos
</video>
```

### **About Section Image:**

Find this code (around line 900):
```html
<div style="width: 100%; height: 400px; background: linear-gradient(135deg, var(--primary-orange), var(--dark-orange)); border-radius: 15px; display: flex; align-items: center; justify-content: center; color: white; font-size: 80px;">
    🍱
</div>
```

Replace with:
```html
<img src="your-about-image.jpg" alt="FreshFlavors Store" style="width: 100%; height: 400px; border-radius: 15px; object-fit: cover;">
```

---

## 🎨 Color Customization

The website uses these colors (modify in the CSS `:root` section):

```css
:root {
    --primary-orange: #FF8C00;      /* Main orange */
    --dark-orange: #FF6B35;          /* Darker orange */
    --light-orange: #FFB347;         /* Lighter orange */
    --white: #FFFFFF;                /* White */
    --cream: #F8F5F0;                /* Cream background */
    --dark-text: #2C2C2C;            /* Dark text */
}
```

**To change colors:**
1. Open `food-shop-website.html` in a text editor
2. Find the `:root` section (after `<style>`)
3. Change the hex color codes
4. Save and refresh your browser

**Popular color schemes:**
- Green (Eco-friendly): `#10B981, #059669`
- Red (Bold): `#EF4444, #DC2626`
- Blue (Professional): `#3B82F6, #1D4ED8`
- Purple (Premium): `#A855F7, #7C3AED`

---

## 📝 How to Edit Content

### **Change Shop Name**
Find: `FreshFlavors` (appears in multiple places)
Replace with your shop name

### **Edit Product Names and Prices**
Find product cards in the HTML and update:
- Product name
- Price (₹149, etc.)
- Description
- Category (Snacks, Drinks, Shakes)

Example:
```html
<h3 class="product-name">Crispy <span class="glow">Chips</span></h3>
<p class="product-description">Golden, crunchy vegetable chips seasoned to perfection</p>
<span class="product-price">₹149</span>
```

### **Add More Products**
Copy a product card and paste it. The grid will automatically adjust:

```html
<div class="product-card">
    <div class="product-image">🌽</div>
    <div class="product-info">
        <span class="product-category">Snacks</span>
        <h3 class="product-name">Corn <span class="glow">Popcorn</span></h3>
        <p class="product-description">Buttery, salted popcorn</p>
        <div class="product-footer">
            <span class="product-price">₹99</span>
            <button class="add-to-cart">Add</button>
        </div>
    </div>
</div>
```

### **Edit Contact Information**
Find the footer section and update:
- Phone number: `+91-1234-567-890`
- Email: `hello@freshflavors.com`
- Address: `123 Food Street, Food City`
- Hours: `10 AM - 10 PM`

---

## 💡 JavaScript Features Explained

### **Welcome Modal**
- Shows on first visit
- Stores preference in browser
- Close it with the button or refresh to see again
- Edit the welcome message in the HTML modal-text section

### **Shopping Cart**
- Items saved automatically to browser storage
- Survives page refresh
- Shows notifications when items added
- Display with: Click "Order Now" or press **Ctrl+C**

### **Notifications**
- Success messages appear on cart actions
- Auto-dismiss after 3 seconds
- Customizable text and colors

### **Keyboard Shortcuts**
- **Ctrl+C** - View shopping cart
- **Ctrl+H** - Go to top of page

---

## 🔧 Advanced Customization

### **Change Fonts**
Current fonts (from Google Fonts):
- `Playfair Display` - Headings (elegant)
- `Poppins` - Logo (modern)
- `Open Sans` - Body text (readable)

To change, find the `<link>` tag in `<head>` and modify:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

### **Add Social Media Links**
Find footer social section and update:
```html
<li><a href="https://facebook.com/yourpage">🌐 Facebook</a></li>
<li><a href="https://instagram.com/yourpage">📷 Instagram</a></li>
```

### **Modify Animation Speed**
Search for `animation:` or `transition:` in CSS to adjust timing:
```css
/* Change 0.3s to 0.5s for slower animations */
transition: all 0.5s ease;
```

---

## 📱 Mobile Optimization

The website is fully responsive! It works on:
- ✅ Desktop (1200px+)
- ✅ Tablets (768px - 1200px)
- ✅ Mobile (Below 768px)

No extra changes needed - it automatically adapts!

---

## 🚀 Deployment Tips

### **For GitHub Pages**
1. Create a GitHub repo
2. Upload both files
3. Enable GitHub Pages in repo settings
4. Your site is live at: `username.github.io/repo-name`

### **For Netlify** (Recommended for beginners)
1. Go to netlify.com
2. Drag and drop your files
3. Get a free URL instantly
4. No coding knowledge needed!

### **For Your Own Domain**
1. Buy domain from GoDaddy, Namecheap, etc.
2. Upload files to web hosting (Bluehost, HostGator, etc.)
3. Point domain to hosting
4. Done!

---

## 🐛 Troubleshooting

### **Videos not playing?**
- Make sure video file is in same folder as HTML
- Or use direct URL from hosting service
- Check file format is `.mp4`, `.webm`, or `.ogg`

### **Images not showing?**
- Verify file path is correct
- Check file extension matches
- Use absolute URLs if relative paths don't work

### **Styling looks broken?**
- Make sure `food-shop-website.html` has all CSS (it's embedded)
- If using separate CSS file, ensure it's in same folder

### **JavaScript not working?**
- Keep `food-shop.js` in same folder as HTML
- Check browser console (F12) for errors
- Ensure JavaScript is enabled in browser

### **Welcome modal won't disappear?**
- Press the "Start Exploring" button
- Or clear browser cache/localStorage
- Or open in different browser

---

## 📊 Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ⚠️ Limited (3D effects won't work) |

---

## 🎯 Next Steps

1. **Customize colors** to match your brand
2. **Add your images and videos** following the guide above
3. **Edit product names** and prices
4. **Update contact information** in footer
5. **Test on mobile** devices
6. **Deploy** to your hosting

---

## 📞 Need Help?

### Common Questions:

**Q: How do I add more products?**
A: Copy any product card and paste it below. The grid automatically adjusts.

**Q: Can I remove the welcome modal?**
A: Yes! Delete the entire `<div class="welcome-modal">` section from HTML.

**Q: How do I change the orange color?**
A: Edit the `--primary-orange` value in the `:root` CSS section.

**Q: Can I use this on mobile?**
A: Yes! It's fully responsive and mobile-friendly.

**Q: How do I make the cart actually send orders?**
A: You'll need backend setup. For now, it simulates checkout. Consider services like Shopify, WooCommerce, or Stripe for real orders.

---

## 🎉 Final Tips

- **Test everything** before going live
- **Backup your files** regularly
- **Get feedback** from friends
- **Update content** seasonally
- **Monitor analytics** (add Google Analytics)
- **Enjoy your website!** 🍲

---

## 📄 License & Credits

- Built with HTML5, CSS3, and JavaScript
- Uses Google Fonts (free)
- Color scheme inspired by food industry best practices
- Fully customizable for commercial use

---

**Enjoy your beautiful food shop website!** 🎉🍲

*Last Updated: 2024*
