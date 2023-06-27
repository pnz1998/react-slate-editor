import { List, ListItemIcon, ListProps, ListItemIconProps } from "@mui/material";

export const SidebarList = (props: ListProps) => (
  <List
    component="nav"
    sx={{
      padding: 0,
    }}
  >
    {props.children}
  </List>
);

export const SidebarListItemIcon = (props: ListItemIconProps) => (
  <ListItemIcon
    sx={{
      minWidth: "40px"
    }}
  >
    {props.children}
  </ListItemIcon>
);