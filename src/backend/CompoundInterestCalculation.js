function calculationCompoundInterest(amount, interestRate, months) {
  return Number(amount) * Math.pow(1 + Number(interestRate / 100), months);
}

function calculationBalance(amount, interestRate, months) {
  return calculationCompoundInterest(amount, interestRate, months) - amount;
}

function percentageBalance(amount, interestRate, months) {
  const balance =
    calculationCompoundInterest(amount, interestRate, months) - amount;
  return (balance * 100) / amount;
}

export {
  calculationCompoundInterest as calculation,
  calculationBalance as sub,
  percentageBalance as percent,
};
