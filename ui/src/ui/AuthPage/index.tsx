import React, { FC } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from "react-hook-form";
import { loginValidation, passwordValidation } from "./ValidationRules";

interface ISignInForm {
  login: string;
  password: string;
}

interface AuthFormProps {
  data: any;
}

export const AuthForm: FC<AuthFormProps> = ({ data }) => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data: any) => console.log(data);

  return (
    <Box
      width="50vw"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      alignSelf={"center"}
    >
      <Typography variant="h4">Войдите</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Чтобы получить доступ
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="Логин"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth
              size="small"
              margin="normal"
              className="auth-form__input"
              error={!!errors.login?.message}
              helperText={errors?.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              type="password"
              className="auth-form__input"
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </Box>
  );
};
