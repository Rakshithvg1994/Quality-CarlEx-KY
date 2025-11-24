// Slide data - 8 slides as per requirements
const slides = [
  {
    id: 1,
    title: 'Executive Summary',
    type: 'executive'
  },
  {
    id: 2,
    title: 'Current State Assessment',
    type: 'assessment'
  },
  {
    id: 3,
    title: 'Maturity Progression',
    type: 'progression'
  },
  {
    id: 4,
    title: 'Kylemore vs Kastzalan',
    type: 'comparison'
  },
  {
    id: 5,
    title: 'Radial Comparison',
    type: 'radar'
  },
  {
    id: 6,
    title: 'Phased Roadmap 2026',
    type: 'roadmap'
  },
  {
    id: 7,
    title: '2026 Project Timeline',
    type: 'gantt'
  },
  {
    id: 8,
    title: 'Expected Outcomes',
    type: 'outcomes'
  }
];

let currentSlide = 0;
let charts = {};

// Initialize
function init() {
  renderNavigation();
  renderSlide(currentSlide);
  updateControls();
  attachEventListeners();
}

function renderNavigation() {
  const nav = document.getElementById('slideNav');
  nav.innerHTML = slides.map((slide, index) => `
    <li class="slide-nav-item ${index === 0 ? 'active' : ''}" data-slide="${index}">
      <span class="slide-nav-number">${slide.id}</span>
      ${slide.title}
    </li>
  `).join('');
}

function renderSlide(index) {
  const slideArea = document.getElementById('slideArea');
  const slide = slides[index];
  
  let content = '';
  
  switch(slide.type) {
    case 'executive':
      content = renderExecutiveSlide();
      break;
    case 'assessment':
      content = renderAssessmentSlide();
      break;
    case 'progression':
      content = renderProgressionSlide();
      break;
    case 'comparison':
      content = renderComparisonSlide();
      break;
    case 'radar':
      content = renderRadarSlide();
      break;
    case 'roadmap':
      content = renderRoadmapSlide();
      break;
    case 'gantt':
      content = renderGanttSlide();
      break;
    case 'outcomes':
      content = renderOutcomesSlide();
      break;
  }
  
  slideArea.innerHTML = `
    <div class="slide active">
      <div class="date-badge">Nov 23, 2025</div>
      ${content}
    </div>
  `;
  
  // Render charts after DOM update
  setTimeout(() => {
    if (slide.type === 'progression') renderProgressionChart();
    if (slide.type === 'comparison') renderComparisonChart();
    if (slide.type === 'radar') renderRadarChart();
    if (slide.type === 'gantt') renderGanttChart();
  }, 100);
}



function renderExecutiveSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">QUALITY DEPARTMENT KYLEMORE</h1>
      <p class="slide-subtitle">Executive Summary</p>
    </div>
    
    <div class="metrics-row">
      <div class="metric-card">
        <div class="metric-label">Current Baseline (Oct 2025)</div>
        <div class="metric-value">0.6/4.0</div>
        <p style="color: var(--color-text-secondary); margin-top: 8px;">(15%)</p>
      </div>
      <div class="metric-card">
        <div class="metric-label">2026 Target (Dec 2026)</div>
        <div class="metric-value">1.73/4.0</div>
        <p style="color: var(--color-text-secondary); margin-top: 8px;">(43.3%)</p>
      </div>
      <div class="metric-card">
        <div class="metric-label">Improvement</div>
        <div class="metric-value">+189%</div>
        <p style="color: var(--color-text-secondary); margin-top: 8px;">(+1.13 points)</p>
      </div>
      <div class="metric-card">
        <div class="metric-label">Kastzalan Benchmark</div>
        <div class="metric-value">3.0/4.0</div>
        <p style="color: var(--color-text-secondary); margin-top: 8px;">(75%)</p>
      </div>
    </div>
    
    <div class="content-section">
      <h3 class="section-title">Strategic Goal</h3>
      <p style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); color: var(--carlsberg-green);">Close 57% of maturity gap to Kastzalan within 12 months</p>
    </div>
    
    <div class="two-column">
      <div class="content-section">
        <h3 class="section-title">Physical Areas</h3>
        <ul class="list-items">
          <li>Analytical Lab</li>
          <li>Micro Lab</li>
          <li>Retain Store</li>
          <li>Sensory Room</li>
        </ul>
      </div>
      
      <div class="content-section">
        <h3 class="section-title">Priority Workplaces</h3>
        <ul class="list-items">
          <li>Analytical Lab</li>
          <li>Micro Lab</li>
          <li>Sensory Room</li>
        </ul>
      </div>
    </div>
  `;
}

function renderAssessmentSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">Current State Assessment</h1>
    </div>
    
    <div class="content-section">
      <h3 class="section-title">STRENGTHS</h3>
      <ul class="list-items strengths">
        <li>Robust abnormality reporting (2/4)</li>
        <li>Documentation foundation</li>
        <li>Sensory room culture</li>
      </ul>
    </div>
    
    <div class="content-section">
      <h3 class="section-title">CURRENT SCORES</h3>
      <p style="font-size: var(--font-size-base); line-height: 1.8;">
        5S(1) | Workflow(1) | Docs(1) | Visual(0) | Abnorm(2) | Prior(0) | PMS(1) | Focused(0) | Kaizen(0) | Problem(1) | Org(1) | Skill(1) | Train(1) | G-Lead(0) | G-Walk(0)
      </p>
    </div>
    
    <div class="content-section">
      <h3 class="section-title">KEY GAPS</h3>
      <ul class="list-items weaknesses">
        <li>Visual Standards (0/4)</li>
        <li>Priorities (0/4)</li>
        <li>Focused Improvement (0/4)</li>
        <li>Gemba Kaizen (0/4)</li>
        <li>Gemba Leadership (0/4)</li>
        <li>Gemba Walk (0/4)</li>
      </ul>
    </div>
  `;
}

function renderProgressionSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">Maturity Progression — Baseline vs 2026 Target</h1>
    </div>
    
    <div class="chart-container">
      <canvas id="progressionChart" class="chart-canvas"></canvas>
    </div>
  `;
}

function renderProgressionChart() {
  const ctx = document.getElementById('progressionChart');
  if (!ctx) return;
  
  if (charts.progression) {
    charts.progression.destroy();
  }
  
  const labels = ['5S', 'WF', 'Docs', 'Visual', 'Abnorm', 'Prior', 'PMS', 'Focused', 'Kaizen', 'Problem', 'Org', 'Skill', 'Train', 'G-Lead', 'G-Walk'];
  const baseline = [1, 1, 1, 0, 2, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0];
  const target = [2, 2, 2, 1, 3, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1];
  
  charts.progression = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Baseline (Oct 2025)',
          data: baseline,
          backgroundColor: '#A7F3D0',
          borderColor: '#22C55E',
          borderWidth: 2
        },
        {
          label: 'Target (Dec 2026)',
          data: target,
          backgroundColor: '#1B4D2E',
          borderColor: '#134D2E',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 3.5,
          ticks: {
            stepSize: 0.5
          },
          title: {
            display: true,
            text: 'Maturity Score'
          }
        },
        x: {
          title: {
            display: true,
            text: '15 Check Items'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });
}

function renderComparisonSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">Gap Analysis: Kylemore vs Kastzalan</h1>
    </div>
    
    <div class="content-section">
      <h3 class="section-title">Key Findings</h3>
      <ul class="list-items">
        <li><strong>Largest Gaps (0 vs 3):</strong> Visual Standards, Kaizen, Priorities, Gemba Leadership, Gemba Walk</li>
        <li><strong>Strength Area:</strong> Abnormality Reporting (2 vs 3, only -1 gap)</li>
      </ul>
    </div>
    
    <div class="content-section">
      <h3 class="section-title">Gap Analysis Summary</h3>
      <p style="font-size: var(--font-size-lg); line-height: 1.8;">
        The transformation focuses on closing the highest-gap areas first. Five critical items (Visual Standards, Priorities, Focused Improvement, Gemba Kaizen, Gemba Leadership, Gemba Walk) currently score 0 compared to Kastzalan's 3, representing the primary opportunity for improvement.
      </p>
    </div>
  `;
}

function renderComparisonChart() {
  // No chart needed for slide 4
}

function renderRadarSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">Kylemore vs Kastzalan 2025 — Radial Comparison</h1>
    </div>
    
    <div class="chart-container">
      <canvas id="radarChart" class="chart-canvas"></canvas>
    </div>
  `;
}

function renderRadarChart() {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;
  
  if (charts.radar) {
    charts.radar.destroy();
  }
  
  const labels = ['5S', 'Workflow', 'Std Docs', 'Visual', 'Abnormality', 'Priorities', 'PMS', 'Focused', 'Kaizen', 'Problem', 'Org Setup', 'Skill', 'Training', 'Gemba Lead', 'Gemba Walk'];
  const kylemore = [1, 1, 1, 0, 2, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0];
  const kastzalan = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  
  charts.radar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Kylemore (Oct 2025)',
          data: kylemore,
          backgroundColor: 'rgba(167, 243, 208, 0.3)',
          borderColor: '#22C55E',
          borderWidth: 2,
          pointBackgroundColor: '#22C55E',
          pointRadius: 4
        },
        {
          label: 'Kastzalan (2025)',
          data: kastzalan,
          backgroundColor: 'rgba(27, 77, 46, 0.3)',
          borderColor: '#1B4D2E',
          borderWidth: 2,
          pointBackgroundColor: '#1B4D2E',
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 4,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });
}

function renderConclusionSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">Thank You</h1>
    </div>
    
    <div class="highlight-box">
      <p style="font-size: var(--font-size-2xl); text-align: center; font-weight: var(--font-weight-semibold); color: var(--carlsberg-green);">Quality Department Excellence Journey 2026</p>
    </div>
  `;
}

function renderTargetsSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">Strategic Maturity Targets</h1>
    </div>
    
    <div class="chart-container">
      <canvas id="targetsChart" class="chart-canvas"></canvas>
    </div>
    
    <div class="highlight-box">
      <h3 style="font-size: var(--font-size-xl); color: var(--carlsberg-green); margin-bottom: var(--space-12);">Analysis</h3>
      <p style="font-size: var(--font-size-lg);">Quality closes 57% of maturity gap to Kastzalan within 12 months</p>
    </div>
  `;
}

function renderTargetsChart() {
  const ctx = document.getElementById('targetsChart');
  if (!ctx) return;
  
  if (charts.targets) {
    charts.targets.destroy();
  }
  
  charts.targets = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Kylemore Oct 2025', 'Kylemore Dec 2026 Target', 'Kastzalan 2025'],
      datasets: [{
        label: 'Maturity %',
        data: [15, 43.3, 75],
        backgroundColor: ['#cccccc', '#22c55e', '#1b4d2e'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Maturity %'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Strategic Maturity Progression'
        }
      }
    }
  });
}

function renderRoadmapSlide() {
  const quarters = [
    {
      q: 'Q1',
      title: 'FOUNDATION BUILDING',
      months: 'Jan-Mar',
      activities: [
        '5S workplace standardization',
        'Workflow mapping &amp; documentation',
        'NCR escalation board setup',
        'PMS meeting structure'
      ],
      outcome: 'Basic infrastructure'
    },
    {
      q: 'Q2',
      title: 'DEPLOYMENT &amp; VISUAL MANAGEMENT',
      months: 'Apr-Jun',
      activities: [
        'Visual standards deployment',
        'KPI/KAI performance boards',
        'Priorities &amp; 9-Grid cascade',
        'Loss intelligence foundation'
      ],
      outcome: 'Visible management'
    },
    {
      q: 'Q3',
      title: 'EXPANSION &amp; CAPABILITY',
      months: 'Jul-Sep',
      activities: [
        'Kaizen Campaign 1',
        'RCA training',
        'Skill matrices &amp; IDPs',
        'Gemba leadership training'
      ],
      outcome: 'Problem-solving capability'
    },
    {
      q: 'Q4',
      title: 'EMBEDDING &amp; SUSTAINMENT',
      months: 'Oct-Dec',
      activities: [
        'Gemba walks expanded',
        'Sustainment audits (80%+)',
        'Cross-dept learning',
        'Year-end recognition'
      ],
      outcome: 'Culture embedded'
    }
  ];
  
  const quarterCards = quarters.map(q => `
    <div class="quarter-card">
      <div class="quarter-header">
        <span class="quarter-badge">${q.q}</span>
        <span class="quarter-title">${q.title}</span>
      </div>
      <p style="color: var(--color-text-secondary); margin-bottom: var(--space-12); font-size: var(--font-size-sm);">${q.months}</p>
      <ul class="list-items">
        ${q.activities.map(a => `<li>${a}</li>`).join('')}
      </ul>
      <div style="margin-top: var(--space-16); padding: var(--space-12); background: var(--color-bg-3); border-radius: var(--radius-base); font-weight: var(--font-weight-semibold);">
        <strong>Outcome:</strong> ${q.outcome}
      </div>
    </div>
  `).join('');
  
  return `
    <div class="slide-header">
      <h1 class="slide-title">Phased Roadmap 2026</h1>
    </div>
    
    <div class="timeline-container">
      ${quarterCards}
    </div>
  `;
}

function renderGanttSlide() {
  return `
    <div class="slide-header">
      <h1 class="slide-title">2026 Project Timeline</h1>
    </div>
    
    <div class="chart-container" style="height: 500px;">
      <canvas id="ganttChart" class="chart-canvas"></canvas>
    </div>
  `;
}

function renderGanttChart() {
  const ctx = document.getElementById('ganttChart');
  if (!ctx) return;
  
  if (charts.gantt) {
    charts.gantt.destroy();
  }
  
  const milestones = [
    { month: 0, label: '5S Assessment' },
    { month: 2, label: 'PMS Kick-off' },
    { month: 3, label: 'Visual Deploy' },
    { month: 5, label: 'First Audit' },
    { month: 6, label: 'Kaizen Launch' },
    { month: 7, label: 'RCA Training' },
    { month: 9, label: 'Sustain Audits' },
    { month: 11, label: 'Target Verify' }
  ];
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const q1Data = [100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const q2Data = [0, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0];
  const q3Data = [0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0];
  const q4Data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100];
  
  charts.gantt = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Q1: Foundation',
          data: q1Data,
          backgroundColor: '#D1FAE5',
          borderColor: '#A7F3D0',
          borderWidth: 1
        },
        {
          label: 'Q2: Deployment',
          data: q2Data,
          backgroundColor: '#A7F3D0',
          borderColor: '#6EE7B7',
          borderWidth: 1
        },
        {
          label: 'Q3: Expansion',
          data: q3Data,
          backgroundColor: '#6EE7B7',
          borderColor: '#34D399',
          borderWidth: 1
        },
        {
          label: 'Q4: Embedding',
          data: q4Data,
          backgroundColor: '#22C55E',
          borderColor: '#1B4D2E',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: 'Month',
            font: {
              size: 14,
              weight: '600'
            }
          }
        },
        y: {
          stacked: true,
          display: false,
          max: 100
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 11
            },
            padding: 12
          }
        },
        title: {
          display: true,
          text: 'Key Milestones: Jan (5S), Mar (PMS), Apr (Visual), Jun (Audit), Jul (Kaizen), Aug (RCA), Oct (Sustain), Dec (Verify)',
          font: {
            size: 13,
            weight: '500'
          },
          padding: 15
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const monthIndex = context.dataIndex;
              const milestone = milestones.find(m => m.month === monthIndex);
              if (milestone && context.parsed.y > 0) {
                return [context.dataset.label, '📍 ' + milestone.label];
              }
              return context.dataset.label;
            }
          }
        }
      }
    }
  });
}

function renderKastzalanPhotosSlide() {
  return renderRadarSlide();
}

function renderCalendarSlide() {
  const months = [
    { month: 'January', q: 'Q1', actions: 'Launch 5S assessment; Map priority areas &amp; workflows', owner: 'Quality Lead', verification: 'Completed zone maps' },
    { month: 'February', q: 'Q1', actions: 'SOP refresh; Process mapping documentation', owner: 'Analyst Lead', verification: 'SOP checklist signed off' },
    { month: 'March', q: 'Q1', actions: 'NCR visual board setup; PMS kick-off; Owner assignments', owner: 'Quality Lead', verification: 'PMS meeting held' },
    { month: 'April', q: 'Q2', actions: 'Visual standards deployment; KPI board install', owner: 'Technician Team', verification: 'Visual audit score 60%+' },
    { month: 'May', q: 'Q2', actions: 'KPI/KAI cascade; Loss tree development; 9-Grid alignment', owner: 'Quality Lead', verification: 'Loss tree documented' },
    { month: 'June', q: 'Q2', actions: 'PMS rules &amp; agenda finalized; First full audit cycle', owner: 'All Staff', verification: 'Audit scores recorded' },
    { month: 'July', q: 'Q3', actions: 'Kaizen Campaign 1 launch; Skill matrix draft', owner: 'Analyst Lead', verification: '5+ ideas submitted' },
    { month: 'August', q: 'Q3', actions: 'Problem-solving RCA training; IDP completion', owner: 'Quality Lead', verification: '80% staff trained' },
    { month: 'September', q: 'Q3', actions: 'Gemba leadership coaching begins; COM audit', owner: 'Lead + Coach', verification: 'Walk log started' },
    { month: 'October', q: 'Q4', actions: 'Sustainment audits; Cross-lab learning', owner: 'All Team Leaders', verification: 'Audit scores 80%+' },
    { month: 'November', q: 'Q4', actions: 'Skill IDP reviews; Training effectiveness check', owner: 'Quality Lead', verification: '90% IDP progress tracked' },
    { month: 'December', q: 'Q4', actions: 'Year-end recognition; 2026 target verification', owner: 'Plant Manager + Quality Lead', verification: 'Targets confirmed' }
  ];
  
  const tableRows = months.map((m, i) => `
    <tr class="month-row" data-month="${i}">
      <td style="font-weight: var(--font-weight-semibold);">${m.month}</td>
      <td>${m.q}</td>
      <td>${m.actions}</td>
      <td>${m.owner}</td>
      <td style="color: var(--carlsberg-green); font-weight: var(--font-weight-semibold);">${m.verification}</td>
    </tr>
  `).join('');
  
  return `
    <div class="slide-header">
      <h1 class="slide-title">Month-by-Month Implementation Calendar</h1>
    </div>
    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Q</th>
            <th>Key Interventions</th>
            <th>Owner</th>
            <th>Verification</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;
}



function renderOutcomesSlide() {
  const outcomes = [
    {
      title: 'CLOSE MATURITY GAP',
      description: 'Close 57% of gap to Kastzalan within 12 months (15% → 43.3%)'
    },
    {
      title: 'OPERATIONAL RESULTS',
      description: 'RFT +10-15% | NCR -20-30% | Resolution -25% | Turnaround -15% | Cost -25% | Audit 95%+'
    },
    {
      title: 'CONTINUOUS IMPROVEMENT CULTURE',
      description: 'Kaizen 12+/year | RCA on all NCRs | Gemba walks 2x weekly | Visual management'
    },
    {
      title: 'SITE REFERENCE MODEL',
      description: 'Benchmarking & knowledge sharing | Best practices documented | Leading performance'
    },
    {
      title: 'TEAM CAPABILITY',
      description: 'Gemba coaching embedded | 80%+ problem-solving | IDPs for all staff | Succession planning'
    },
    {
      title: 'STRATEGIC ALIGNMENT',
      description: 'Quality as competitive advantage | Reduced complaints | Cost savings | Operational agility'
    }
  ];
  
  const outcomeCards = outcomes.map(outcome => `
    <div class="metric-card" style="text-align: left;">
      <div class="metric-label" style="text-align: left;">${outcome.title}</div>
      <p style="color: var(--color-text); margin-top: var(--space-12); font-size: var(--font-size-sm); line-height: 1.6;">${outcome.description}</p>
    </div>
  `).join('');
  
  return `
    <div class="slide-header">
      <h1 class="slide-title">Expected Outcomes</h1>
    </div>
    
    <div class="metrics-row" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));">
      ${outcomeCards}
    </div>
  `;
}

function updateControls() {
  const counter = document.getElementById('slideCounter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  counter.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
  
  // Update nav
  document.querySelectorAll('.slide-nav-item').forEach((item, index) => {
    item.classList.toggle('active', index === currentSlide);
  });
}

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlide = index;
    renderSlide(currentSlide);
    updateControls();
  }
}

function attachEventListeners() {
  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 0) goToSlide(currentSlide - 1);
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
  });
  
  document.getElementById('fullscreenBtn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  
  // Navigation click
  document.getElementById('slideNav').addEventListener('click', (e) => {
    const item = e.target.closest('.slide-nav-item');
    if (item) {
      const index = parseInt(item.dataset.slide);
      goToSlide(index);
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
    if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    if (e.key === 'Escape' && document.fullscreenElement) document.exitFullscreen();
  });
}

// Initialize app
init();