# The Crafted Aura Website

A professional, fully responsive website for showcasing handmade arts and crafts including paper quilling jewelry, paintings & illustrations, and textile crafts.

## 📁 Files Included

### HTML Pages
- `index.html` - Homepage with hero section and featured collections
- `gallery.html` - Gallery page with filterable product categories
- `about.html` - About page with story, process, values, and techniques
- `contact.html` - Contact page with form and contact information

### CSS Files
- `styles.css` - Main stylesheet with core styles and components
- `gallery.css` - Gallery-specific styles
- `about.css` - About page-specific styles
- `contact.css` - Contact page-specific styles

### JavaScript Files
- `script.js` - Main JavaScript for navigation and interactions
- `gallery.js` - Gallery filtering and animations
- `contact.js` - Contact form handling and validation

### Documentation
- `README.md` - This file with setup instructions

## 🎨 Design Features

### Color Palette
- **Primary Purple:** #663399
- **Vibrant Pink:** #E91E63
- **Accent Teal:** #00BCD4
- **Accent Gold:** #FFD700
- **Light Background:** #FAF8FC
- **White:** #FFFFFF

### Typography
- **Headers:** Playfair Display (Bold, 700-900)
- **Body:** Cormorant Garamond (Regular, 400-600)

### Key Features
✨ Fully responsive design (desktop, tablet, mobile)
🎨 Bold, vibrant color scheme
⚡ Smooth animations and transitions
📱 Mobile-friendly navigation
🔍 Filterable gallery
📧 Working contact form with validation
♿ Accessible and semantic HTML

## 🚀 Setup Instructions

### 1. Replace Image Placeholders

All image placeholders need to be replaced with actual images. Look for `<div class="image-placeholder">` elements throughout the HTML files.

**Image Specifications:**
- Hero Image: 1920x1080px (landscape)
- Collection Previews: 600x600px (square)
- Gallery Items: 800x800px (square)
- About/Process Images: 1200x800px (landscape)

**Where to add images:**

Replace placeholder divs like this:
```html
<!-- FROM THIS -->
<div class="image-placeholder">
    <div class="placeholder-content">...</div>
</div>

<!-- TO THIS -->
<img src="images/your-image.jpg" alt="Description">
```

**Recommended folder structure:**
```
/images/
  /hero/
    - hero-image.jpg
  /collections/
    - jewelry-preview.jpg
    - paintings-preview.jpg
    - textiles-preview.jpg
  /gallery/
    /jewelry/
      - item1.jpg
      - item2.jpg
      ...
    /paintings/
      - item1.jpg
      - item2.jpg
      ...
    /textiles/
      - item1.jpg
      - item2.jpg
      ...
  /about/
    - workspace.jpg
    - process1.jpg
    - process2.jpg
```

### 2. Update Contact Information

**In all HTML files, update:**
- Phone number: Currently set to `310-529-2638`
- Email: Currently set to `info@thecraftedaura.com`
- Social media links: Currently placeholder `#` links

**Files to update:**
- `index.html` (navigation, footer)
- `gallery.html` (navigation, footer)
- `about.html` (navigation, footer)
- `contact.html` (navigation, contact methods, footer)

### 3. Configure Contact Form

The contact form in `contact.html` currently simulates submission. To make it functional:

**Option A: Use a form service (Recommended for quick setup)**
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

**Option B: Set up your own backend**
Edit `contact.js` and update the commented section:
```javascript
fetch('your-api-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
```

### 4. Add Google Fonts

The website uses Google Fonts which are already linked in the HTML files:
- Playfair Display
- Cormorant Garamond

These will load automatically when the site is online.

### 5. Optimize Images

Before uploading images, optimize them for web:
- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target file sizes under 200KB per image
- Use JPG for photos, PNG for graphics with transparency
- Consider using WebP format for better compression

### 6. Testing Checklist

Before going live, test:
- [ ] All navigation links work correctly
- [ ] Mobile menu opens and closes properly
- [ ] Gallery filter buttons show/hide correct items
- [ ] Contact form validates inputs correctly
- [ ] All images load properly
- [ ] Phone and email links work (tel: and mailto:)
- [ ] Website is responsive on different screen sizes
- [ ] All animations and hover effects work smoothly

## 📱 Browser Compatibility

Tested and works on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 🎯 Customization Tips

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-purple: #663399;
    --vibrant-pink: #E91E63;
    --accent-teal: #00BCD4;
    --accent-gold: #FFD700;
}
```

### Adding New Gallery Items
1. Copy an existing `gallery-item` div
2. Update the image source
3. Update the title and description
4. Ensure it's in the correct category section

### Modifying Navigation
Edit the navigation structure in each HTML file's `<nav>` section.

## 🌐 Deployment

### Quick Deployment Options:
1. **GitHub Pages** (Free)
   - Upload files to a GitHub repository
   - Enable GitHub Pages in settings

2. **Netlify** (Free)
   - Drag and drop your folder to Netlify
   - Automatic deployment and hosting

3. **Vercel** (Free)
   - Connect your GitHub repo
   - Automatic deployments on push

4. **Traditional Web Hosting**
   - Upload all files via FTP
   - Ensure folder structure is maintained

## 📞 Support

For questions about using or customizing this website, refer to:
- HTML/CSS documentation: [MDN Web Docs](https://developer.mozilla.org/)
- JavaScript help: [JavaScript.info](https://javascript.info/)

## 📄 License

This website template is created for "The Crafted Aura". All rights reserved.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

Last Updated: February 2026
