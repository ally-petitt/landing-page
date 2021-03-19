/* card transition */
$(".card").click((e) => {
  const cardClass = e.target.closest(".card").classList[1];

  let cardInfo = {
    cardBubble: $("." + cardClass + " .card-bubble"),
    svgContainerClass: $("." + cardClass + " .svg-container")
      .attr("class")
      .split(" ")[1],
    contentBox: $("." + cardClass + " .content-box"),
    isSettings: cardClass == "card3",
    largeCircle: "circle(300px at 90% -10%)",
    smallCircle: "circle(150px at 90% 10%)",
  };

  if (cardInfo.cardBubble.css("clip-path") == cardInfo.smallCircle) {
    setCard(cardInfo);
  } else {
    resetAllCards(cardInfo);
  }
});

function setCard({ cardBubble, largeCircle, svgContainerClass, contentBox }) {
  cardBubble.css("clip-path", largeCircle);
  $("." + svgContainerClass + " > svg").attr({
    width: "100",
    height: "100",
  });
  contentBox.css("top", "60%");
}

function resetAllCards({
  cardBubble,
  smallCircle,
  svgContainerClass,
  contentBox,
}) {
  cardBubble.css("clip-path", smallCircle);
  $("." + svgContainerClass + " svg").attr({
    width: "150",
    height: "150",
  });
  contentBox.css({
    top: "85%",
  });
}

/* ripple effect on button */
$(".cta-btn").click((e) => {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.target.offsetTop;

  let ripples = document.createElement("span");
  $(ripples).css({
    left: x + "px",
    bottom: y + "px",
  });
  $(".cta-btn").append(ripples);

  // setTimeout(() => {
  //   ripples.remove();
  // }, 1000);
});
