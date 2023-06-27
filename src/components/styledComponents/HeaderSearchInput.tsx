import { TextField, styled } from "@mui/material";

export const HeaderSearchInput = styled(TextField)(({ theme }) => ({
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