function generateVideoPrompt() {
  let topic = document.getElementById("videoTopic").value.trim();
  let tool = document.getElementById("videoTool").value;
  let style = document.getElementById("videoStyle").value;
  let duration = document.getElementById("videoDuration").value;

  if (topic === "") {
    document.getElementById("videoResult").innerText = "Please enter video idea!";
    return;
  }

  let output = `AI VIDEO PROMPT:

Tool: ${tool}
Topic: ${topic}
Style: ${style}
Duration: ${duration}

PROMPT:
Create a ${duration} ${style} AI video about "${topic}".

Scene:
Start with a powerful cinematic opening shot. Add smooth camera movement, dramatic lighting, realistic shadows, detailed background, emotional atmosphere and high quality composition.

Camera Movement:
Slow zoom in, smooth pan, cinematic motion, stable frame.

Lighting:
Professional lighting, high contrast, glowing highlights, realistic shadows.

Quality:
Ultra detailed, 4K, vertical 9:16, viral YouTube Shorts style.

NEGATIVE PROMPT:
blurry, low quality, distorted face, bad anatomy, extra fingers, watermark, text errors, shaky camera.`;

  document.getElementById("videoResult").innerText = output;	
}

function copyVideoPrompt() {
  let text = document.getElementById("videoResult").innerText;

  if (text.trim() === "") {
    alert("Generate first!");
    return;
  }

  navigator.clipboard.writeText(text);
  alert("Copied!");
}