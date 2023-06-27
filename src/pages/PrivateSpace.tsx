import { Box, Divider } from "@mui/material";
import { FC } from "react";
import ContentHeader from "../components/ContentHeader";
import PrivateTemplateList from "../components/PrivateTemplateList";

const PrivateSpace: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: 'flex',
        flexDirection: "column"
      }}
    >
      <ContentHeader />
      <Divider />
      <PrivateTemplateList />
    </Box>
  )
};
export default PrivateSpace;