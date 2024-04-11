import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Field, FieldProps } from "formik";

type OptionType = { title: string; value: string };

const options: OptionType[] = [
  { title: "Щербакова Александра Денисовна", value: "1" },
  { title: "Нефедов Артём Ярославович", value: "2" },
  { title: "Клюев Артём Михайлович", value: "3" },
  { title: "Глушкова Ксения Никитична", value: "4" },
  { title: "Захаров Илья Александрович", value: "5" },
  { title: "Русанов Максим Дмитриевич", value: "6" },
  { title: "Черкасова Юлия Сергеевна", value: "7" },
  { title: "Родионова Екатерина Дмитриевна", value: "8" },
];

const AutocompleteField = ({ field, form, ...props }: FieldProps<string[]>) => {
  const { setFieldValue } = form;
  const { name } = field;

  return (
    <Autocomplete
      {...props}
      id={name}
      options={options}
      getOptionLabel={(option) => option.title}
      onChange={(_, value) => setFieldValue(name, value?.map((v) => v.value))}
      renderInput={(params) => <TextField {...params} />}
      multiple
    />
  );
};
export default AutocompleteField;
