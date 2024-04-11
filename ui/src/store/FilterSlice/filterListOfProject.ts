import filterClient from "utils/filterByClient";
import filterEndDate from "utils/filterByEndDate";
import filterLocation from "utils/filterByLocation";
import filterNumber from "utils/filterByNumber";
import filterStartDate from "utils/filterByStartDate";
import filterStatus from "utils/filterByStatus";

import { initialStateInterface } from "./todoSlice";

import { CardConfig } from "models/interfaces/cardConfig";

export default function filterListOfProject(
  listOfProjects: Array<CardConfig>,
  filterValue: initialStateInterface,
) {
  let result = listOfProjects;
  for (const [key, value] of Object.entries(filterValue)) {
    switch (key) {
      case "number": {
        result = filterNumber(result, value);
        continue;
      }
      case "projectLocation": {
        result = filterLocation(result, value);
        continue;
      }
      case "projectClient": {
        result = filterClient(result, value);
        continue;
      }
      case "projectStatus": {
        result = filterStatus(result, value);
        continue;
      }
      case "projectStartData": {
        result = filterStartDate(result, value);
        continue;
      }
      case "projectEndData": {
        result = filterEndDate(result, value);
        continue;
      }
    }
  }

  return result;
}
