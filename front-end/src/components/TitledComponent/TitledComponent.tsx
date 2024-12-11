import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import "./TitledComponent.scss";

type TitledComponentProps = {
  title: string;
  required?: boolean;
} & PropsWithChildren;

const TitledComponent = ({
  title,
  required,
  children,
}: TitledComponentProps) => {
  return (
    <Box className="titled-component">
      <Typography className="titled-component__title">
        {title}
        {required ? "*" : ""}
      </Typography>
      {children}
    </Box>
  );
};

export default TitledComponent;
