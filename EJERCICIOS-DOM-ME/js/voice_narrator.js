const d = document,
  w = window;

export default function voiceNarrator() {
  let synth = w.speechSynthesis;

  const $speechBtn = d.querySelector(".speech-btn"),
    $speechText = d.querySelector(`[name="narrator-text"]`),
    $voiceSelect = d.querySelector(`[name="narrator-select"]`);

  let voices = [];

  const populateVoiceList = () => {
    voices = synth.getVoices();

    voices.forEach((voice) => {
      let option = document.createElement("option");
      option.textContent = voice.name + " (" + voice.lang + ")";
      option.setAttribute("data-name", voice.name);
      $voiceSelect.appendChild(option);
    });
  };

  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = populateVoiceList; //Cargado al arreglo de todas las voces del SO.

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      let utterThis = new SpeechSynthesisUtterance($speechText.value);
      let selectedOption = $voiceSelect.selectedOptions[0].getAttribute("data-name"); //1forma usando la etioqueta del select
      // 2 forma = Esta es otra forma de usar el contenido de la etiqueta option. tmbn se puede aplicar el evento change
      console.log($voiceSelect.options[$voiceSelect.selectedIndex].getAttribute("data-name"));
      if (!selectedOption) return;
      voices.forEach((voice) => {
        if (voice.name === selectedOption) utterThis.voice = voice;
      });

      synth.speak(utterThis);
    }
  });
}
