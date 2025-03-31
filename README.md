# Muscular System HHS(Human Health System) Website

A fully responsive, HHS(Human Health System) website about the muscular system featuring 3D effects, animations, and educational content.

![Muscular System Website](https://via.placeholder.com/800x400?text=Muscular+System+Interactive+Website)

## Features

- **Responsive Design**: Works seamlessly on all device sizes
- **3D Interactive Elements**: Buttons and cards with advanced hover effects
- **Animated Components**: Smooth scroll, fade effects, and dynamic content transitions
- **Educational Content**: Comprehensive information about the muscular system
- **Multiple Pages**: Home, About, Case Study, and Contact pages
- **Case Study**: Detailed exploration of Dr. Stephen Hawking's case and muscular dystrophy
- **Introductory Animation**: Logo and welcome screen with 5-second automatic transition
- **Interactive FAQ Section**: Expandable questions and answers
- **Contact Form**: With animated submission feedback
- **Google Maps Integration**: Interactive location map

## Technologies Used

- HTML5
- CSS3 with custom properties and animations
- JavaScript (Vanilla JS)
- FontAwesome for icons
- Google Fonts (Poppins)
- Google Maps Embed API

## Project Structure

```
muscular-system/
├── index.html            # Home page with intro popup
├── styles/
│   └── main.css          # Main stylesheet
├── scripts/
│   └── main.js           # Core JavaScript functionality
├── images/               # Image assets
│   └── README.md         # Instructions for images
├── pages/
│   ├── about.html        # About page with muscle types & mechanisms
│   ├── case-study.html   # Dr. Stephen Hawking case study
│   └── contact.html      # Contact form and FAQ section
└── README.md             # This documentation
```

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for modifications)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/muscular-system.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd muscular-system
   ```

3. Open the `index.html` file in your web browser:
   - Double-click the file in your file explorer
   - Or use a local development server like Live Server (VS Code extension)

### Adding Images

For the website to display properly with custom images, add the following files to the `images/` directory:

- `muscle-hero.png`
- `muscle-overview.jpg`
- `muscle-scaffold.jpg`
- `stephen-hawking.jpg`

The website includes fallback functionality that will display placeholder images if these files are not found.

## Customization

### Changing Colors

The color scheme can be easily modified by updating the CSS variables in the `:root` selector in `styles/main.css`:

```css
:root {
    --primary-color: #ff4757;
    --secondary-color: #5352ed;
    --accent-color: #ffa502;
    /* Other variables */
}
```

### Adding Content

The website structure makes it easy to add new sections or pages:

1. To add a new section to an existing page, copy the HTML structure of a similar section and modify it
2. To add a new page, copy the structure of an existing page (like `about.html`) and update content and links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- FontAwesome for the amazing icon set
- Google Fonts for the Poppins font family
- All contributors to the educational content 