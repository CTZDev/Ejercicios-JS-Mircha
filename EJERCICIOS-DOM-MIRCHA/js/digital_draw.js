const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];
    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

//PARA YOUTUBE
// const getWinnerComment = (selector) => {
//   const $players = d.querySelectorAll(selector),
//     random = Math.floor(Math.random() * $players.length),
//     winner = $players[random];

//   return `El ganador es: ${winner.textContent.trim()}`;
// };

// getWinnerComment("ytd-comment-thread-renderer #author-text span");
