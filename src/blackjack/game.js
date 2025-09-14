import { createDeck, pickCard, asssignPoints, initializeAccumulators, renderData, disableButtons, enableButtons, resetRenderData, pcTurn } from "./index";

let deck = [],
  groupsDecks = ['C', 'S', 'H', 'D'],
  speacialCards = ['A', 'K', 'Q', 'J'],
  pointsAccumulators = [];


//HTML ELEMENTS
const btnNewGame = document.querySelector('#btnNewGame');
const btnTakeCard = document.querySelector('#btnTakeCard');
const btnStop = document.querySelector('#btnStop');
const scoreTags = document.querySelectorAll('.score');
const cardsDivTags = document.querySelectorAll('.cards-div');

//user index scoreTags array and cardsDivTags array = 0
//pc index scoreTags array and cardsDivTags array = 1



export const startGame = () => {
  deck = createDeck(groupsDecks, speacialCards);
  pointsAccumulators = initializeAccumulators(undefined, pointsAccumulators);
  // console.log(deck);
  // console.log(pointsAccumulators);
};



//EVENTS
//NEW GAME BUTTON
btnNewGame.addEventListener('click', (event) => {
  startGame();
  enableButtons(btnStop, btnTakeCard);
  resetRenderData(scoreTags, cardsDivTags);
});

//TAKE CARD (PLAYER TURN)
btnTakeCard.addEventListener('click', (event) => {

  let card = pickCard(deck);
  let cardPoints = asssignPoints(card, speacialCards);
  pointsAccumulators[0] = (pointsAccumulators[0] + cardPoints);

  // console.log(deck);
  // console.log(`Carta tomada: ${card}`);
  // console.log(`Puntos de la carta: ${cardPoints}`);
  // console.log(pointsAccumulators);

  renderData(scoreTags, 0, pointsAccumulators, cardsDivTags, card);
  if (pointsAccumulators[0] > 21) {
    disableButtons(btnStop, btnTakeCard);
    pcTurn(pointsAccumulators, deck, speacialCards, scoreTags, cardsDivTags);
  }
});

//STOP BUTTON
btnStop.addEventListener('click', (event) => {
  disableButtons(btnStop, btnTakeCard);
  pcTurn(pointsAccumulators, deck, speacialCards, scoreTags, cardsDivTags);
});