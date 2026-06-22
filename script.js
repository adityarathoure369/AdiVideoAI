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

if (generator === "description") {
  return `📄 DESCRIPTION GENERATOR

Watch this ${duration} ${type} video about "${topic}".

This video is made for ${platform}. It includes an engaging story, powerful visuals, and a viral style.

Don't forget to like, share and follow for more videos.`;
}

if (generator === "thumbnail") {
  return `🎯 THUMBNAIL PROMPT

Create a viral YouTube thumbnail for "${topic}".

STYLE:
${type} style, bright colors, high CTR, cinematic lighting, emotional face, big bold text, clean background, 4K quality.

TEXT ON THUMBNAIL:
${topic}`;
}

if (generator === "ideas") {
  return `💡 VIDEO IDEAS

1. ${topic} But Something Goes Wrong
2. 5 Amazing Facts About ${topic}
3. ${topic} in 30 Seconds
4. Funny Story of ${topic}
5. ${topic} Viral Short Video`;
}

if (generator === "hooks") {
  return `🔥 VIRAL HOOKS

1. You won't believe what happened with ${topic}!
2. This ${topic} story will surprise you.
3. Wait till the end!
4. What if ${topic} became real?
5. This changed everything.`;
}

if (generator === "voiceover") {
  return `🎙️ VOICEOVER

Hello friends! Today we are going to see an amazing story about "${topic}".

At first, everything looks normal. But suddenly, something unexpected happens.

Watch till the end because the ending is very surprising.`;
}

if (generator === "cta") {
  return `📢 CTA GENERATOR

If you enjoyed this video, like, share and subscribe.

Comment your favorite part below.

Follow for more ${type} videos.`;
}

if (generator === "story") {
  return `📖 STORY GENERATOR

Once upon a time, there was ${topic}.

One day, something unexpected happened. The main character faced a big challenge.

In the end, the character learned an important lesson and became stronger.`;
}

if (generator === "character") {
  return `🧑 CHARACTER GENERATOR

Character Name: Adi

Role:
Main hero of "${topic}"

Look:
Cute, expressive face, colorful outfit, friendly personality.

Style:
${type} style, cinematic lighting, 3D cartoon quality.`;
}

if (generator === "scene") {
  return `🎬 SCENE GENERATOR

SCENE 1:
Opening shot of ${topic}.

SCENE 2:
Main character enters.

SCENE 3:
Something unexpected happens.

SCENE 4:
Funny or emotional moment.

SCENE 5:
Powerful ending with viral feel.`;

}

if (generator === "storyboard") {
return `🎬 STORYBOARD GENERATOR

🎥 SCENE 1 – Opening
IMAGE PROMPT:
Cinematic opening shot of ${topic}, dramatic lighting, ultra detailed, 4K.

🎥 SCENE 2 – Character Introduction
IMAGE PROMPT:
Main character of ${topic}, expressive face, detailed environment.

🎥 SCENE 3 – Conflict
IMAGE PROMPT:
A major challenge appears in ${topic}, action scene, dynamic camera angle.

🎥 SCENE 4 – Climax
IMAGE PROMPT:
Most exciting moment of ${topic}, emotional intensity, cinematic lighting.

🎥 SCENE 5 – Ending
IMAGE PROMPT:
Powerful ending of ${topic}, beautiful background, inspirational mood.

📱 VIDEO STYLE:
Vertical 9:16, YouTube Shorts, Pixar quality, smooth animation.`;
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

if (result.includes("Generate Content par click")) {
  alert("Pehle content generate karo!");
  return;
}

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

  favorites = favorites.filter(item =>
    item &&
    item.trim() !== "" &&
    !item.includes("Generate Content par click") &&
    item.trim() !== "⭐" &&
    item.trim() !== "🚀"
  );

  localStorage.setItem("favorites", JSON.stringify(favorites));
  document.getElementById("favCount").innerText = favorites.length;

  document.getElementById("favorites").innerHTML =
    favorites.length === 0
      ? "No favorites yet."
      : favorites.map((item, index) =>
          `⭐ Favorite ${index + 1}<br><small>${item.slice(0, 120)}...</small>`
        ).join("<hr>");
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

function saveProject() {
  let result = getResultBox().innerText.trim();

  if (result === "" || result.includes("Generate Content par click")) {
    alert("Pehle content generate karo!");
    return;
  }

  let projectName = prompt("Project ka naam likho:");

  if (!projectName || projectName.trim() === "") {
    alert("Project name required!");
    return;
  }

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.unshift({
    name: projectName.trim(),
    content: result,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("projects", JSON.stringify(projects));
  loadProjects();

  alert("Project saved!");
}

function loadProjects(list = null) {
  let projects = list || JSON.parse(localStorage.getItem("projects")) || [];

  document.getElementById("projectCount").innerText =
    projects.length === 0 ? "" : `🔎 ${projects.length} project found`;

  document.getElementById("projects").innerHTML =
    projects.length === 0
      ? "No projects saved yet."
      : projects.map((item, index) =>
          `<div class="project-card">
            <div class="project-title">💾 ${item.name}</div>
            <div class="project-date">🕒 ${item.date}</div>
            <div class="project-preview">${item.content.slice(0, 180)}...</div>
            <button onclick="openProject(${index})">📂 Open</button>
<button onclick="deleteProject(${index})">🗑 Delete</button>
<button onclick="exportProject(${index})">📥 Export</button>
          </div>`
        ).join("");
}

function searchProjects() {
  let searchText = document.getElementById("projectSearch").value.toLowerCase();
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  let filtered = projects.filter(item =>
    item.name.toLowerCase().includes(searchText) ||
    item.content.toLowerCase().includes(searchText)
  );

  loadProjects(filtered);
}


function openProject(index) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  document.getElementById("result").innerText = projects[index].content;
}

function deleteProject(index) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  loadProjects();
}

function saveAIChat() {
  let content = document.getElementById("chatResult").innerText;

  if (
  !content ||
  content.includes("Ask me") ||
  content.includes("Please ask something")
) {
    alert("Generate AI output first.");
    return;
  }

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.unshift({
    name: "AI Chat " + new Date().toLocaleTimeString(),
    date: new Date().toLocaleString(),
    content: content
  });

  localStorage.setItem("projects", JSON.stringify(projects));

  loadProjects();

  alert("AI Chat saved to Projects!");
}

function exportProject(index) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let project = projects[index];

  if (!project) {
    alert("Project not found!");
    return;
  }

  let fileText = `PROJECT NAME: ${project.name}
DATE: ${project.date}

CONTENT:
${project.content}`;

  let blob = new Blob([fileText], { type: "text/plain" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = project.name.replaceAll(" ", "_") + ".txt";
  a.click();
}

function clearProjects() {
  localStorage.removeItem("projects");
  loadProjects();
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

function askAdiAI() {
  let input = document.getElementById("chatInput").value.trim();

  if (input === "") {
    document.getElementById("chatResult").innerText = "⚠️ Please ask something!";
    return;
  }

  let question = input.toLowerCase();
  let topic = input
    .replace(/title for/gi, "")
    .replace(/script for/gi, "")
    .replace(/prompt for/gi, "")
    .replace(/ideas for/gi, "")
    .replace(/hook for/gi, "")
.replace(/voiceover for/gi, "")
.replace(/scene for/gi, "")
.replace(/storyboard for/gi, "")
.replace(/storyboard/gi, "")

    .trim();

  let answer = "";

  if (question.includes("title")) {
    answer = `🎯 Title Ideas for "${topic}":

1. The Secret Behind ${topic}
2. ${topic} Changed Everything
3. You Won't Believe This ${topic}
4. The Untold Story of ${topic}
5. ${topic} | Viral AI Video`;
  } else if (question.includes("script")) {
    answer = `🎬 Script for "${topic}":

HOOK:
What if ${topic} changed everything?

STORY:
Today, we are going to explore an amazing story about ${topic}. At first, everything looks normal. But suddenly, something unexpected happens.

ENDING:
In the end, ${topic} teaches us a powerful lesson.

CTA:
Like, share and follow for more videos.`;
  } else if (question.includes("prompt")) {
    answer = `🖼️ AI Prompt for "${topic}":

${topic}, cinematic lighting, ultra detailed, high quality, vertical 9:16, smooth camera movement, dramatic background, realistic shadows, viral YouTube Shorts style, 4K quality.`;
  } else if (question.includes("idea")) {
    answer = `💡 Video Ideas for "${topic}":

1. ${topic} But Something Goes Wrong
2. ${topic} in 30 Seconds
3. 5 Amazing Facts About ${topic}
4. Funny Story of ${topic}
5. Emotional Ending of ${topic}`;
  } 

else if (question.includes("voiceover")) {
  answer = `🎙️ VOICEOVER GENERATOR PRO for "${topic}":

INTRO:
Hello everyone! Today we are going to watch an amazing story about ${topic}.

HOOK:
But wait, this is not a normal story. Something unexpected is about to happen.

MAIN VOICEOVER:
At first, everything looks peaceful. The main character enters the scene with confidence. Suddenly, a big challenge appears, and the story becomes more exciting.

CLIMAX:
This is the moment where everything changes. The character must make a powerful decision.

ENDING:
In the end, ${topic} teaches us an important lesson. Never give up, even when things become difficult.

CTA:
If you enjoyed this video, like, share, and follow for more amazing stories.`;

}

else if (question.includes("storyboard")) {
answer = `🎬 STORYBOARD GENERATOR PRO for "${topic}":

🎥 SCENE 1 – Opening
IMAGE PROMPT:
Cinematic opening shot of ${topic}, dramatic lighting, ultra detailed, 4K, professional movie style.

🎥 SCENE 2 – Character Introduction
IMAGE PROMPT:
Main character of ${topic} introduced, expressive face, detailed environment, cinematic composition.

🎥 SCENE 3 – Conflict
IMAGE PROMPT:
A major challenge appears in ${topic}, action scene, dynamic camera angle, dramatic atmosphere.

🎥 SCENE 4 – Climax
IMAGE PROMPT:
Most exciting moment of ${topic}, emotional intensity, cinematic lighting, epic visual style.

🎥 SCENE 5 – Ending
IMAGE PROMPT:
Powerful ending of ${topic}, emotional scene, beautiful background, inspirational mood, 4K quality.

📱 VIDEO STYLE:
Vertical 9:16, YouTube Shorts, smooth animation, Pixar quality, vibrant colors.`;
}

else if (question.includes("scene")) {
  answer = `🎬 SCENE GENERATOR PRO for "${topic}":

SCENE 1 — Opening Shot:
Show ${topic} in a cinematic environment. Add dramatic lighting, smooth camera movement, and a strong visual opening.

SCENE 2 — Character Entry:
Introduce the main character related to ${topic}. Show expression, action, and background details.

SCENE 3 — Main Problem:
Something unexpected happens. Add tension, emotion, or comedy depending on the video style.

SCENE 4 — Big Moment:
Show the most powerful or funny moment of the story. Add close-up shot, cinematic camera movement, and high energy.

SCENE 5 — Ending Shot:
End with a strong final visual. Add emotional music, smooth zoom-out, and a viral YouTube Shorts feeling.

VIDEO STYLE:
Vertical 9:16, 4K quality, cinematic lighting, smooth animation, detailed background.`;

}

else if (question.includes("hook")) {
    answer = `🔥 Hooks for "${topic}":

1. Wait till you see what happens with ${topic}.
2. This ${topic} story will surprise you.
3. You won't believe the ending.
4. What if ${topic} became real?
5. This changed everything.`;

  }

 else {
    answer = `🚀 SMART AI PACKAGE FOR "${input}"

🎯 TITLES:
1. The Secret Behind ${input}
2. ${input} Changed Everything
3. The Untold Story of ${input}

💡 IDEAS:
1. Funny ${input} Story
2. Emotional ${input} Journey
3. Viral ${input} Short

🎬 SCRIPT:
Start with a powerful hook about ${input}.
Introduce the main character.
Add a challenge or surprise.
End with a strong lesson.

🖼️ PROMPT:
${input}, cinematic lighting, ultra detailed, 4K quality, viral YouTube Shorts style.`;

}

  document.getElementById("chatResult").innerText = answer;
}

window.onload = function () {
  document.getElementById("topic").value = localStorage.getItem("lastTopic") || "";
  document.getElementById("mode").value = localStorage.getItem("lastMode") || "flow";
document.getElementById("language").value = localStorage.getItem("lastLanguage") || "english";
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
loadProjects();
};