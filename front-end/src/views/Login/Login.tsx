import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Input from "../../components/Input/Input";
import Namespaces from "../../i18n/u18n.contants";
import loginSchema, { LoginSchema } from "../../RHFSchemas/LoginSchema";
import "./Login.scss";

const Login = () => {
  const { t } = useTranslation(Namespaces.titles);

  const { control } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box className="login">
      <Typography className="login__title">{t("login")}</Typography>
      <Box className="login__input">
        <Input control={control} name={"email"} />
      </Box>
    </Box>
  );
};

export default Login;
