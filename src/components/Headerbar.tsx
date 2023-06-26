import { Box, TextField, styled } from "@mui/material";
import { FC } from "react";
import { Search } from "./Icons";

const Headerbar: FC = () => {
  const HeaderSearchInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
      borderRadius: "0 4px 4px 0",
    },
    '& .MuiOutlinedInput-root': {
      height: "40px",
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: "none"
    },
    '& .MuiInputBase-input':  {
      padding: 0,
      background: "#fff",
      height: "40px",
      width: "400px",
      borderRadius: "0 4px 4px 0",
      '&:hover':  {
        border: "none"
      },
    }
  }));
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#1976d2",
        display: "flex"
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          lineHeight: "60px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: '40px',
            background: "#fff",
            textAlign: "center",
            borderRadius: "4px 0 0 4px",
            lineHeight: "52px"
          }}
        >
          <Search sx={{ color: "#1976d2", fontSize: "26px" }}/>
        </Box>
        <HeaderSearchInput 
          placeholder="查询..."
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          lineHeight: "60px"
        }}
      >
        头像
      </Box>
    </Box>
  )
};
export default Headerbar;