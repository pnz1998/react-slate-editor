import { Avatar, Stack } from "@mui/material";
import { FC } from "react";

const HeaderUserOption: FC = () => {
  return (
    <Stack
      direction="row" 
      spacing={2}
      sx={{
        height: "100%",
        alignItems: "center"
      }}
    >
      <Avatar 
        sx={{ color: "#000" }}
      >
        IU
      </Avatar>
    </Stack>
  )
};
export default HeaderUserOption;