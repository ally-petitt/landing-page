/* card transition */
$(".card").click((e) => {
  const card = e.target.closest(".card").classList[1];

  let cardInfo = {
    cardBubble: $("." + card + " .card-bubble"),
    largeCircle: "circle(300px at 90% -10%)",
    smallCircle: "circle(150px at 90% 10%)",
  };

  if (cardInfo.cardBubble.css("clip-path") == cardInfo.smallCircle) {
    setCard(cardInfo);
  } else {
    resetAllCards(cardInfo);
  }
});

function setCard({ cardBubble, largeCircle }) {
  cardBubble.css("clip-path", largeCircle);
}

function resetAllCards({ cardBubble, smallCircle }) {
  cardBubble.css("clip-path", smallCircle);
}
