import { FC, useEffect } from "react";
import TableSizeResizableHandle from "./TableSizeResizableHandle";
import { useState } from 'react';
import { ReactEditor, useSlate } from "slate-react";
import { Editor, Element, Path, Transforms } from "slate";
import { TableElement } from "../../../../core/models/CustomEditor";

interface TableCellResizableProp {
  colIndex?: number;
  element: Element;
};

const TableCellResizable: FC<TableCellResizableProp> = (props: TableCellResizableProp) => {
  const { colIndex = "", element } = props;
  const [ hoveredIndex, setHoveredIndex ] = useState<number>();
  const [ currentTable, setCurrentTable ] = useState<HTMLElement | null>();
  const editor: Editor = useSlate();
  
  const onHover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHoveredIndex(Number(colIndex));
    const dom = event.target as any as HTMLElement;
    const table = dom.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    setCurrentTable(table);
  };
  const onHoverEnd = () => {
    setHoveredIndex(undefined);
  };
  //拖拽改变表格宽度
  const onWidthResizable = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dom = event.target as any as HTMLElement;
    const table = dom.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    const td = dom.parentElement?.parentElement;
    if(!table || !td) return;
    const currentOffsetX = event.clientX;
    const colNode = table.querySelector("colgroup")?.childNodes[Number(colIndex)] as HTMLElement;
    const nextColNode = table.querySelector("colgroup")?.childNodes[Number(colIndex) + 1] as HTMLElement;
    const initialWidth = td? td.offsetWidth : 0;
    window.onmousemove = (e) => {
      const delta = currentOffsetX - e.clientX;
      const deltaWidth = initialWidth - delta;
      colNode.setAttribute("style", `min-width: 48px; width: ${deltaWidth}px`);
      nextColNode.setAttribute("style", `min-width: 48px; width: ${colNode.offsetWidth + nextColNode.offsetWidth - deltaWidth}px`);
      const path: Path = ReactEditor.findPath(editor, element);
      const nodeEntry = Editor.node(editor, Path.parent(Path.parent(path)))[0] as any as TableElement;
      if(!nodeEntry.cols) return;
      const array = [...nodeEntry.cols];
      array.splice(Number(colIndex), 1, deltaWidth) as number[];
      array.splice(Number(colIndex) + 1, 1, colNode.offsetWidth + nextColNode.offsetWidth - deltaWidth) as number[];
      Transforms.setNodes(
        editor,
        { cols: array },
        { 
          at: Path.parent(Path.parent(path)),
          match: n => Element.isElement(n) && n.type === "table"
        }
      );
    };
    window.onmouseup = () => {
      window.onmousemove = null;
    };
  };

  useEffect(() => {
    const dom = currentTable?.querySelector("tbody");
    if(!dom) return;
    if(hoveredIndex === undefined) {
      dom.childNodes.forEach((item: any) => {
        const children = item.childNodes[Number(colIndex)].childNodes[1].childNodes[2] as HTMLElement;
        children.setAttribute("style", "display: none;");
      })
    } else {
      dom.childNodes.forEach((item: any) => {
        const children = item.childNodes[Number(hoveredIndex)].childNodes[1].childNodes[2] as HTMLElement;
        children.setAttribute("style", 
        `display: block; 
        position: absolute; 
        z-index: 30; 
        width: 0.25rem; 
        opacity: 1; 
        background: rgb(59, 130, 246); 
        top: -12px; 
        right: -2.5px; 
        height: calc(100% + 12px)`
        );
      })
    };
  }, [hoveredIndex, colIndex, currentTable]);

  //拖拽修改表格高度
  const onHeightResizable = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dom = event.target as any as HTMLElement;
    const block = dom.parentElement?.parentElement?.childNodes[0] as HTMLElement;
    const currentOffsetY = event.clientY;
    const initialHeight = block.offsetHeight;
    window.onmousemove = (e) => {
      const delta = currentOffsetY - e.clientY;
      const deltaHeight = initialHeight - delta;
      block.setAttribute("style", `min-height: ${deltaHeight}px`);
      const path: Path = ReactEditor.findPath(editor, element);
      Transforms.setNodes(
        editor,
        { height: deltaHeight<21? 21 : deltaHeight },
        {
          at: Path.parent(path),
          match: n => Element.isElement(n) && n.type === "tr" 
        }
      );
    };
    window.onmouseup = () => {
      window.onmousemove = null;
    };
  };
  return (
    <>
      <TableSizeResizableHandle 
        direction="right"
        onHover={onHover}
        onHoverEnd={onHoverEnd}
        onMouseDown={onWidthResizable}
      />
      <TableSizeResizableHandle
        direction="bottom"
        onMouseDown={onHeightResizable}
      />
      <div id="tableCellResizableHandle"></div>
    </>
  )
};
export default TableCellResizable;