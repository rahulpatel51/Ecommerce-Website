import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6", // Blue-500
      dark: "#1D4ED8", // Blue-700
      light: "#60A5FA", // Blue-400
    },
    secondary: {
      main: "#10B981", // Emerald-500
      dark: "#059669", // Emerald-600
      light: "#34D399", // Emerald-400
    },
    background: {
      default: "#F3F4F6", // Gray-100
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937", // Gray-800
      secondary: "#4B5563", // Gray-600
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
})

export default theme

