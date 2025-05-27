const numDiscsInput = document.getElementById('numDiscs');
const totalVoltageInput = document.getElementById('totalVoltage');
const csInput = document.getElementById('cs');
const cmInput = document.getElementById('cm');

const numDiscsValue = document.getElementById('numDiscsValue');
const totalVoltageValue = document.getElementById('totalVoltageValue');
const csValue = document.getElementById('csValue');
const cmValue = document.getElementById('cmValue');

const stringContainer = document.getElementById('insulator-string');
const efficiencyDisplay = document.getElementById('string-efficiency');

let voltageChart;

function updateSliderValue(id, value) {
  document.getElementById(id + 'Value').textContent = value;
}

function updateChart(voltages) {
  const labels = voltages.map((_, i) => `Disc ${i + 1}`);
  const data = voltages.map(v => v.toFixed(2));

  if (voltageChart) {
    voltageChart.data.labels = labels;
    voltageChart.data.datasets[0].data = data;
    voltageChart.update();
  } else {
    const ctx = document.getElementById('voltageChart').getContext('2d');
    voltageChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Voltage (kV)',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Voltage (kV)'
            }
          }
        }
      }
    });
  }
}

function calculateVoltages(n, V, Cs, Cm) {
  let voltages = [];
  const k = Cs / Cm;
  let denom = 0;
  for (let j = 1; j <= n; j++) {
    denom += Math.pow(1 + k, j - 1);
  }
  for (let i = 1; i <= n; i++) {
    let Vi = V * Math.pow(1 + k, n - i) / denom;
    voltages.push(Vi);
  }
  return voltages;
}

function calculateStringEfficiency(voltages, V, n) {
  const V1 = voltages[0];
  const efficiency = (V / (n * V1)) * 100;
  return efficiency.toFixed(2);
}

function renderString() {
  const n = parseInt(numDiscsInput.value);
  const V = parseFloat(totalVoltageInput.value);
  const Cs = parseFloat(csInput.value);
  const Cm = parseFloat(cmInput.value);

  updateSliderValue('numDiscs', n);
  updateSliderValue('totalVoltage', V);
  updateSliderValue('cs', Cs);
  updateSliderValue('cm', Cm);

  const voltages = calculateVoltages(n, V, Cs, Cm);
  stringContainer.innerHTML = '';

  voltages.forEach((v, i) => {
    const disc = document.createElement('div');
    disc.className = 'disc animated';

    let intensity = Math.min(255, Math.floor((v / V) * 255));
    disc.style.backgroundColor = `rgb(${intensity}, 20, ${255 - intensity})`;
    disc.title = `Disc ${i + 1}\nVoltage: ${v.toFixed(2)} kV\n${((v / V) * 100).toFixed(1)}% of total`;

    const label = document.createElement('div');
    label.className = 'voltage-label';
    label.textContent = v.toFixed(1) + ' kV';

    disc.appendChild(label);
    stringContainer.appendChild(disc);

    if (i < voltages.length - 1) {
      const svgNS = "http://www.w3.org/2000/svg";

      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", "30");
      svg.setAttribute("height", "50");
      svg.style.margin = "0 5px";

      const path = document.createElementNS(svgNS, "path");
      // path.setAttribute("d", "M5 40 L25 25 L5 10");
      path.setAttribute("d", "M10 5 L25 25 L10 45");

      path.setAttribute("stroke", "orange");
      path.setAttribute("stroke-width", "3");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("stroke-linecap", "round");

      svg.appendChild(path);

      path.style.strokeDasharray = "40";
      path.style.strokeDashoffset = "40";
      path.style.animation = "dashmove 2s linear infinite";

      stringContainer.appendChild(svg);
    }
  });

  const efficiency = calculateStringEfficiency(voltages, V, n);
  efficiencyDisplay.textContent = `String Efficiency: ${efficiency}%`;
  updateChart(voltages);

  // Load quiz question on every render
  loadQuizQuestion(voltages, efficiency);
}

// Play button animation logic
const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', () => {
  const discs = [...document.querySelectorAll('#insulator-string .disc')];

  discs.forEach(d => {
    d.style.opacity = '0.3';
    d.classList.remove('animated');
  });

  let currentIndex = 0;

  function highlightNext() {
    if (currentIndex > 0) {
      discs[currentIndex - 1].style.opacity = '0.6';
      discs[currentIndex - 1].classList.add('animated');
    }
    if (currentIndex < discs.length) {
      discs[currentIndex].style.opacity = '1';
      discs[currentIndex].classList.add('animated');
      currentIndex++;
      setTimeout(highlightNext, 600);
    } else {
      discs.forEach(d => {
        d.style.opacity = '1';
        d.classList.add('animated');
      });
    }
  }
  highlightNext();
});

// Attach input listeners
[numDiscsInput, totalVoltageInput, csInput, cmInput].forEach(input =>
  input.addEventListener('input', renderString)
);

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
  numDiscsInput.value = 5;
  totalVoltageInput.value = 100;
  csInput.value = 0.5;
  cmInput.value = 1;
  renderString();
  alert("Simulation reset to default values.");
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
});

// --- QUIZ SECTION ---

const quizSection = document.getElementById('quiz-section');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const nextQuestionBtn = document.getElementById('next-question');

const quizQuestions = [
  {
    question: "Guess the string efficiency for the current settings (in %):",
    getOptions: (efficiency) => {
      const base = Math.round(efficiency);
      return [base - 5, base, base + 5, base + 10].map(x => x.toString());
    },
    correctAnswer: (efficiency) => Math.round(efficiency).toString(),
    explanation: (efficiency) => `The string efficiency is about ${efficiency}% based on the voltage distribution.`,
  },
  {
    question: "Which disc has the highest voltage?",
    getOptions: (voltages) => {
      return voltages.map((_, i) => `Disc ${i + 1}`);
    },
    correctAnswer: (voltages) => {
      const maxIndex = voltages.indexOf(Math.max(...voltages));
      return `Disc ${maxIndex + 1}`;
    },
    explanation: (voltages) => {
      const maxIndex = voltages.indexOf(Math.max(...voltages));
      return `Disc ${maxIndex + 1} has the highest voltage because voltage decreases from conductor to tower.`;
    },
  }
];
let quizScore = 0;
let quizTotal = 0;
let currentQuizIndex = 0;

function loadQuizQuestion(voltages, efficiency) {
  quizFeedback.textContent = "";
  nextQuestionBtn.style.display = "none";
  quizOptions.innerHTML = "";

  const q = quizQuestions[currentQuizIndex];
  quizQuestion.textContent = q.question;

  const options = currentQuizIndex === 0 ? q.getOptions(efficiency) : q.getOptions(voltages);

  options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.style.margin = '5px';
    btn.addEventListener('click', () => {
      [...quizOptions.children].forEach(b => b.disabled = true);

      const correct = currentQuizIndex === 0
        ? (option === q.correctAnswer(efficiency))
        : (option === q.correctAnswer(voltages));

      if (correct) {
        quizFeedback.style.color = 'green';
        quizFeedback.textContent = "Correct! " + q.explanation(currentQuizIndex === 0 ? efficiency : voltages);
      } else {
        quizFeedback.style.color = 'red';
        quizFeedback.textContent = "Incorrect. " + q.explanation(currentQuizIndex === 0 ? efficiency : voltages);
      }
      nextQuestionBtn.style.display = "inline-block";
    });
    quizOptions.appendChild(btn);
  });
}

nextQuestionBtn.addEventListener('click', () => {
  currentQuizIndex++;
  if (currentQuizIndex >= quizQuestions.length) {
    currentQuizIndex = 0;
  }
  const n = parseInt(numDiscsInput.value);
  const V = parseFloat(totalVoltageInput.value);
  const Cs = parseFloat(csInput.value);
  const Cm = parseFloat(cmInput.value);
  const voltages = calculateVoltages(n, V, Cs, Cm);
const efficiency = calculateStringEfficiency(voltages, V, n);
loadQuizQuestion(voltages, efficiency);
});

window.addEventListener('DOMContentLoaded', () => {
renderString();
});
document.getElementById('screenshotBtn').addEventListener('click', () => {
  html2canvas(document.getElementById('insulator-string')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'insulator_simulation.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
const theoryModal = document.getElementById('theoryModal');
const theoryBtn = document.getElementById('theoryBtn');
const closeModal = theoryModal.querySelector('.close');

theoryBtn.addEventListener('click', () => {
  theoryModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  theoryModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == theoryModal) {
    theoryModal.style.display = 'none';
  }
});
