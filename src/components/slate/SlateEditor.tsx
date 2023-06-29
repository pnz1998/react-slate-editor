import { FC, useCallback } from "react";
import { Editable } from "slate-react";
import { Element } from "./RenderElement";
import { Leaf } from "./RenderLeaf";
import Toolbar from "./Toolbar";

const SlateEditor: FC = () => {
  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);

  return (
    <>
      <Toolbar/>
      <Editable
        style={{
          background: 'white',
          // width: '21cm',
          // height: '29.7cm',
          display: 'block',
          margin: '0 auto',
          marginBottom: '0.5cm',
          boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
          padding: '10px',
        }}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        autoFocus
        spellCheck
      />
    </>
  )
};
export default SlateEditor;