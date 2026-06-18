function getResultBox() {
  return document.getElementById("result");
}

function showResult(text) {
  getResultBox().innerText = text;
}

function generate() {
  let topic = document.getElementById("topic").value.trim();

  if (topic === "") {
    showResult("⚠️ Please enter a video idea!");
    return;
  }

  let mode = document.getElementById("mode").value;
  let language = document.getElementById("language").value;
  let type = document.getElementById("type").value;
  let duration = document.getElementById("duration").value;
  let platform = document.getElementById("platform").value;
  let generator = document.getElementById("generator").value;

  saveLastInputs(topic, mode, language, type, duration, platform, generator);
  increaseGenerateCount();
  saveHistory(topic);

  let output = makeOutput(topic, mode, language, type, duration, platform, generator);
  showResult(output);
}

function makeOutput(topic, mode, language, type, duration, platform, generator) {
  if (generator === "title") {
    return `TITLE IDEAS:

1. ${topic} 😱
2. The Secret Behind ${topic}
3. ${topic} Gone Wrong!
4. Viral ${topic} Challenge
5. ${topic} Explained`;
  }

  if (generator === "hashtags") {
    return `HASHTAGS:

#viral #shorts #youtube #trending #${type} #${topic.replaceAll(" ","")}`;
  }

  if (generator === "image") {
    return `IMAGE PROMPTS:

SCENE 1:
${topic}, ${type} style, cinematic opening, high quality, vertical 9:16

SCENE 2:
Main character of ${topic}, expressive face, colorful background, detailed lighting

SCENE 3:
Funny or dramatic moment in ${topic}, viral short video style, clean composition

SCENE 4:
Final ending scene of ${topic}, emotional or funny, 4K quality`;
  }

  if (generator === "allinone") {
    return `🚀 ALL-IN-ONE AI PACKAGE

TITLE:
${topic} | Viral AI Video

DESCRIPTION:
Watch this amazing ${type} video about ${topic}.

HOOK:
What if ${topic} changed everything?

VOICEOVER:
Hello friends! Today we are exploring "${topic}". Stay till the end because something amazing is about to happen.

STORY:
Once upon a time, there was ${topic}. One day, something unexpected happened. The hero faced a big challenge and learned an important lesson.

SCENES:
Scene 1: Cinematic opening
Scene 2: Character introduction
Scene 3: Unexpected event
Scene 4: Big turning point
Scene 5: Powerful ending

THUMBNAIL PROMPT:
Create a viral thumbnail for "${topic}" with bright colors, high CTR, emotional expression and cinematic lighting.

HASHTAGS:
#viral #shorts #youtube #trending #${type} #${topic.replaceAll(" ","")}`;
  }

  return `MODE: ${mode}
LANGUAGE: ${language}
VIDEO TYPE: ${type}
DURATION: ${duration}
PLATFORM: ${platform}

TOPIC:
${topic}

HOOK:
What if ${topic} changed everything?

SCRIPT:
Create an engaging ${duration} ${type} video about ${topic}.

SCENE 1:
Cinematic opening shot.

SCENE 2:
Main character introduction.

SCENE 3:
Interesting event happens.

SCENE 4:
Emotional or funny moment.

SCENE 5:
Strong ending.

TITLE:
${topic} | Viral AI Video

DESCRIPTION:
Watch this amazing video about ${topic}.

HASHTAGS:
#viral #shorts #youtube #${type}`;
}

function increaseGenerateCount() {
  let gen = Number(localStorage.getItem("genCount")) || 0;
  gen++;
  localStorage.setItem("genCount", gen);
  document.getElementById("genCount").innerText = gen;
}

function saveLastInputs(topic, mode, language, type, duration, platform, generator) {
  localStorage.setItem("lastTopic", topic);
  localStorage.setItem("lastMode", mode);
  localStorage.setItem("lastLanguage", language);
  localStorage.setItem("lastType", type);
  localStorage.setItem("lastDuration", duration);
  localStorage.setItem("lastPlatform", platform);
  localStorage.setItem("lastGenerator", generator);
}

function copyResult() {
  let text = getResultBox().innerText;

  if (text.trim() === "") {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(text);
  alert("Copied Successfully!");
}

function downloadResult() {
  let text = getResultBox().innerText;

  if (text.trim() === "") {
    alert("Nothing to download!");
    return;
  }

  let blob = new Blob([text], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "AdiVideoAI.txt";
  a.click();
}

function downloadPDF() {
  let text = getResultBox().innerText;

  if (text.trim() === "") {
    alert("Nothing to download!");
    return;
  }

  let win = window.open("", "", "height=700,width=700");
  win.document.write("<html><head><title>Adi AI Video Tool</title></head><body>");
  win.document.write("<pre>" + text + "</pre>");
  win.document.write("</body></html>");
  win.document.close();
  win.print();
}

function saveHistory(topic) {
  let history = JSON.parse(localStorage.getItem("history")) || [];

  history.unshift(topic);
  history = [...new Set(history)];

  if (history.length > 10) {
    history = history.slice(0, 10);
  }

  localStorage.setItem("history", JSON.stringify(history));
  loadHistory();
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  document.getElementById("hisCount").innerText = history.length;

  document.getElementById("history").innerHTML =
    history.length === 0
      ? "No history yet."
      : history.map(item => "• " + item).join("<br>");
}

function saveFavorite() {
  let result = getResultBox().innerText.trim();

  if (result === "") {
    alert("Generate content first!");
    return;
  }

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.unshift(result);
  favorites = [...new Set(favorites)];

  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadFavorites();

  alert("Saved to Favorites!");
}

function loadFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  document.getElementById("favCount").innerText = favorites.length;

  document.getElementById("favorites").innerHTML =
    favorites.length === 0
      ? "No favorites yet."
      : favorites.map((item, index) => `⭐ Favorite ${index + 1}<br><small>${item.slice(0, 120)}...</small>`).join("<hr>");
}

function searchHistory() {
  let searchText = document.getElementById("historySearch").value.toLowerCase();
  let history = JSON.parse(localStorage.getItem("history")) || [];

  let filtered = history.filter(item =>
    item.toLowerCase().includes(searchText)
  );

  document.getElementById("history").innerHTML =
    filtered.length === 0
      ? "No result found."
      : filtered.map(item => "• " + item).join("<br>");
}

function clearHistory() {
  localStorage.removeItem("history");
  loadHistory();
}

function clearFavorites() {
  localStorage.removeItem("favorites");
  loadFavorites();
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
}

function setTemplate(template) {
  if (template === "movie") {
    document.getElementById("topic").value = "The Last Warrior Movie Trailer";
    document.getElementById("type").value = "motivation";
  }

  if (template === "horror") {
    document.getElementById("topic").value = "The Haunted Mansion";
    document.getElementById("type").value = "horror";
  }

  if (template === "cartoon") {
    document.getElementById("topic").value = "Lion Afraid Of Butterfly";
    document.getElementById("type").value = "cartoon";
  }

  if (template === "dragon") {
    document.getElementById("topic").value = "Dragon Warrior Kingdom";
    document.getElementById("type").value = "horror";
  }

  if (template === "space") {
    document.getElementById("topic").value = "Lost Astronaut In Space";
    document.getElementById("type").value = "facts";
  }

  if (template === "comedy") {
    document.getElementById("topic").value = "Funny Monkey Banana Adventure";
    document.getElementById("type").value = "cartoon";
  }

  document.getElementById("generator").value = "allinone";
  generate();
}

window.onload = function () {
  document.getElementById("topic").value = localStorage.getItem("lastTopic") || "";
  document.getElementById("mode").value = localStorage.getItem("lastMode") || "flow";
  document.getElementById("language").value = localStorage.getItem("lastLanguage") || "hinglish";
  document.getElementById("type").value = localStorage.getItem("lastType") || "cartoon";
  document.getElementById("duration").value = localStorage.getItem("lastDuration") || "30 seconds";
  document.getElementById("platform").value = localStorage.getItem("lastPlatform") || "youtube";
  document.getElementById("generator").value = localStorage.getItem("lastGenerator") || "script";

  document.getElementById("genCount").innerText = localStorage.getItem("genCount") || 0;

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  loadHistory();
  loadFavorites();
};