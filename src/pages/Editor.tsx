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
        display: "flex"
      }}
    >
      <Box
        sx={{
          width: "200px",
          height: "100%",
          borderRight: "1px solid rgba(0,0,0,0.5)"
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
      <Box
        sx={{
          width: "250px",
          height: "100%",
          borderLeft: "1px solid rgba(0,0,0,0.5)"
        }}
      ></Box>
    </Box>
  )
};
export default Editor;