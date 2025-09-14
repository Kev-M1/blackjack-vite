export const determineWinner = (pointsAccumulators) => {
  if (pointsAccumulators[1] > 21 && pointsAccumulators[0] > 21) {
    alert(`
      AMBOS PIERDEN!!
      Puntos jugador: ${pointsAccumulators[0]}
      Puntos PC: ${pointsAccumulators[1]}
      `);
  } else if (pointsAccumulators[1] > 21) {
    alert(`
      Ganaste, PC se paso de 21!!
      Puntos jugador: ${pointsAccumulators[0]}
      Puntos PC: ${pointsAccumulators[1]}
      `);
  } else if (pointsAccumulators[0] > 21) {
    alert(`
      Perdiste, te pasaste de 21!!
      Puntos jugador: ${pointsAccumulators[0]}
      Puntos PC: ${pointsAccumulators[1]}
      `);
  } else if (pointsAccumulators[0] > pointsAccumulators[1]) {
    alert(`
      Ganaste!!
      Puntos jugador: ${pointsAccumulators[0]}
      Puntos PC: ${pointsAccumulators[1]}
      `);
  } else if (pointsAccumulators[0] < pointsAccumulators[1]) {
    alert(`
      Perdiste, la PC tiene un puntaje MAYOR!!
      Puntos jugador: ${pointsAccumulators[0]}
      Puntos PC: ${pointsAccumulators[1]}
      `);
  } else {
    alert(`
      EMPATEE!!
      Puntos jugador: ${pointsAccumulators[0]}
      Puntos PC: ${pointsAccumulators[1]}
      `);
  }
};







