import * as React from "react";
import { Typography, Box } from "@mui/material";
import Monogram from "./Monogram";
import theme from "./theme";

export default function App() {
  return (
    <Box
      sx={{
        [theme.breakpoints.up("md")]: {},
        width: "100vw",
        height: "100vh",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F9EEE0",
        border: "16px solid",
        borderColor: theme.palette.common.white,
        boxSizing: "border-box",
        overflow: "auto",
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
            alignItems: "flex-start",
            padding: "16px",
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
          <Typography variant="h3" mb={6}>
            About
          </Typography>
          <Box
            sx={{
              [theme.breakpoints.up("md")]: {
                maxWidth: "66.666%",
              },
            }}
          >
            <Typography mb={6}>
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
          paddingLeft: "16px",
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
