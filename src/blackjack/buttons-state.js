export const disableButtons = (btnStop, btnTakeCard) => {
  btnStop.disabled = true;
  btnTakeCard.disabled = true;
};

export const enableButtons = (btnStop, btnTakeCard) => {
  btnStop.disabled = false;
  btnTakeCard.disabled = false;
};