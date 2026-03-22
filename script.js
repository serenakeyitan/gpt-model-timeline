// GPT Model Data
const gptModels = [
    {
        id: 'gpt1',
        name: 'GPT-1',
        date: 'June 2018',
        dateSort: '2018-06',
        params: '117M',
        paramsNum: 117,
        context: 512,
        summary: 'First GPT model, demonstrated unsupervised pre-training effectiveness',
        capabilities: [
            'Text generation',
            'Basic language understanding',
            'Transfer learning demonstration',
            'Unsupervised pre-training'
        ],
        pricing: 'Research only',
        benchmarks: 'Improved state-of-art on 9/12 tasks studied'
    },
    {
        id: 'gpt2',
        name: 'GPT-2',
        date: 'February 2019',
        dateSort: '2019-02',
        params: '1.5B',
        paramsNum: 1500,
        context: 1024,
        summary: 'Zero-shot learning capabilities, initially withheld due to safety concerns',
        capabilities: [
            'Zero-shot task transfer',
            'Improved coherence',
            'Better long-form generation',
            'Question answering',
            'Summarization'
        ],
        pricing: 'Research only',
        benchmarks: 'State-of-art on 7/8 language modeling datasets'
    },
    {
        id: 'gpt3',
        name: 'GPT-3',
        date: 'June 2020',
        dateSort: '2020-06',
        params: '175B',
        paramsNum: 175000,
        context: 2048,
        summary: 'Breakthrough in few-shot learning, launched API access',
        capabilities: [
            'Few-shot learning',
            'Code generation (basic)',
            'Language translation',
            'Creative writing',
            'Math problem solving',
            'API access'
        ],
        pricing: '$0.02/1K tokens (Davinci)',
        benchmarks: 'LAMBADA: 76% accuracy, TriviaQA: 64.3% accuracy'
    },
    {
        id: 'gpt35',
        name: 'GPT-3.5',
        date: 'November 2022',
        dateSort: '2022-11',
        params: '175B (estimated)',
        paramsNum: 175000,
        context: 4096,
        summary: 'ChatGPT launch, instruction following, conversational AI breakthrough',
        capabilities: [
            'Instruction following',
            'Conversational context',
            'RLHF alignment',
            'Code understanding improved',
            'Refusal of harmful requests',
            'Chat interface'
        ],
        pricing: '$0.002/1K tokens (gpt-3.5-turbo)',
        benchmarks: 'Human preference: 85% win rate vs GPT-3'
    },
    {
        id: 'gpt4',
        name: 'GPT-4',
        date: 'March 2023',
        dateSort: '2023-03',
        params: 'Undisclosed (1T+ estimated)',
        paramsNum: 1000000,
        context: '8K / 32K',
        summary: 'Multimodal capabilities, major reasoning improvements, passes professional exams',
        capabilities: [
            'Vision understanding (images)',
            'Advanced reasoning',
            'Professional-level performance',
            'Better factual accuracy',
            'Improved safety',
            'Longer context (32K variant)'
        ],
        pricing: '$0.03/1K input, $0.06/1K output (8K)',
        benchmarks: 'Bar exam: 90th percentile, SAT Math: 89th percentile, MMLU: 86.4%'
    },
    {
        id: 'gpt4-turbo',
        name: 'GPT-4 Turbo',
        date: 'November 2023',
        dateSort: '2023-11',
        params: 'Undisclosed',
        paramsNum: 1000000,
        context: 128000,
        summary: '128K context window, cheaper pricing, knowledge cutoff updated',
        capabilities: [
            'Massive context (128K tokens)',
            'JSON mode',
            'Reproducible outputs (seed)',
            'Vision improvements',
            'Function calling enhanced',
            'Updated knowledge cutoff'
        ],
        pricing: '$0.01/1K input, $0.03/1K output',
        benchmarks: 'Maintained GPT-4 quality with 3x cost reduction'
    },
    {
        id: 'gpt4o',
        name: 'GPT-4o',
        date: 'May 2024',
        dateSort: '2024-05',
        params: 'Undisclosed',
        paramsNum: 1000000,
        context: 128000,
        summary: 'Omni model - text, vision, and audio, 2x faster, 50% cheaper',
        capabilities: [
            'Native audio understanding',
            'Real-time voice conversations',
            'Vision analysis',
            '2x faster than GPT-4 Turbo',
            'Better multilingual support',
            'Improved vision performance'
        ],
        pricing: '$0.005/1K input, $0.015/1K output',
        benchmarks: 'MMLU: 88.7%, HumanEval: 90.2%, multilingual MMLU improvement'
    },
    {
        id: 'gpt4o-mini',
        name: 'GPT-4o mini',
        date: 'July 2024',
        dateSort: '2024-07',
        params: 'Undisclosed (smaller)',
        paramsNum: 200000,
        context: 128000,
        summary: 'Smallest, cheapest, fastest GPT-4 class model for high-volume tasks',
        capabilities: [
            'Fast inference',
            'Cost-effective',
            'Vision support',
            'Function calling',
            'High intelligence for size',
            'Better than GPT-3.5'
        ],
        pricing: '$0.00015/1K input, $0.0006/1K output',
        benchmarks: 'MMLU: 82%, outperforms GPT-3.5 on most benchmarks'
    },
    {
        id: 'gpt5',
        name: 'GPT-5',
        date: 'September 2025',
        dateSort: '2025-09',
        params: 'Undisclosed (multi-trillion estimated)',
        paramsNum: 5000000,
        context: 256000,
        summary: 'Major reasoning leap, PhD-level knowledge, enhanced safety',
        capabilities: [
            'PhD-level reasoning',
            'Multi-step planning',
            'Scientific research assistance',
            'Enhanced factual accuracy',
            'Improved alignment',
            '256K context window'
        ],
        pricing: '$0.04/1K input, $0.12/1K output',
        benchmarks: 'GPQA Diamond: 75%, competitive programming: Codeforces 1800+'
    },
    {
        id: 'gpt51',
        name: 'GPT-5.1',
        date: 'November 2025',
        dateSort: '2025-11',
        params: 'Undisclosed',
        paramsNum: 5100000,
        context: 256000,
        summary: 'Monthly update cadence begins, improved reasoning stability',
        capabilities: [
            'More consistent reasoning',
            'Reduced hallucinations',
            'Better instruction following',
            'Enhanced code generation',
            'Improved mathematical reasoning',
            'Faster inference'
        ],
        pricing: '$0.035/1K input, $0.10/1K output',
        benchmarks: 'MATH-500: 92%, HumanEval+: 95%'
    },
    {
        id: 'gpt52',
        name: 'GPT-5.2',
        date: 'December 2025',
        dateSort: '2025-12',
        params: 'Undisclosed',
        paramsNum: 5200000,
        context: 256000,
        summary: 'Improved coding capabilities, better debugging and code review',
        capabilities: [
            'Advanced code understanding',
            'Automated debugging',
            'Architecture suggestions',
            'Security vulnerability detection',
            'Multi-file code generation',
            'Better test generation'
        ],
        pricing: '$0.035/1K input, $0.10/1K output',
        benchmarks: 'SWE-bench: 48%, improved code completion quality'
    },
    {
        id: 'gpt53',
        name: 'GPT-5.3',
        date: 'February 2026',
        dateSort: '2026-02',
        params: 'Undisclosed',
        paramsNum: 5300000,
        context: 512000,
        summary: 'Codex integration, 512K context, advanced software engineering',
        capabilities: [
            'Full codebase understanding',
            '512K context window',
            'Integrated development tools',
            'Real-time collaboration',
            'Multi-language expert',
            'Code migration assistance'
        ],
        pricing: '$0.04/1K input, $0.12/1K output',
        benchmarks: 'SWE-bench: 65%, multi-file editing accuracy: 88%'
    },
    {
        id: 'gpt53-instant',
        name: 'GPT-5.3 Instant',
        date: 'March 2026',
        dateSort: '2026-03-15',
        params: 'Undisclosed (optimized)',
        paramsNum: 5300000,
        context: 128000,
        summary: 'Fastest variant with sub-second first token, optimized for real-time',
        capabilities: [
            'Sub-second latency',
            'Real-time streaming',
            'Optimized for chat',
            'Voice-optimized',
            'Lower context (128K)',
            'Same reasoning quality'
        ],
        pricing: '$0.02/1K input, $0.06/1K output',
        benchmarks: 'First token: <200ms, maintains GPT-5.3 quality'
    },
    {
        id: 'gpt54',
        name: 'GPT-5.4',
        date: 'March 2026',
        dateSort: '2026-03-18',
        params: 'Undisclosed',
        paramsNum: 5400000,
        context: 512000,
        summary: 'Latest release with enhanced multimodal understanding and safety',
        capabilities: [
            'Advanced vision-language integration',
            'Improved safety guardrails',
            'Better long-context performance',
            'Enhanced factual grounding',
            'Scientific reasoning improvements',
            'Multi-modal chain-of-thought'
        ],
        pricing: '$0.04/1K input, $0.12/1K output',
        benchmarks: 'MMLU-Pro: 94%, GPQA: 82%, Vision-QA: 91%'
    }
];

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('.icon');

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
}

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// Generate Timeline
const timeline = document.getElementById('timeline');

function createTimelineNode(model) {
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.setAttribute('role', 'listitem');
    node.setAttribute('tabindex', '0');
    node.setAttribute('data-model-id', model.id);

    node.innerHTML = `
        <div class="node-header">
            <h3 class="node-title">${model.name}</h3>
            <span class="node-date">${model.date}</span>
        </div>
        <p class="node-summary">${model.summary}</p>
        <div class="node-details">
            <div class="detail-grid">
                <div class="detail-item">
                    <strong>Parameters</strong>
                    <span>${model.params}</span>
                </div>
                <div class="detail-item">
                    <strong>Context Window</strong>
                    <span>${model.context.toLocaleString()} tokens</span>
                </div>
                <div class="detail-item">
                    <strong>Pricing</strong>
                    <span>${model.pricing}</span>
                </div>
            </div>
            <div class="capabilities-list">
                <h4>Key Capabilities</h4>
                <ul>
                    ${model.capabilities.map(cap => `<li>${cap}</li>`).join('')}
                </ul>
            </div>
            <div class="detail-item" style="margin-top: 1rem;">
                <strong>Notable Benchmarks</strong>
                <span style="display: block; margin-top: 0.5rem;">${model.benchmarks}</span>
            </div>
        </div>
    `;

    // Toggle expand on click
    node.addEventListener('click', () => {
        const wasExpanded = node.classList.contains('expanded');
        // Collapse all other nodes
        document.querySelectorAll('.timeline-node').forEach(n => {
            n.classList.remove('expanded');
        });
        if (!wasExpanded) {
            node.classList.add('expanded');
        }
    });

    // Keyboard support
    node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            node.click();
        }
    });

    return node;
}

// Render all timeline nodes
gptModels.forEach(model => {
    timeline.appendChild(createTimelineNode(model));
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-node').forEach(node => {
    observer.observe(node);
});

// Populate comparison dropdowns
const select1 = document.getElementById('compare-model-1');
const select2 = document.getElementById('compare-model-2');
const compareBtn = document.getElementById('compare-btn');
const comparisonResult = document.getElementById('comparison-result');

gptModels.forEach(model => {
    const option1 = document.createElement('option');
    option1.value = model.id;
    option1.textContent = model.name;
    select1.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = model.id;
    option2.textContent = model.name;
    select2.appendChild(option2);
});

// Enable compare button when both selects have values
function updateCompareButton() {
    compareBtn.disabled = !select1.value || !select2.value || select1.value === select2.value;
}

select1.addEventListener('change', updateCompareButton);
select2.addEventListener('change', updateCompareButton);

// Compare functionality
compareBtn.addEventListener('click', () => {
    const model1 = gptModels.find(m => m.id === select1.value);
    const model2 = gptModels.find(m => m.id === select2.value);

    if (!model1 || !model2) return;

    comparisonResult.innerHTML = `
        <div class="comparison-card">
            <h3>${model1.name}</h3>
            <div class="detail">
                <div class="detail-label">Release Date</div>
                <div class="detail-value">${model1.date}</div>
            </div>
            <div class="detail">
                <div class="detail-label">Parameters</div>
                <div class="detail-value">${model1.params}</div>
            </div>
            <div class="detail">
                <div class="detail-label">Context Window</div>
                <div class="detail-value">${model1.context.toLocaleString()} tokens</div>
            </div>
            <div class="detail">
                <div class="detail-label">Pricing</div>
                <div class="detail-value">${model1.pricing}</div>
            </div>
            <div class="detail">
                <div class="detail-label">Key Capabilities</div>
                <div class="detail-value">
                    <ul style="margin: 0.5rem 0; padding-left: 1.25rem;">
                        ${model1.capabilities.map(cap => `<li>${cap}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="detail">
                <div class="detail-label">Benchmarks</div>
                <div class="detail-value">${model1.benchmarks}</div>
            </div>
        </div>
        <div class="comparison-card">
            <h3>${model2.name}</h3>
            <div class="detail">
                <div class="detail-label">Release Date</div>
                <div class="detail-value">${model2.date}</div>
            </div>
            <div class="detail">
                <div class="detail-label">Parameters</div>
                <div class="detail-value">${model2.params}</div>
            </div>
            <div class="detail">
                <div class="detail-label">Context Window</div>
                <div class="detail-value">${model2.context.toLocaleString()} tokens</div>
            </div>
            <div class="detail">
                <div class="detail-label">Pricing</div>
                <div class="detail-value">${model2.pricing}</div>
            </div>
            <div class="detail">
                <div class="detail-label">Key Capabilities</div>
                <div class="detail-value">
                    <ul style="margin: 0.5rem 0; padding-left: 1.25rem;">
                        ${model2.capabilities.map(cap => `<li>${cap}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="detail">
                <div class="detail-label">Benchmarks</div>
                <div class="detail-value">${model2.benchmarks}</div>
            </div>
        </div>
    `;

    comparisonResult.hidden = false;
    comparisonResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Simple parameter growth chart using Canvas
const canvas = document.getElementById('growth-chart');
const ctx = canvas.getContext('2d');

function drawChart() {
    // Set canvas size
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    // Get theme colors
    const isDark = html.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#e9ecef' : '#1a1a1a';
    const lineColor = isDark ? '#495057' : '#dee2e6';
    const accentColor = '#10a37f';

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Prepare data (log scale for parameters)
    const data = gptModels.map(m => ({
        name: m.name,
        params: m.paramsNum,
        year: m.dateSort
    }));

    const maxParams = Math.max(...data.map(d => d.params));

    // Draw axes
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw title
    ctx.fillStyle = textColor;
    ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.textAlign = 'center';
    ctx.fillText('Parameter Count Growth (Log Scale)', width / 2, 30);

    // Draw Y-axis label
    ctx.save();
    ctx.translate(20, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillText('Parameters', 0, 0);
    ctx.restore();

    // Draw X-axis label
    ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillText('Year', width / 2, height - 20);

    // Plot points and line
    ctx.strokeStyle = accentColor;
    ctx.fillStyle = accentColor;
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((d, i) => {
        // Use log scale for Y
        const logParams = Math.log10(d.params);
        const logMax = Math.log10(maxParams);

        const x = padding + (chartWidth / (data.length - 1)) * i;
        const y = height - padding - (logParams / logMax) * chartHeight;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        // Draw point
        ctx.fillRect(x - 4, y - 4, 8, 8);

        // Draw label
        ctx.fillStyle = textColor;
        ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
        ctx.textAlign = 'center';
        ctx.fillText(d.name, x, height - padding + 20);

        ctx.fillStyle = accentColor;
    });

    ctx.stroke();

    // Draw Y-axis labels
    ctx.fillStyle = textColor;
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.textAlign = 'right';

    const yLabels = ['100M', '1B', '10B', '100B', '1T', '10T'];
    yLabels.forEach((label, i) => {
        const y = height - padding - (i / (yLabels.length - 1)) * chartHeight;
        ctx.fillText(label, padding - 10, y + 4);
    });
}

// Draw chart on load and theme change
drawChart();
window.addEventListener('resize', drawChart);
themeToggle.addEventListener('click', () => {
    setTimeout(drawChart, 100); // Delay to allow theme transition
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.timeline-node').forEach(node => {
            node.classList.remove('expanded');
        });
    }
});

// Update total models count
document.getElementById('total-models').textContent = gptModels.length;

console.log('GPT Model Timeline initialized with', gptModels.length, 'models');
