import dayjs, { Dayjs } from "dayjs";
import { CardConfig } from "models/interfaces/cardConfig";

export default function filterEndDate(
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
      dayjs(el.endDate, "MM.YYYY").isBefore(dayjs(date).startOf("month")),
    );
  }

  return result;
}
