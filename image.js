function generateImagePrompt() {
  let topic = document.getElementById("imageTopic").value.trim();
  let style = document.getElementById("imageStyle").value;
  let ratio = document.getElementById("imageRatio").value;

  if (topic === "") {
    document.getElementById("imageResult").innerText = "Please enter image idea!";
    return;
  }

  let output = `AI IMAGE PROMPT:

${topic}, ${style}, ${ratio}, high quality, ultra detailed, cinematic lighting, sharp focus, professional composition, beautiful background, realistic shadows, vibrant colors, 4K quality.

NEGATIVE PROMPT:
blurry, low quality, bad anatomy, extra fingers, distorted face, watermark, text error, ugly, noise.

VIDEO USE:
Use this image as the first scene for an AI video. Add smooth camera zoom, cinematic movement and emotional background music.`;

  document.getElementById("imageResult").innerText = output;
}

function copyImagePrompt() {
  let text = document.getElementById("imageResult").innerText;

  if (text.trim() === "") {
    alert("Generate first!");
    return;
  }

  navigator.clipboard.writeText(text);
  alert("Copied!");
}