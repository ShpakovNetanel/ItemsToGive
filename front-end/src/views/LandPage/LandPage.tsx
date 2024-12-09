import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FirstTime from "../../components/FirstTime/FirstTime";
import Namespaces from "../../i18n/u18n.contants";
import avatar from "../../images/avatar.png";
import "./LandPage.scss";

const LandPage = () => {
  const { t } = useTranslation(Namespaces.titles);
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/login");
  };

  return (
    <Box className="landing-page">
      <Box className="landing-page__image" component="img" src={avatar} />
      <Box className="landing-page__title">
        <Typography
          className="landing-page__title--main"
          sx={{
            fontSize: "4rem",
          }}
        >
          welcome
        </Typography>
        <Typography className="landing-page__title--sub" sx={{}}>
          {t("hereWeDonateItemsForWhomeNeedsThem")}
        </Typography>
      </Box>
      <Box className="landing-page__links">
        <Button onClick={onLoginClick}>login</Button>
        <FirstTime />
      </Box>
    </Box>
  );
};

export default LandPage;
