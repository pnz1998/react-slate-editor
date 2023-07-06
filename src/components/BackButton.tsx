import { Box } from "@mui/material";
import { FC } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "60px",
        '&:hover': {
          background: "rgb(245, 245, 245)",
          cursor: "pointer"
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => navigate("/")}
    >
      <ArrowBackIcon 
        sx={{
          fontSize: "24px",
          marginRight: "10px"
        }}
      />
      返回
    </Box>
  )
};
export default BackButton;