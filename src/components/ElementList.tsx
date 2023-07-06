import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
import BorderAllIcon from '@mui/icons-material/BorderAll';

const ElementList: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%"
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BorderAllIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
};
export default ElementList;