import { RenderLeafProps } from "slate-react"

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps): JSX.Element => {
  return (
    <span {...attributes}>{children}</span>
  )
};