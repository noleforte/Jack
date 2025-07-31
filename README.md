# Jack's Website

Single-page responsive website with modern design and interactive elements.

## Features

- 🎨 Modern and clean design
- 📱 Full responsiveness for all devices
- 🖱️ Interactive navigation menu
- 🔄 Modal windows with animation
- 🌙 Dark theme support
- ⚡ Smooth animations and transitions
- ♿ Accessibility features

## Project Structure

```
Jack/
├── index.html          # Main HTML page
├── styles.css          # CSS styles with responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Functionality

### Navigation
- Fixed menu at the top of the page
- Adaptive hamburger menu for mobile devices
- Smooth hover animations

### Modal Windows
- Clicking on any menu item opens a modal window
- Contains the text "It's a Jack"
- Close by clicking the X, outside the window, or pressing Escape

### Responsiveness
- **Desktop**: Full version with horizontal menu
- **Tablet**: Adapted menu with hamburger
- **Mobile**: Optimized version for touch screens
- **Very small screens**: Additional optimization

### Special Features
- Gesture support for mobile devices
- Keyboard navigation
- Automatic dark theme detection
- Typewriter text effect
- Parallax background effect

## How to Use

1. Open `index.html` in any modern browser
2. Click on any navigation item to open a modal window
3. Use the hamburger menu on mobile devices

## Technical Details

### CSS
- Flexbox and Grid for layout
- CSS variables for colors
- Media queries for responsiveness
- CSS animations and transitions
- Backdrop-filter for blur effects

### JavaScript
- Modern ES6+ syntax
- Event listeners for interactivity
- Intersection Observer API for animations
- Touch events for mobile devices

### Compatibility
- All modern browsers
- iOS Safari 12+
- Android Chrome 70+
- Edge 79+
- Firefox 75+

## Customization

### Changing Colors
Edit CSS variables at the beginning of `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #667eea;
    --text-color: #333;
    --background-color: #fff;
}
```

### Changing Text
Edit content in `index.html`:

```html
<ul class="nav-menu">
    <li class="nav-item">
        <a href="#" class="nav-link" data-modal="about">Your Text</a>
    </li>
</ul>
```

### Adding New Menu Items
Add new elements to navigation:

```html
<li class="nav-item">
    <a href="#" class="nav-link" data-modal="new-section">New Section</a>
</li>
```

## License

This project is created for demonstration purposes. Feel free to use for your projects.

---

**Created with ❤️ for Jack** 