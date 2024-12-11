import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { isTruthy } from "remeda";
import { getUser, addUser } from "../../api/userService";
import TextField from "../../components/TextField/TextField";
import TitledComponent from "../../components/TitledComponent/TitledComponent";
import { Namespaces } from "../../i18n/i18n.constants";
import registerSchema, {
  RegisterSchema,
} from "../../RHFSchemas/RegisterSchema";
import { Routes } from "../../router";
import "./Register.scss";
import { useSetRecoilState } from "recoil";
import { loggedUser } from "../../atom/atom";

const Register = () => {
  const translations = {
    tTitle: useTranslation(Namespaces.title).t,
    tField: useTranslation(Namespaces.field).t,
    tPlaceholder: useTranslation(Namespaces.placeholder).t,
    tAction: useTranslation(Namespaces.action).t,
    tMessage: useTranslation(Namespaces.message).t,
  };

  const navigate = useNavigate();

  const { control, handleSubmit, setError } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  const setCurrentUser = useSetRecoilState(loggedUser);

  const onLetsGoClick = handleSubmit(async (user) => {
    const existingUser = await getUser(user);
    if (isTruthy(existingUser)) {
      setError("email", {
        message: translations.tMessage("UserAlreadyExists"),
      });
    } else {
      addUser(user);
      setCurrentUser({ ...user });
      navigate(Routes.ITEMS_TO_GIVE);
    }
  });

  return (
    <Box className="register">
      <Typography className="register__title">
        {translations.tTitle("register")}
      </Typography>
      <Box className="register__inputs">
        <TitledComponent title={translations.tField("email")}>
          <TextField
            control={control}
            name={"email"}
            sx={{ width: "90vw" }}
            placeholder={translations.tPlaceholder("stubMail")}
          />
        </TitledComponent>
        <TitledComponent title={translations.tField("password")}>
          <TextField
            control={control}
            name={"password"}
            placeholder={translations.tPlaceholder("yourPassword")}
            sx={{ width: "90vw" }}
          />
        </TitledComponent>
        <TitledComponent title={translations.tField("phoneNumber")}>
          <TextField
            control={control}
            name={"phoneNumber"}
            placeholder={translations.tPlaceholder("phoneNumber")}
            sx={{ width: "90vw" }}
          />
        </TitledComponent>
      </Box>
      <Button className="register__button" onClick={onLetsGoClick}>
        {translations.tAction("letsGo")}
      </Button>
    </Box>
  );
};

export default Register;
