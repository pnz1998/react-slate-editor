import { Button } from "@mui/material";
import { FC, useContext, useState } from "react";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { SlateElementListContextType, slateElementListContext } from "../../core/providers/SlateElementListProvider";

const ToggleElementButton: FC = () => {
  const { updateState } = useContext<SlateElementListContextType>(slateElementListContext);
  const [visible, setVisible] = useState<boolean>();

  const showElementList = () => {
    updateState(true);
    setVisible(true);
  };
  const closeElementList = () => {
    updateState(false);
    setVisible(false);
  };
  return (
    <Button 
      variant="outlined"
      startIcon={visible? <CloseOutlinedIcon /> : <WidgetsOutlinedIcon />}
      onClick={visible? closeElementList : showElementList}
    >
      {visible? "关闭列表" : "添加组件"}
    </Button>
  )
};
export default ToggleElementButton;