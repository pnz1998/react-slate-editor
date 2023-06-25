import { RenderLeafProps } from "slate-react"

const Leaf = ({ attributes, children, leaf }: RenderLeafProps): JSX.Element => {
  return (
    <span {...attributes}>{children}</span>
  )
};
export default Leaf;