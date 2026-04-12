function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomKey(obj) {
  const keys = Object.keys(obj);
  return pickRandom(keys);
}

function getThemeData(theme) {
  if (theme === "random") {
    return POEM_DATA[randomKey(POEM_DATA)];
  }
  return POEM_DATA[theme];
}

function pickUniqueLine(pool, usedSet, maxAttempts = 10) {
  for (let i = 0; i < maxAttempts; i++) {
    const choice = pickRandom(pool);
    if (!usedSet.has(choice)) {
      usedSet.add(choice);
      return choice;
    }
  }

  const fallback = pickRandom(pool);
  usedSet.add(fallback);
  return fallback;
}

function generateTitle(themeData) {
  return pickRandom(themeData.titles);
}

function generateFourLinePoem(themeData) {
  const used = new Set();

  return [
    pickUniqueLine(themeData.openings, used),
    pickUniqueLine(themeData.images, used),
    pickUniqueLine(themeData.reflections, used),
    pickUniqueLine(themeData.closings, used)
  ];
}

function generateSixLinePoem(themeData) {
  const used = new Set();

  return [
    pickUniqueLine(themeData.openings, used),
    pickUniqueLine(themeData.images, used),
    pickUniqueLine(themeData.transitions, used),
    pickUniqueLine(themeData.reflections, used),
    pickUniqueLine(themeData.transitions, used),
    pickUniqueLine(themeData.closings, used)
  ];
}

function generatePoem(theme, length) {
  const themeData = getThemeData(theme);
  const title = generateTitle(themeData);

  let lines;
  if (length === 6) {
    lines = generateSixLinePoem(themeData);
  } else {
    lines = generateFourLinePoem(themeData);
  }

  return {
    title,
    text: lines.join("\n")
  };
}

async function copyPoem() {
  const title = document.getElementById("poemTitle").textContent.trim();
  const poem = document.getElementById("poemOutput").textContent.trim();
  const statusMessage = document.getElementById("statusMessage");

  if (!poem || poem === "Your poem will appear here.") {
    statusMessage.textContent = "Generate a poem first.";
    return;
  }

  const fullText = title ? `${title}\n\n${poem}` : poem;

  try {
    await navigator.clipboard.writeText(fullText);
    statusMessage.textContent = "Poem copied.";
  } catch (error) {
    statusMessage.textContent = "Could not copy poem.";
  }
}

function renderPoem() {
  const theme = document.getElementById("themeSelect").value;
  const length = Number(document.getElementById("lengthSelect").value);
  const includeTitle = document.getElementById("titleToggle").value === "yes";

  const poem = generatePoem(theme, length);

  document.getElementById("poemTitle").textContent = includeTitle ? poem.title : "";
  document.getElementById("poemOutput").textContent = poem.text;
  document.getElementById("statusMessage").textContent = "";
}

document.getElementById("generateBtn").addEventListener("click", renderPoem);
document.getElementById("copyBtn").addEventListener("click", copyPoem);

renderPoem();