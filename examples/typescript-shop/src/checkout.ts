export function checkout(stock: number, approved: boolean) {
  if (stock < 1) return "sold out";
  if (!approved) return "payment declined";
  stock--;
  return "order confirmed";
}
