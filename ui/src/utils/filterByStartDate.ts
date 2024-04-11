import dayjs, { Dayjs } from "dayjs";
import { CardConfig } from "models/interfaces/cardConfig";

export default function filterStartDate(
  array: Array<CardConfig>,
  option: string | null,
) {
  let result: Array<CardConfig> = [];
  if (option == "null") {
    return array;
  }
  if (option) {
    const date = dayjs(JSON.parse(option));
    result = array.filter((el) =>
      dayjs(el.startDate, "MM.YYYY").isAfter(dayjs(date).startOf("month")),
    );
  }

  return result;
}
