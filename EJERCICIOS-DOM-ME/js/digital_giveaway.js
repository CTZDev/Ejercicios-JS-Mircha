const d = document;

export default function digitalWinner(btn) {
  const languages = ["PHP", "Rust", "JavaScript", "Java", "Go", "Kotlin", "Visual Basic", "Python", "C", "C#", "Perl", "Swift"];
  const $ul = document.createElement("ul"),
    $fragment = document.createDocumentFragment(),
    $btn = d.getElementById(btn);

  languages.forEach((language) => {
    const $li = document.createElement("li");
    $li.textContent = language;
    $fragment.appendChild($li);
  });
  $ul.appendChild($fragment);
  $btn.insertAdjacentElement("beforebegin", $ul);

  d.addEventListener("click", (e) => {
    if (e.target === $btn) {
      let result = winnerRandom(languages);
      alert(result);
      console.log(result);
    }
  });
}

const winnerRandom = (arr) => {
  let valueWinner = Math.round(Math.random() * (arr.length - 1));
  return `El ganador del sorteo es el lenguaje: ${arr[valueWinner]}`;
};
