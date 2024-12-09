import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import Namespaces from "../../i18n/u18n.contants";
import "./TitledComponent.scss";

type TitledComponentProps = {
  title: string;
} & PropsWithChildren;

const TitledComponent = ({ title, children }: TitledComponentProps) => {
  const { t } = useTranslation(Namespaces.titles);

  return (
    <Box className="titled-component">
      <Typography className="titled-component__title">{t(title)}</Typography>
      {children}
    </Box>
  );
};

export default TitledComponent;
