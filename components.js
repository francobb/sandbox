const components = [
  {
    id: 1,
    name: 'Progress Steps',
    category: 'Navigation',
    description: 'Multi-step progress indicator with interactive states',
    previewClass: 'bg-blue-100',
    files: {
      html: './Progress Steps/index.html',
      css: './Progress Steps/styles.css',
      js: './Progress Steps/progress-steps/script.js'
    }
  },
  {
    id: 2,
    name: 'Expanding Cards',
    category: 'Cards',
    description: 'Interactive cards that expand to reveal more content',
    previewClass: 'bg-purple-100',
    files: {
      html: './Expanding Cards/index.html',
      css: './Expanding Cards/styles.css',
      js: './Expanding Cards/script.js'
    },
    imagesDir: './Expanding Cards/imgs' // Add this line
  },
  {
    id: 3,
    name: 'Carousel UI',
    category: 'Sliders',
    description: 'Versatile card component with multiple content layouts',
    previewClass: 'bg-orange-100',
    files: {
      html: './Carousel UI/index.html',
      css: './Carousel UI/styles.css'
    }
  },
  {
    id: 4,
    name: 'Dual Vert Slider',
    category: 'Sliders',
    description: 'Vertical dual-range slider with synchronized controls',
    previewClass: 'bg-orange-100',
    files: {
      html: './Dual Vertical Slider/index.html',
      css: './Dual Vertical Slider/styles.css',
      js: './Dual Vertical Slider/script.js'
    },
    imagesDir: './Dual Vertical Slider/images' // Add this line
  },
  {
    id: 5,
    name: 'Hidden Search',
    category: 'Forms',
    description: 'Hidden Search widget',
    previewClass: 'bg-green-100',
    files: {
      html: './Hidden Search/index.html',
      css: './Hidden Search/styles.css',
    },
  },
  {
    id: 6,
    name: 'Rotating Navigation',
    category: 'Navigation',
    description: 'Rotating navigation widget',
    previewClass: 'bg-blue-100',
    files: {
      html: './Rotating_Navigation/index.html',
      css: './Rotating_Navigation/styles.css',
    },
  },
  {
    id: 7,
    name: 'UI Card',
    category: 'Cards',
    description: 'UI Card with star review system',
    previewClass: 'bg-purple-100',
    files: {
      html: './UI Card/index.html',
      css: './UI Card/styles.css',
      js: './UI Card/index.js'
    },
    imagesDir: './UI Card/images' // Add this line
  },
  {
    id: 8,
    name: 'Quiz UI',
    category: 'Cards',
    description: 'Quiz component with four multiple choice options',
    previewClass: 'bg-purple-100',
    files: {
      html: './Quiz UI/index.html',
      css: './Quiz UI/styles.css',
    },
  },
  {
    id: 9,
    name: 'Double Tap Like',
    category: 'Cards',
    description: 'Double tap to like a picture',
    previewClass: 'bg-purple-100',
    files: {
      html: './Sticky Header/index.html',
      css: './Sticky Header/styles.css',
    },
  }
];

// Categories with icons
const categories = [
  {id: 'All', icon: 'layout'},
  {id: 'Navigation', icon: 'compass'},
  {id: 'Forms', icon: 'form-input'},
  {id: 'Cards', icon: 'credit-card'},
  {id: 'Sliders', icon: 'sliders'},
];