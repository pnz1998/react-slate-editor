import { Box } from "@mui/material";
import { FC } from "react";
import SlateEditor from "../components/slate/SlateEditor";
import BackButton from "../components/BackButton";

const Editor: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          width: "200px",
          height: "100%",
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
        }}
      >
        <BackButton />
      </Box>
      <Box
        sx={{
          height: "100%",
          flex: 1,
          padding: "20px",
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >
        <SlateEditor />
      </Box>
    </Box>
  )
};
export default Editor;