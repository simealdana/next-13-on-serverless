import { StyledComponentsGlobalsProvider, theme } from "configs/theme";
import { Provider as RollbarProvider } from "@rollbar/react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { config } from "configs/rollbar";
import "../styles/output.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RollbarProvider config={config}>
      <ReduxProvider store={store}>
        <StyledComponentsGlobalsProvider />
        <StyledComponentsProvider theme={theme}>
          <Component {...pageProps} />
        </StyledComponentsProvider>
      </ReduxProvider>
    </RollbarProvider>
  );
};

export default App;
