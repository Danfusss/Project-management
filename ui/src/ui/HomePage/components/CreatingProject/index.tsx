import React, { useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { TextField } from "formik-material-ui";

import AutocompleteField from "./llll";
import Loading from "./loading";

const DEFAULTLEADERS = [
  "Щербакова Александра Денисовна",
  "Нефедов Артём Ярославович ",
  "Клюев Артём Михайлович",
];

const sleep = (time: number | undefined) =>
  new Promise((acc) => setTimeout(acc, time));

export default function CreatingProject() {
  const [valueClient, setValueClient] = useState<string[]>([]);
  const [inputValueClient, setInputValueClient] = useState("");
  let options = DEFAULTLEADERS.map((el) => {
    return el;
  });
  const newCompany = (options = [...new Set(options)]);

  return (
    <Box width={"60vw"}>
      <Box>
        <FormikStepper
          initialValues={{
            numberProject: "",
            lastName: "",
            millionaire: false,
            money: 0,
            description: "",
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log("values", values);
          }}
        >
          <FormikStep label="Основная информация">
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="firstName"
                component={TextField}
                label="Номер проекта"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="nameProject"
                component={TextField}
                label="Имя проекта"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="projectDescription"
                component={TextField}
                label="Описание проекта"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="lastName"
                component={TextField}
                label="clientName"
              />
            </Box>
          </FormikStep>
          <FormikStep label="Дополнительная информация">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box paddingBottom={2}>
                <Field
                  width="25vw"
                  name="money"
                  type="number"
                  component={DatePicker}
                  label="Выберите дату начала проекта"
                  views={["month", "year"]}
                  sx={{
                    width: "15vw",
                  }}
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  width="25vw"
                  name="money"
                  type="number"
                  component={DatePicker}
                  label="Выберите дату конца проекта"
                  views={["month", "year"]}
                  sx={{
                    width: "15vw",
                  }}
                />
              </Box>
              <Box paddingBottom={2}>
                <Field name="myField" component={AutocompleteField} />
              </Box>
            </LocalizationProvider>
          </FormikStep>
          <FormikStep label="Коментарии и файлы">
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="description"
                component={TextField}
                label="Description"
              />
              <Loading />
            </Box>
          </FormikStep>
        </FormikStepper>
      </Box>
    </Box>
  );
}
interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

interface FormikStepperProps extends FormikConfig<FormikValues> {
  children:
    | React.ReactElement<FormikStepProps>
    | React.ReactElement<FormikStepProps>[];
}

function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

function FormikStepper({ children, ...props }: FormikStepperProps) {
  const childrenArray = React.Children.toArray(
    children,
  ) as React.ReactElement<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Назад
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting
                  ? "Submitting"
                  : isLastStep()
                  ? "Submit"
                  : "Дальше"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
