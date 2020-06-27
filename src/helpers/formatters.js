const formatterBRMoney = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoney(value) {
  return formatterBRMoney.format(value);
}

function formatBalance(value) {
  const balance = value < 0 ? '' : '+';
  return balance + formatMoney(value);
}

function formatPercentage(value) {
  if (!value) {
    return '';
  }
  return value.toFixed(2).replace('.', ',') + '%';
}

export { formatMoney, formatPercentage, formatBalance };
