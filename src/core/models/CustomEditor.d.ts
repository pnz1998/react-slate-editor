import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export interface CustomText { 
  text?: string,
  bold?: boolean,
  italic?: boolean,
  underline?: string,
  strikethrough?: string,
  fontSize?: number,
  color?: string,
  highlight?: string,
  subscript?: string,
  supscript?: string,
  type?: string,
  children?: CustomText[],
  id?: string 
};

export interface ParagraphElement {
  type: 'paragraph'
  children: CustomText[]
};

export type CustomElement = ParagraphElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}