import { renderData } from "./render-info";
import { pickCard, asssignPoints } from "./cards-actions";

export const pcTurn = (pointsAccumulators, deck, speacialCards, scoreTags, cardsDivTags) => {
  while (pointsAccumulators[1] < 17) {
    let card = pickCard(deck);
    let cardPoints = asssignPoints(card, speacialCards);
    pointsAccumulators[1] = (pointsAccumulators[1] + cardPoints);

    renderData(scoreTags, 1, pointsAccumulators, cardsDivTags, card);
  }
};
