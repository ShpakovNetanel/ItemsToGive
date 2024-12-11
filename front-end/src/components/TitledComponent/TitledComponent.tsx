import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import "./TitledComponent.scss";

type TitledComponentProps = {
  title: string;
} & PropsWithChildren;

const TitledComponent = ({
  title,
  children,
}: TitledComponentProps) => {

  return (
    <Box className="titled-component">
      <Typography className="titled-component__title">{title}</Typography>
      {children}
    </Box>
  );
};

export default TitledComponent;
