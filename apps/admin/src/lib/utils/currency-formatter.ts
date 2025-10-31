function getCurrencySymbol(locale: string, currency: string): string {
  const part = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  })
    .formatToParts(1)
    .find((part) => part.type === "currency");

  if (!part) {
    return "";
  }

  return part.value;
}

export const nairaSymbol = getCurrencySymbol("en-NG", "NGN");

export const currencyFormatter = (value: number, currency?: string) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency || "NGN",
  }).format(value);
};
