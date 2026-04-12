function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function pickRandom(arr) {
  if (!arr || arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}


function generatePerfectLine(theme, userWord, targetSyllables = 7, usedTemplates = []) {
  const v = POEM_DATA.themes[theme] || POEM_DATA.themes.wasatch_winter;
  let attempts = 0;
  
  let displayWord = userWord;
  if (userWord) {
    displayWord = userWord.replace(/ student/gi, '').replace(/ sky/gi, '');
  }
  const highlightedWord = userWord ? `<span class="highlight">${displayWord}</span>` : null;

  const allTemplates = [
    `the {adj} {noun} {activeVerb}`,         
    `watching the {noun} {verbBase}`,           
    `beyond the {adj} {noun}`,                  
    `where the {noun} {activeVerb} alone`,    
    `{adj} shadows touch the {noun}`,           
    `the mind turns to the {noun}`,              
    `even the {noun} must {verbBase}`,          
    `a single {noun} in the mist`,
    `listening as the {noun} {activeVerb}`,
    `only the {adj} {noun} remains`,
    `waiting as the {noun} {activeVerb}`,
    `the {noun} forgets how to {verbBase}`,
    `a {adj} {noun} at twilight`,
    `beneath the {adj} {noun}`,
    `all fades into the {adj} {noun}`,
    `quietly the {noun} {activeVerb}`,
    `the {adj} {noun} stands still`,
    `leaving the {noun} to {verbBase}`
  ];

  const availableTemplates = allTemplates.filter(t => !usedTemplates.includes(t));

  while (attempts < 200) {
    const adj = pickRandom(v.adj);
    const noun = highlightedWord || pickRandom(v.noun);
    const baseVerb = pickRandom(v.verb); 
    
    const verbSingular = baseVerb.endsWith('s') ? baseVerb : baseVerb + 's';
    const verbBase = baseVerb.endsWith('s') ? baseVerb.slice(0, -1) : baseVerb;
    
    const pureNoun = noun.replace(/<[^>]*>/g, '').toLowerCase(); 
    const isPlural = pureNoun.endsWith('s') && pureNoun !== 'timpanogos' && pureNoun !== 'campus';
    const activeVerb = isPlural ? verbBase : verbSingular;

    const chosenTemplate = pickRandom(availableTemplates);

    const candidate = chosenTemplate
      .replace('{adj}', adj)
      .replace('{noun}', noun)
      .replace('{activeVerb}', activeVerb)
      .replace('{verbBase}', verbBase);

    const textOnly = candidate.replace(/<[^>]*>/g, '');
    const totalSyllables = textOnly.split(' ').reduce((acc, w) => acc + countSyllables(w), 0);

    if (totalSyllables === targetSyllables) {
      return { text: candidate, template: chosenTemplate };
    }
    attempts++;
  }
  
  return { text: `the ${highlightedWord || 'world'} grows quiet`, template: `the {noun} grows quiet` };
}
function renderPoem(userWords = [], poetName = "Scholar") {
  const selectedTheme = document.getElementById("themeSelect") ? document.getElementById("themeSelect").value : "random";
  const activeTheme = selectedTheme === "random" 
    ? pickRandom(Object.keys(POEM_DATA.themes)) 
    : selectedTheme;

  let poemLines = [];
  let shuffledWords = [...userWords].sort(() => 0.5 - Math.random());
  let pacingSequence = [...shuffledWords];
  const randomInsertIndex = Math.floor(Math.random() * (pacingSequence.length + 1));
  pacingSequence.splice(randomInsertIndex, 0, null);

  let usedTemplates = []; 

  for (let i = 0; i < pacingSequence.length; i++) {
    const seed = pacingSequence[i]; 
    
    const result = generatePerfectLine(activeTheme, seed, 7, usedTemplates);
    
    usedTemplates.push(result.template); 
    
    let rawLine = result.text;
    let formatted = rawLine.charAt(0).toUpperCase() + rawLine.slice(1);
    
    poemLines.push(i < 3 ? formatted + "," : formatted + ".");
  }

  poemLines.push(pickRandom(POEM_DATA.closings));

  document.getElementById("poemText").innerHTML = poemLines.join("\n");
  
  const seedWord = userWords[0] ? userWords[0].replace(/ student/gi, '').replace(/ sky/gi, '') : "Silence";
  document.getElementById("poemFooter").textContent = `— Reflections on ${seedWord} by ${poetName}`;
}
function generatePoem() {
  const rawWords = ['w1','w2','w3']
    .map(id => document.getElementById(id).value.trim())
    .filter(w => w.length > 0);

  if (rawWords.length === 0) {
    const err = document.getElementById('errorMsg');
    err.textContent = "The poet needs at least one word to begin.";
    err.classList.add('visible');
    return;
  }

  const sanitizedWords = rawWords.map(w => {
    const upperWord = w.toUpperCase();
    if (upperWord === 'BYU' || upperWord === 'UVU') return `${upperWord} student`;
    if (upperWord === 'PROVO') return `Provo sky`;
    return w.toLowerCase();
  });
    
  const poetName = document.getElementById('name').value.trim() || "The Scholar";

  document.getElementById('errorMsg').classList.remove('visible');
  document.getElementById('poemArea').classList.remove('visible');
  document.getElementById('spinner').classList.add('visible');
  document.getElementById('genBtn').disabled = true;

  const loadingText = document.querySelector('#spinner div:nth-child(2)');
  const messages = [
    "Grinding the black ink...",
    "Consulting the 18th-century masters...",
    "Counting syllables on an abacus...",
    "Listening to the Wasatch wind...",
    "Translating from classical Chinese..."
  ];
  
  let msgIndex = 0;
  if(loadingText) loadingText.textContent = messages[0];
  
  const textCycler = setInterval(() => {
    msgIndex++;
    if (loadingText && msgIndex < messages.length) {
      loadingText.textContent = messages[msgIndex];
    }
  }, 700);

  setTimeout(() => {
    clearInterval(textCycler);
    
    renderPoem(sanitizedWords, poetName);
    
    if(loadingText) loadingText.textContent = "Consulting the old poet…"; 
    document.getElementById('spinner').classList.remove('visible');
    document.getElementById('poemArea').classList.add('visible');
    document.getElementById('genBtn').disabled = false;
  }, 3500); 
}