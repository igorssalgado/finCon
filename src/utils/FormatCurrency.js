export function FormatCurrency(amount) {
  let BRCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return BRCurrency.format(amount);
}
