import { Box } from "@mui/material";
import { FC } from "react";
import HeaderUserOption from "./HeaderUserOption";
import HeaderSearch from "./HeaderSearch";

const Headerbar: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#1976d2"
      }}
    >
      <HeaderSearch />
      <HeaderUserOption />
    </Box>
  )
};
export default Headerbar;