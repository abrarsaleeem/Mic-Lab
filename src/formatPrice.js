export const formatPrice = (amount) => {
  return `Rs. ${Number(amount).toLocaleString("en-PK")}`;
};