import { createTheme } from "@mui/material";

export const appBarHeight = "64px";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f59e0b",
    },
    error: {
      main: "#ef4444",
    },
    warning: {
      main: "#f97316",
    },
    info: {
      main: "#0ea5e9",
    },
    success: {
      main: "#10b981",
    },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: `'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'`,
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontSize: "2.25rem", fontWeight: 700 },
    h2: { fontSize: "1.875rem", fontWeight: 700 },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    h4: { fontSize: "1.25rem", fontWeight: 600 },
    h5: { fontSize: "1.125rem", fontWeight: 500 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "rem" },
    body2: { fontSize: "0.875rem" },
  },
  shape: {
    borderRadius: 8, // Tailwind's rounded-md
  },
  spacing: 4, // Tailwind's default spacing scale (4px per unit)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // remove all-caps
          borderRadius: "0.5rem", // Tailwind's rounded-md (8px)
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: appBarHeight,
          borderBottom: "1px solid lightgray",
          borderRadius: "0rem",
          backgroundColor: "#ffffff",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#fafafa",
        },
      },
    },
  },
});

export default theme;
