/* card transition */
$(".card").click((e) => {
  const cardClass = e.target.closest(".card").classList[1];

  let cardInfo = {
    cardBubble: $("." + cardClass + " .card-bubble"),
    svgContainerClass: $("." + cardClass + " .svg-container")
      .attr("class")
      .split(" ")[1],
    largeCircle: "circle(300px at 90% -10%)",
    smallCircle: "circle(150px at 90% 10%)",
  };

  if (cardInfo.cardBubble.css("clip-path") == cardInfo.smallCircle) {
    setCard(cardInfo);
  } else {
    resetAllCards(cardInfo);
  }
});

function setCard({ cardBubble, largeCircle, svgContainerClass }) {
  cardBubble.css("clip-path", largeCircle);
  $("." + svgContainerClass + " > svg").attr({
    width: "100",
    height: "100",
  });
}

function resetAllCards({ cardBubble, smallCircle, svgContainerClass }) {
  cardBubble.css("clip-path", smallCircle);
  $("." + svgContainerClass + " svg").attr({
    width: "150",
    height: "150",
  });
}
