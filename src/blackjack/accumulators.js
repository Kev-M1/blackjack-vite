//Initialize X amount of accumulators, based on the number of players.
export const initializeAccumulators = (numberOfPlayers = 2, pointsAccumulators) => {
  pointsAccumulators = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    pointsAccumulators.push(0);
  }
  return pointsAccumulators;
};