import { Box } from "@mui/material";
import { FC, useContext } from "react";
import SlateEditor from "../components/slate/SlateEditor";
import BackButton from "../components/BackButton";
import { SlateElementListContextType, slateElementListContext } from "../core/providers/SlateElementListProvider";
import ElementList from "../components/ElementList";

const Editor: FC = () => {
  const { visible } = useContext<SlateElementListContextType>(slateElementListContext);

  const elementListStyle = visible? {
    width: "350px",
    height: "100%",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    transition: "width 1s"
  } : {
    width: "0px",
    height: "100%",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    transition: "width 1s"
  };
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
      <Box
        sx={elementListStyle}
      >
        <ElementList />
      </Box>
    </Box>
  )
};
export default Editor;