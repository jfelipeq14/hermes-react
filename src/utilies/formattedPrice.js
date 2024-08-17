export const formattedPrice = () => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
};
