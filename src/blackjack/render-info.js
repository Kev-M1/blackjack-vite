export const renderData = (scoreTags, playerIndex, pointsAccumulators, cardsDivTags, card) => {
  scoreTags[playerIndex].textContent = `${pointsAccumulators[playerIndex]}`;
  cardsDivTags[playerIndex].innerHTML += `<img src="/assets/cards/${card}.png" class = "card">`;
};

export const resetRenderData = (scoreTags, cardsDivTags) => {
  scoreTags[0].textContent = ` `;
  cardsDivTags[0].innerHTML = ` `;
  scoreTags[1].textContent = ` `;
  cardsDivTags[1].innerHTML = ` `;
};

























