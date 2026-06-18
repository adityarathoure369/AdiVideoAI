function generateThumbnail() {

    let topic = document.getElementById("thumbTopic").value.trim();
    let style = document.getElementById("thumbStyle").value;

    if (topic === "") {
        document.getElementById("thumbResult").innerText = "Please enter topic!";
        return;
    }

    let output = `VIRAL THUMBNAIL PROMPT:

Create a high CTR YouTube thumbnail for "${topic}".

Style: ${style}

Bright colors, emotional face expression, bold text, cinematic lighting, clean background, professional design, viral YouTube style, 4K quality.

Text on Thumbnail:
"${topic}"

Extra:
Add glowing effect, dramatic expression and eye-catching composition.`;

    document.getElementById("thumbResult").innerText = output;
}

function copyThumbnail() {

    let text = document.getElementById("thumbResult").innerText;

    if (text.trim() === "") {
        alert("Generate first!");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("Copied!");
}