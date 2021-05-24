const d = document,
  w = window;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTxtArea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    $speechMessage = new SpeechSynthesisUtterance();
  // console.log($speechMessage);
  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", () => {
      voices = w.speechSynthesis.getVoices();
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} -- ${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      $speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
    }
    // console.log($speechMessage);
  });

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      $speechMessage.text = $speechTxtArea.value;
      w.speechSynthesis.speak($speechMessage);
    }
  });
}
