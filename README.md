# # Vijay Aadhithya's Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my professional experience, skills, and personal projects.

## 🚀 Features

### Design System
- **Consistent Color Palette**: Modern color scheme with primary blues, secondary grays, and accent colors
- **Typography System**: Hierarchical typography with proper font weights and sizes
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design
- **Reusable Components**: Modular component system for consistency across pages

### Enhanced User Experience
- **Smooth Animations**: Fade-in animations and hover effects throughout the site
- **Interactive Elements**: Expandable cards with detailed information
- **Modern Navigation**: Sticky navigation with active state indicators
- **Professional Footer**: Comprehensive contact information with social links

### Dynamic Content Management
- **Experience Section**: Fully dynamic with expandable details, technology badges, and achievements
- **Skills Categorization**: Skills grouped by proficiency level with visual indicators
- **Project Showcase**: Detailed project cards with features, status indicators, and action buttons
- **Structured Data**: Well-organized data structure for easy maintenance and updates

## 🛠️ Technology Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled Components, CSS-in-JS
- **Icons**: React Icons
- **Build Tool**: Vite
- **Development**: ESLint, Prettier

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎨 Design Improvements

### Color Scheme
- **Primary**: Modern blue palette (#0ea5e9 to #0c4a6e)
- **Secondary**: Professional grays (#f8fafc to #0f172a)
- **Accent**: Purple accents for highlights (#d946ef to #701a75)
- **Semantic Colors**: Success (green), Warning (yellow), Error (red)

### Typography
- **Font Family**: Inter (system font fallback)
- **Font Sizes**: Responsive scale from 0.75rem to 3rem
- **Font Weights**: Light (300) to Bold (700)

### Components
- **Cards**: Elevated cards with hover effects and consistent padding
- **Badges**: Color-coded badges for technologies, skills, and status
- **Buttons**: Multiple variants (primary, secondary, outline) with hover states
- **Animations**: Smooth fade-in and slide animations

## 📊 Dynamic Experience Management

### Enhanced Data Structure
```javascript
{
  id: 1,
  company: 'Company Name',
  role: 'Job Title',
  startDate: '2023-02',
  endDate: null, // null for current position
  duration: 'Calculated automatically',
  type: 'Full-time',
  location: 'City, Country',
  responsibilities: ['List of responsibilities'],
  technologies: ['React.js', 'Node.js'],
  achievements: ['Key achievements']
}
```

### Utility Functions
- **Date Management**: Automatic duration calculation
- **Filtering**: Filter by experience type, current position
- **Search**: Search across all experience data
- **Sorting**: Chronological sorting options

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/vijayaadhithya2019rit/OpenWebsite.git

# Navigate to project directory
cd OpenWebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── StyledComponents.js    # Reusable styled components
│   ├── navBar.jsx            # Navigation component
│   └── navBar.css            # Navigation styles (deprecated)
├── data/
│   └── allDetails.jsx        # Centralized data management
├── pages/
│   ├── aboutMe.jsx           # About page with timeline
│   ├── contactMe.jsx         # Contact/footer component
│   ├── education.jsx         # Education showcase
│   ├── experience.jsx        # Dynamic experience section
│   ├── home.jsx              # Landing page
│   ├── personal.jsx          # Projects showcase
│   └── skillSet.jsx          # Skills with categorization
├── styles/
│   ├── theme.js              # Design system configuration
│   ├── education.css         # Legacy education styles
│   └── footer.css            # Legacy footer styles
├── utils/
│   └── experienceUtils.js    # Experience data utilities
├── App.jsx                   # Main application component
├── App.css                   # Legacy app styles
├── index.css                 # Global styles
└── main.jsx                  # Application entry point
```

## 🔧 Configuration

### Theme Customization
The design system is centralized in `src/styles/theme.js`. You can customize:
- Color palettes
- Typography scales
- Spacing values
- Border radius
- Shadows
- Breakpoints

### Adding New Experience
Update the `workExperience` array in `src/data/allDetails.jsx`:
```javascript
{
  id: newId,
  company: 'New Company',
  role: 'New Role',
  startDate: '2024-01',
  endDate: null, // or end date
  // ... other fields
}
```

## 📈 Performance Optimizations

- **Code Splitting**: Dynamic imports for better loading performance
- **Optimized Images**: Placeholder system for project images
- **Efficient Animations**: CSS-based animations with hardware acceleration
- **Tree Shaking**: Vite's automatic dead code elimination

## 🌐 SEO Optimizations

- **Meta Tags**: Proper title and meta descriptions
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Accessibility**: ARIA labels and keyboard navigation support
- **Social Sharing**: Open Graph meta tags (can be added)

## 🔄 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section integration
- [ ] Advanced filtering and search
- [ ] Project image optimization
- [ ] Performance monitoring
- [ ] SEO enhancements
- [ ] Progressive Web App features
- [ ] Internationalization (i18n)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vijayaadhithya2019rit/OpenWebsite/issues).

## 📧 Contact

**Vijay Aadhithya**
- Email: m.vijayaadhithya@gmail.com
- LinkedIn: [linkedin.com/in/vijay-aadhithya](https://linkedin.com/in/vijay-aadhithya)
- GitHub: [github.com/vijayaadhithya-murugan](https://github.com/vijayaadhithya-murugan)

---

Built with ❤️ using React and modern web technologies.

Issue: ECONNRESET

Fix: npm config set registry http://registry.npmjs.org/

Issue: Can't find module rollup

Fix: npm install vite@4.4.0
