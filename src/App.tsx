import * as React from "react";
import { Typography, Box } from "@mui/material";
import Monogram from "./Monogram";
import theme from "./theme";

export default function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F9EEE0",
        border: "16px solid",
        borderColor: theme.palette.common.white,
        boxSizing: "border-box",
        [theme.breakpoints.up("md")]: {
          padding: "64px",
        },
      }}
    >
      <Monogram />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1" component="h1">
            David Martin,
            <br />
            software engineer.
          </Typography>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: "16.666%",
              height: "8px",
              marginY: "64px",
              borderTopRightRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
          />

          <Box
            sx={{
              [theme.breakpoints.up("md")]: {
                maxWidth: "66.666%",
              },
            }}
          >
            <Typography variant="h3" mb={6}>
              Hello, I'm a softy from England. Outside my full-time gig, I
              occasionally dabble in side projects, some of which have found new
              homes via acquisition—though not quite enough to trade my umbrella
              for sunglasses.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          [theme.breakpoints.up("sm")]: {
            alignSelf: "flex-end",
          },
        }}
      >
        <Typography variant="h6">
          react | react native | typescript | node
        </Typography>
      </Box>
    </Box>
  );
}
