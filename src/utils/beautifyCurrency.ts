export default function(value: number): string {
  const options = {
    style: 'currency',
    currency: 'RUB',
    maximumSignificantDigits: 16
  };
  const numberFormat = new Intl.NumberFormat('ru-RU', options);

  return numberFormat.format(value);
}
