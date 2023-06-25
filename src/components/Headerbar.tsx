import { Box, Input } from "@mui/material";
import { FC } from "react";
import { Search } from "./Icons";

const Headerbar: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#1976d2",
      }}
    >
      <Box 
        component="form"
        sx={{
          height: "100%",
          lineHeight: "60px"
        }}
      >
        <Input 
          value="search" 
          startAdornment={<Search sx={{ color: "#fff" }}/>}
          sx={{
            '& .MuiInput-input': {
              background: "#fff",
              '&::before': {
                border: "none"
              }
            },
          }}
        />
      </Box>
    </Box>
  )
};
export default Headerbar;