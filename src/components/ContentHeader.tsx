import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const ContentHeader: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Typography variant="h5" component="div">
        我的模板
      </Typography>
      <Button 
        variant="contained" 
        startIcon={<AddOutlinedIcon sx={{ color: "#fff" }}/>}
        sx={{ height: "40px" }}
      >
        添加模板
      </Button>
    </Box>
  )
};
export default ContentHeader;