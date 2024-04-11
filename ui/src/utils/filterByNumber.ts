import { CardConfig } from "models/interfaces/cardConfig";

export default function filterNumber(array: Array<CardConfig>, option: string) {
  if (option == "") {
    return array;
  }

  return array.filter((el) => el.number.includes(option));
}
