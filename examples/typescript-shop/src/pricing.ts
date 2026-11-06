export function calculateTotal(price: number, quantity: number) {
  const subtotal = price * quantity;
  const total = subtotal * 1.1;
  return total;
}
