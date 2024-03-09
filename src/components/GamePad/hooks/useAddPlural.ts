export function addPluralToUntilType(value: number, unit: string) {
  function numberWithCommas(inputMoney: number, showNegatives = false) {
    if (inputMoney < 0 && !showNegatives) {
      return (inputMoney * -1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return inputMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return `${numberWithCommas(value)} ${unit}${value !== 1 ? "s" : ""}`;
}

export function addPluralS(value: number) {
  return `${value !== 1 ? "s" : ""}`;
}
