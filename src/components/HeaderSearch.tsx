import { FC } from "react";
import { HeaderSearchInput } from "./styledComponents/HeaderSearchInput";
import { Box } from "@mui/material";
import { Search } from "./Icons";

const HeaderSearch: FC = () => {
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