import { Box, List, ListItem, ListItemButton, ListItemText, Pagination } from "@mui/material";
import { FC } from "react";

interface PrivateListType {
  label: string,
  description?: string
};

const PrivateTemplateList: FC = () => {
  const PrivateList: PrivateListType[] = [
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
    { label: "标题" },
  ];  
  return (
    <Box
      sx={{
        flex: 1
      }}
    >
      <List
        sx={{
          minHeight: "620px"
        }}
      >
        {
          PrivateList.map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ height: "60px" }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            )
          })
        }
      </List>
      <Box>
        <Pagination
          count={10}
          color="primary"
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: "end"
            }
          }}
        />
      </Box>
    </Box>
  )
};
export default PrivateTemplateList;