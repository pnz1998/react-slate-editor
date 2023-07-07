import { FC } from "react";
import { Box, TextField, styled } from "@mui/material";
import { Search } from "./Icons";

const HeaderSearch: FC = () => {
  const HeaderSearchInput = styled(TextField)(() => ({
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
        width: "90%",
        height: "100%",
        lineHeight: "60px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px"
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
        <Search 
          sx={{ 
            color: "rgb(var(--neutral600-rgb,142,142,142))", 
            fontSize: "26px" 
          }}
        />
      </Box>
      <HeaderSearchInput 
        placeholder="查询..."
      />
    </Box>
  )
};
export default HeaderSearch;