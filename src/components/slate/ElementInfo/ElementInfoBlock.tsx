import { FC, useContext } from "react";
import { ElementInfoContextType, ElementInfoContext } from "../../../core/providers/ElementInfoProvider";
import TableInfoBlock from "./TableInfoBlock";

const ElementInfoBlock: FC = () => {
  const { elementInfoState } = useContext<ElementInfoContextType>(ElementInfoContext);
  switch(elementInfoState.type) {
    case 'table': 
      return (
        <TableInfoBlock />
      )
    default: 
      return (
        <p>默认</p>
      )
  }
};
export default ElementInfoBlock;