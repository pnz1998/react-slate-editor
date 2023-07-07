/** @jsxImportSource @emotion/react */
import { FC } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, css } from "@mui/material";
import ElementList from "./ElementList";

const InsertElementButton: FC = () => {
  return (
    <Box
      sx={{
        width: "125px",
        position: "relative"
      }}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          &:hover {
            background: #ebedf0;
          }
        `}
      >
        <AddOutlinedIcon />添加组件
      </div>
      <ElementList />
    </Box>
  )
};
export default InsertElementButton;