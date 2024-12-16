import { AppRouter } from "./AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styled-components/theme.ts";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
