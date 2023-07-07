import { FC, ReactElement } from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemIconProps, ListItemText, ListProps } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

interface SideListType {
  icon: ReactElement,
  label: string
};

const SidebarList = (props: ListProps) => (
  <List
    component="nav"
    sx={{
      padding: 0,
    }}
  >
    {props.children}
  </List>
);

const SidebarListItemIcon = (props: ListItemIconProps) => (
  <ListItemIcon
    sx={{
      minWidth: "40px"
    }}
  >
    {props.children}
  </ListItemIcon>
);

const Sidebar: FC = () => {
  const SideList: SideListType[] = [
    { icon: <WorkOutlineOutlinedIcon sx={{ color: "#000" }}/>, label: "工作区" },
    { icon: <LockOutlinedIcon sx={{ color: "#000" }}/>, label: "我的模板" }
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
      }}
    >
      <SidebarList>
        {
          SideList.map((item, index) => {
            return (
              <ListItemButton key={index}>
                <SidebarListItemIcon>{item.icon}</SidebarListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )
          })
        }
      </SidebarList>
    </Box>
  )
};
export default Sidebar;