import _ from "underscore";


export const createDeck = (groupsDecks, speacialCards) => {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (const group of groupsDecks) {
      deck.push(`${i}${group}`);
    }
  }

  for (const special of speacialCards) {
    for (const group of groupsDecks) {
      deck.push(`${special}${group}`);
    }
  }

  deck = _.shuffle(deck);
  return deck
};


export const pickCard = (deck) => {
  return deck.pop();
};

export const asssignPoints = (card, speacialCards) => {
  let pointsCharacter = card.slice(0, (card.length - 1));
  let points;

  if (speacialCards.includes(pointsCharacter)) {
    (pointsCharacter === 'A') ? points = 11 : points = 10;
  } else {
    pointsCharacter = (pointsCharacter * 1);
    points = pointsCharacter;
  }

  return points
};