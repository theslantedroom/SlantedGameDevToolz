export function numberWithCommas(inputMoney: number, showNegatives = false) {
  if (inputMoney < 0 && !showNegatives) {
    return (inputMoney * -1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return inputMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
