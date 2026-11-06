import { receipt } from './receipt.mjs';
export function submitOrder(quantity) {
  if (quantity < 1) return "empty order";
  return receipt(quantity);
}
