from pricing import calculate_total


def checkout(stock, approved):
    if stock < 1:
        return "sold out"
    if not approved:
        return "payment declined"
    return "order confirmed"


def place_order(price, quantity, tax_rate):
    total = calculate_total(price, quantity, tax_rate)
    return format_receipt(total)


def format_receipt(total):
    return {"total": total, "status": "accepted"}
