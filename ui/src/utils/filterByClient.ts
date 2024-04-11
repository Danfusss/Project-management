import { CardConfig } from "models/interfaces/cardConfig";

export default function filterClient(
  array: Array<CardConfig>,
  option: string[],
) {
  if (option == null || option.length === 0) {
    return array;
  }

  return array.filter((el) => option.includes(el.clientName));
}
