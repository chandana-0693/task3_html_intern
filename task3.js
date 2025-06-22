
// Tyre gallery interactivity
const tyreVariants = {
  "Car Tyres": [
    "bii.jpg",
    "download.jpg",
    "download 2.jpg"
  ],
  "Lorry Tyres": [
    "bi.jpg",
    "download.jpg",
    "download 2.jpg"
  ],
  "Bike Tyres": [
    "bii.jpg",
    "download 2.jpg",
    "download.jpg"
  ]
};

function showDetails(title, description) {
  document.getElementById('detail-title').innerText = title;
  document.getElementById('detail-description').innerText = description;

  const variants = tyreVariants[title] || [];
  const variantHTML = variants.map(src => `<img src="${src}" alt="${title} variant" class="variant-img">`).join('');

  let detailsBox = document.getElementById('tyre-details');
  detailsBox.classList.remove('hidden');
  detailsBox.innerHTML = `
    <h2 id="detail-title">${title}</h2>
    <p id="detail-description">${description}</p>
    <div class="variant-container">${variantHTML}</div>
    <button onclick="hideDetails()">Close</button>
  `;

  detailsBox.scrollIntoView({ behavior: 'smooth' });
}

function hideDetails() {
  document.getElementById('tyre-details').classList.add('hidden');
}

// Quiz logic
function checkQuiz() {
  const answers = {
    q1: 'Car Tyres',
    q2: 'Lorry Tyres'
  };
  let score = 0;
  Object.keys(answers).forEach(q => {
    const sel = document.querySelector(`input[name="${q}"]:checked`);
    if (sel && sel.value === answers[q]) score++;
  });
  const result = document.getElementById('quiz-result');
  result.innerText = `You scored ${score} out of 2. ` +
    (score === 2 ? 'Great job!' : 'Try again to learn more.');
  result.classList.remove('hidden');
}
