import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./router";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <Toaster />
              <RouterProvider router={router} />
            </QueryClientProvider>
          </RecoilRoot>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
