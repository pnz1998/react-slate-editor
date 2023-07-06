/** @jsxImportSource @emotion/react */
import { Editor } from "slate";
import { RenderElementProps, useSlate } from "slate-react";
import { css } from '@emotion/react';

export const Element = ({ attributes, children, element }: RenderElementProps): JSX.Element => {
  const editor: Editor = useSlate();
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'bulleted-list':
      return (
        <ul 
          style={style}
          css={css`
            margin-left: 18px;
          `}
          {...attributes}
        >
          {children}
        </ul>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol 
          style={style}
          css={css`
            margin-left: 18px;
          `}
          {...attributes}
        >
          {children}
        </ol>
      )
    default: {
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
    }
  }
};