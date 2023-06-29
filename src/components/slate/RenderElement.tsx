import { RenderElementProps, useSlate } from "slate-react";
import { CustomEditor } from "../../core/models/CustomEditor";

export const Element = ({ attributes, children, element }: RenderElementProps): JSX.Element => {
  const editor: CustomEditor = useSlate();
  switch (element.type) {
    default: {
      return (
        <p {...attributes}>
          {children}
        </p>
      )
    }
  }
};