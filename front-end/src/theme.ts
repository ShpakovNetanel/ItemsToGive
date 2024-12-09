import { createTheme } from "@mui/material";
import "./theme.scss";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Assistant",
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      main: "#091057",
    },
    secondary: {
      main: "#024CAA",
    },
    background: {
      default: "#DBD3D3",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        className: "mui-button",
      },
    },
    MuiTextField: {
      defaultProps: {
        className: "mui-input",
      },
    },
  },
});

export default theme;
