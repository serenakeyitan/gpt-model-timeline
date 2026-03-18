"""
Tests for GPT Model Timeline structure and validity
"""
import os
import re
from pathlib import Path
import pytest
from bs4 import BeautifulSoup


# Get project root
PROJECT_ROOT = Path(__file__).parent.parent


def test_required_files_exist():
    """Test that all required files exist"""
    required_files = [
        'index.html',
        'style.css',
        'script.js',
        'README.md',
        'LICENSE',
        '.gitignore',
        '.github/workflows/pages.yml'
    ]

    for file_path in required_files:
        full_path = PROJECT_ROOT / file_path
        assert full_path.exists(), f"Required file missing: {file_path}"


def test_html_structure():
    """Test HTML structure and required elements"""
    html_path = PROJECT_ROOT / 'index.html'
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Check doctype
    assert soup.find('html'), "HTML tag not found"

    # Check meta tags
    assert soup.find('meta', {'charset': True}), "Charset meta tag missing"
    assert soup.find('meta', {'name': 'viewport'}), "Viewport meta tag missing"
    assert soup.find('meta', {'name': 'description'}), "Description meta tag missing"

    # Check title
    title = soup.find('title')
    assert title, "Title tag missing"
    assert 'GPT' in title.string, "Title should mention GPT"

    # Check required sections
    assert soup.find('header'), "Header section missing"
    assert soup.find('main'), "Main section missing"
    assert soup.find('footer'), "Footer section missing"

    # Check key elements
    assert soup.find(id='theme-toggle'), "Theme toggle button missing"
    assert soup.find(id='timeline'), "Timeline element missing"
    assert soup.find(id='compare-model-1'), "First comparison select missing"
    assert soup.find(id='compare-model-2'), "Second comparison select missing"
    assert soup.find(id='compare-btn'), "Compare button missing"
    assert soup.find(id='growth-chart'), "Growth chart canvas missing"

    # Check stylesheet and script links
    assert soup.find('link', {'href': 'style.css'}), "CSS link missing"
    assert soup.find('script', {'src': 'script.js'}), "JavaScript link missing"


def test_html_accessibility():
    """Test HTML accessibility features"""
    html_path = PROJECT_ROOT / 'index.html'
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Check ARIA labels
    theme_toggle = soup.find(id='theme-toggle')
    assert theme_toggle.get('aria-label'), "Theme toggle missing aria-label"

    # Check canvas has aria-label
    canvas = soup.find('canvas')
    assert canvas.get('aria-label'), "Canvas missing aria-label"

    # Check selects have aria-label
    select1 = soup.find(id='compare-model-1')
    select2 = soup.find(id='compare-model-2')
    assert select1.get('aria-label'), "First select missing aria-label"
    assert select2.get('aria-label'), "Second select missing aria-label"


def test_css_structure():
    """Test CSS file structure and required rules"""
    css_path = PROJECT_ROOT / 'style.css'
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()

    # Check CSS custom properties (CSS variables)
    assert ':root' in css_content, "CSS custom properties not defined in :root"
    assert '--bg-primary' in css_content, "Primary background variable missing"
    assert '--text-primary' in css_content, "Primary text variable missing"
    assert '--accent-primary' in css_content, "Primary accent variable missing"

    # Check dark mode support
    assert '[data-theme="dark"]' in css_content, "Dark theme styles missing"

    # Check responsive design
    assert '@media' in css_content, "No media queries found"
    assert 'max-width' in css_content or 'min-width' in css_content, "No responsive breakpoints"

    # Check animations
    assert 'transition' in css_content, "No transitions defined"

    # Check accessibility
    assert 'prefers-reduced-motion' in css_content, "No reduced motion support"

    # Check key selectors exist
    required_selectors = [
        'header',
        '.timeline',
        '.timeline-node',
        '#theme-toggle',
        '.compare-section',
        '.stat-card'
    ]

    for selector in required_selectors:
        assert selector in css_content, f"Required selector missing: {selector}"


def test_javascript_structure():
    """Test JavaScript file structure and required functionality"""
    js_path = PROJECT_ROOT / 'script.js'
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Check model data exists
    assert 'gptModels' in js_content, "Model data array not found"
    assert 'GPT-1' in js_content, "GPT-1 model data missing"
    assert 'GPT-5.4' in js_content, "GPT-5.4 model data missing"

    # Check theme toggle functionality
    assert 'theme-toggle' in js_content, "Theme toggle functionality missing"
    assert 'localStorage' in js_content, "LocalStorage for theme persistence missing"

    # Check timeline generation
    assert 'timeline-node' in js_content, "Timeline node generation missing"

    # Check comparison functionality
    assert 'compare-model-1' in js_content, "Comparison functionality missing"
    assert 'compare-model-2' in js_content, "Comparison functionality missing"

    # Check chart drawing
    assert 'canvas' in js_content or 'getContext' in js_content, "Canvas chart functionality missing"

    # Check event listeners
    assert 'addEventListener' in js_content, "Event listeners missing"

    # Check accessibility features
    assert 'keydown' in js_content or 'keyboard' in js_content.lower(), "Keyboard navigation missing"


def test_model_data_completeness():
    """Test that all GPT models have complete data"""
    js_path = PROJECT_ROOT / 'script.js'
    with open(js_path, 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Expected models
    expected_models = [
        'GPT-1',
        'GPT-2',
        'GPT-3',
        'GPT-3.5',
        'GPT-4',
        'GPT-4 Turbo',
        'GPT-4o',
        'GPT-4o mini',
        'GPT-5',
        'GPT-5.1',
        'GPT-5.2',
        'GPT-5.3',
        'GPT-5.3 Instant',
        'GPT-5.4'
    ]

    for model in expected_models:
        assert model in js_content, f"Model data missing for: {model}"

    # Check required properties for models
    required_properties = ['id', 'name', 'date', 'params', 'context', 'summary', 'capabilities']
    for prop in required_properties:
        # Check that property appears multiple times (once per model)
        assert js_content.count(f"'{prop}'") >= 10 or js_content.count(f'"{prop}"') >= 10 or js_content.count(f'{prop}:') >= 10, \
            f"Property '{prop}' not found consistently across models"


def test_readme_structure():
    """Test README structure and required sections"""
    readme_path = PROJECT_ROOT / 'README.md'
    with open(readme_path, 'r', encoding='utf-8') as f:
        readme_content = f.read()

    # Check required sections
    required_sections = [
        '# GPT Model Evolution Timeline',
        '## Features',
        '## Tech Stack',
        '## Local Development',
        '## License'
    ]

    for section in required_sections:
        assert section in readme_content, f"README section missing: {section}"

    # Check badges
    assert '![' in readme_content, "No badges found in README"

    # Check live site link
    assert 'github.io' in readme_content, "GitHub Pages link missing"

    # Check deployment info
    assert 'GitHub Pages' in readme_content or 'deployment' in readme_content.lower(), \
        "Deployment information missing"


def test_github_workflow():
    """Test GitHub Pages workflow configuration"""
    workflow_path = PROJECT_ROOT / '.github/workflows/pages.yml'
    with open(workflow_path, 'r', encoding='utf-8') as f:
        workflow_content = f.read()

    # Check workflow triggers
    assert 'on:' in workflow_content, "Workflow triggers missing"
    assert 'push:' in workflow_content, "Push trigger missing"

    # Check branches
    assert 'main' in workflow_content, "Main branch not in workflow"

    # Check permissions
    assert 'permissions:' in workflow_content, "Permissions not defined"
    assert 'pages: write' in workflow_content, "Pages write permission missing"

    # Check deployment steps
    assert 'actions/checkout' in workflow_content, "Checkout action missing"
    assert 'actions/configure-pages' in workflow_content, "Configure pages action missing"
    assert 'actions/upload-pages-artifact' in workflow_content, "Upload artifact action missing"
    assert 'actions/deploy-pages' in workflow_content, "Deploy action missing"


def test_no_external_dependencies():
    """Test that there are no external framework dependencies"""
    html_path = PROJECT_ROOT / 'index.html'
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Should not have common framework CDN links
    forbidden_patterns = [
        'react',
        'vue',
        'angular',
        'jquery',
        'bootstrap',
        'cdn.jsdelivr.net',
        'unpkg.com',
        'cdnjs.cloudflare.com'
    ]

    for pattern in forbidden_patterns:
        assert pattern not in html_content.lower(), \
            f"External dependency detected: {pattern}. Should be vanilla HTML/CSS/JS only"


if __name__ == '__main__':
    pytest.main([__file__, '-v'])
