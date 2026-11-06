import { authenticate } from "./auth";
import { checkout } from "./checkout";
export function placeOrder(token: string, stock: number) {
  const approved = authenticate(token);
  return checkout(stock, approved);
}
