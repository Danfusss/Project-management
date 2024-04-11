import { CardConfig } from "models/interfaces/cardConfig";

export default function filterStatus(array: Array<CardConfig>, option: string) {
  if (option.length !== 1) {
    return array;
  }

  return array.filter((el) => el.status === option[0]);
}
