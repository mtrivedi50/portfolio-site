// @ts-expect-error No corresponding @types for fontsource. Ignore instead of creating
// globals.d.ts, which is generally bad practice.
import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { ThemeProvider } from "@emotion/react";
import { Stack } from "@mui/material";
import "@/App.css";
import { Hero } from "@/components/Hero";
import theme from "@/theme/theme";
import { Projects } from "@/components/Projects";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack sx={{ alignItems: "center" }}>
          <Stack spacing={12} sx={{ width: "75%" }}>
            <Hero />
            <Projects />
          </Stack>
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
