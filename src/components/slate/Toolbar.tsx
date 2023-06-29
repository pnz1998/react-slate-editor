import { Box, Divider } from "@mui/material";
import { FC } from "react";
import MarkButton from "./MarkButton";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import SubscriptIcon from '@mui/icons-material/Subscript';

const Toolbar: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        // border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1.5,
        },
        '& hr': {
          mx: 0.5,
        },
      }}
    >
      <MarkButton format="bold" tooltip="加粗" icon={<FormatBoldIcon />}/>
      <MarkButton format="italic" tooltip="斜体" icon={<FormatItalicIcon />}/>
      <MarkButton format="underline" tooltip="下划线" icon={<FormatUnderlinedIcon />}/>
      <MarkButton format="strikethrough" tooltip="删除线" icon={<FormatStrikethroughIcon />}/>
      <MarkButton format="supscript" tooltip="上标" icon={<SuperscriptIcon />}/>
      <MarkButton format="subscript" tooltip="下标" icon={<SubscriptIcon />}/>
      {/* <Divider orientation="vertical" variant="middle" flexItem/> */}
      {/* <FontSize tooltip="字号"/>
      <FontColor tooltip="字体颜色"/>
      <HighlightColor tooltip="突出显示"/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <BlockButton format="left" tooltip="左对齐" icon={<FormatAlignLeft />}/>
      <BlockButton format="center" tooltip="居中对齐" icon={<FormatAlignCenter />}/>
      <BlockButton format="right" tooltip="右对齐" icon={<FormatAlignRight />}/>
      <BlockButton format="justify" tooltip="两端对齐" icon={<FormatAlignJustify />}/>
      <Divider orientation="vertical" variant="middle" flexItem/>
      <BlockButton format="bulleted-list" tooltip="项目符号" icon={<FormatListBulleted />}/>
      <BlockButton format="numbered-list" tooltip="编号列表" icon={<FormatListNumbered />}/> */}
    </Box>
  )
};
export default Toolbar;