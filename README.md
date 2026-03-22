# GPT Model Evolution Timeline

### TRY [Kael.im](https://kael.im/home) to upload any AI research paper and get interactive slides and deep analysis, 100 pages free daily!

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Interactive visual timeline of every GPT model from GPT-1 (2018) to GPT-5.4 (2026). Compare capabilities, benchmarks, pricing, and context windows.

**Live site:** https://serenakeyitan.github.io/gpt-model-timeline/

## Features

- **Interactive Timeline**: Clickable nodes with expandable details for all 14 GPT models
- **Model Comparison**: Select any two models to see side-by-side comparison
- **Parameter Growth Chart**: Visual representation of model size evolution over time
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Fully Responsive**: Optimized layouts for mobile, tablet, and desktop
- **Keyboard Accessible**: Full keyboard navigation and ARIA labels
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **No Dependencies**: Pure vanilla HTML, CSS, and JavaScript

## Models Covered

| Model | Release Date | Parameters | Context Window | Key Innovation |
|-------|--------------|------------|----------------|----------------|
| GPT-1 | June 2018 | 117M | 512 | Unsupervised pre-training |
| GPT-2 | February 2019 | 1.5B | 1,024 | Zero-shot learning |
| GPT-3 | June 2020 | 175B | 2,048 | Few-shot learning |
| GPT-3.5 | November 2022 | 175B (est.) | 4,096 | ChatGPT launch |
| GPT-4 | March 2023 | 1T+ (est.) | 8K/32K | Multimodal capabilities |
| GPT-4 Turbo | November 2023 | Undisclosed | 128K | Large context, cheaper |
| GPT-4o | May 2024 | Undisclosed | 128K | Omni model, 2x faster |
| GPT-4o mini | July 2024 | Undisclosed | 128K | Smallest, cheapest |
| GPT-5 | September 2025 | Multi-trillion (est.) | 256K | PhD-level reasoning |
| GPT-5.1 | November 2025 | Undisclosed | 256K | Monthly updates begin |
| GPT-5.2 | December 2025 | Undisclosed | 256K | Improved coding |
| GPT-5.3 | February 2026 | Undisclosed | 512K | Codex integration |
| GPT-5.3 Instant | March 2026 | Undisclosed | 128K | Sub-second latency |
| GPT-5.4 | March 2026 | Undisclosed | 512K | Enhanced multimodal |

## Tech Stack

- **HTML5**: Semantic markup with ARIA accessibility
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS with modern features
  - Intersection Observer API for scroll animations
  - Canvas API for parameter growth chart
  - LocalStorage for theme persistence
  - Event delegation for performance

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/serenakeyitan/gpt-model-timeline.git
   cd gpt-model-timeline
   ```

2. Open in your browser:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Or simply open index.html in your browser
   open index.html
   ```

3. Run tests (optional):
   ```bash
   pip install -r requirements-test.txt
   pytest tests/
   ```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

The deployment workflow:
1. Builds the static site
2. Deploys to `gh-pages` branch
3. Serves at https://serenakeyitan.github.io/gpt-model-timeline/

## Project Structure

```
gpt-model-timeline/
├── index.html              # Main HTML file
├── style.css               # Styling and theming
├── script.js               # Interactive functionality
├── README.md               # This file
├── LICENSE                 # MIT License
├── .gitignore             # Git ignore rules
├── .github/
│   └── workflows/
│       └── pages.yml      # GitHub Pages deployment
├── tests/
│   └── test_structure.py  # Structure validation tests
└── requirements-test.txt   # Test dependencies
```

## Features in Detail

### Interactive Timeline
- Click any model to expand and see detailed information
- Each node shows parameters, context window, pricing, capabilities, and benchmarks
- Scroll animations reveal nodes as you navigate
- Keyboard navigation with Enter/Space to expand, Escape to collapse all

### Model Comparison
- Select any two models from dropdown menus
- Click "Compare" to see side-by-side comparison
- Highlights differences in capabilities, pricing, and performance
- Easy to identify which model is better for specific use cases

### Dark Mode
- Toggle button in header
- Preference saved to localStorage
- Respects system preference on first visit
- Smooth theme transitions

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support for users with vestibular disorders

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

- OpenAI for creating the GPT model series
- Historical data compiled from OpenAI's research papers and announcements
- Built as part of the OpenClaw Growth Pipeline

## Screenshots

![Timeline View](screenshots/timeline.png)
*Interactive timeline with expandable model details*

![Comparison View](screenshots/comparison.png)
*Side-by-side model comparison feature*

![Dark Mode](screenshots/dark-mode.png)
*Dark mode with smooth theme transitions*

---

**Note**: Models GPT-5 through GPT-5.4 are projected/speculative models for demonstration purposes. Actual future models may differ in specifications and capabilities.
