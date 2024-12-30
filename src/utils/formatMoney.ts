export const formatMoney = (amount: number) => {
const fixed2 = amount.toFixed(2);

  const formatedAmount = '$' + fixed2.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formatedAmount;
}