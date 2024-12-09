import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./router";
import theme from "./theme";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Toaster />
            <RouterProvider router={router} />
          </RecoilRoot>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
