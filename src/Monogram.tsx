import * as React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import theme from "./theme";

function WebadelicLogo(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 63 42"
      style={{ width: "63px", height: "42px" }}
    >
      <path d="m62.6 0.1l-21.4 41.9-9.7-18.8-9.7 18.8-21.4-41.9h15.1l10.3 20.1-1.6 3-10.4-20.4h-8.9l16.9 33.2 8.1-15.9-10.3-20.1h23.6l-10.3 20.1 8.1 15.9 16.9-33.2h-8.9l-10.4 20.4-1.6-3 10.3-20.1zm-31.1 17.1l7.3-14.3h-14.5z" />
    </SvgIcon>
  );
}

export default function Monogram() {
  return (
    <WebadelicLogo
      sx={{
        marginLeft: "16px",
        [theme.breakpoints.up("sm")]: {
          alignSelf: "flex-end",
        },
        color: theme.palette.primary.main,
      }}
    />
  );
}
