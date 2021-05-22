const d = document,
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
    {
      title: "Any",
      img: "https://placeimg.com/200/200/any",
    },
  ];

export default function searchFilter(idsearch, card) {
  drawCard(".cards", "template-card");
  const $idSearch = d.getElementById(idsearch);
  const $card = d.querySelectorAll(card);

  d.addEventListener("keyup", (e) => {
    if (e.target === $idSearch) {
      $card.forEach((card) => {
        let context = card.querySelector("p").textContent.toLowerCase(),
          text = $idSearch.value.toLowerCase();
        context.includes(text) ? card.classList.remove("hidden") : card.classList.add("hidden");
      });
    }
  });
}

const drawCard = (cards, templateCard) => {
  const $cards = d.querySelector(cards),
    $templateCard = d.getElementById(templateCard).content,
    $fragment = d.createDocumentFragment();
  cardContent.forEach((card, i) => {
    $templateCard.querySelector("img").setAttribute("src", card.img);
    $templateCard.querySelector("img").setAttribute("alt", card.title);
    $templateCard.querySelector("p").textContent = card.title;
    $templateCard.querySelector(".card").dataset.id = i;

    let $clone = $templateCard.cloneNode(true);
    $fragment.appendChild($clone);
  });

  $cards.appendChild($fragment);
};
