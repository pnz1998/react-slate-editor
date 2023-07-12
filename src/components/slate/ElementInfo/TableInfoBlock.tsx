import { Box, Divider, FormControlLabel, FormGroup, Stack, Switch, TextField, Typography } from "@mui/material";
import { FC } from "react";

const TableInfoBlock: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: "10px"
      }}
    >
      <Typography align="center" variant="h4" gutterBottom>表格</Typography>
      <Divider />
      <Box
        sx={{
          width: "50%",
          marginTop: "10px"
        }}
      >
        <Stack direction="row" spacing={2}>
          <TextField id="tableId" label="表格ID" />
          <TextField id="cellId" label="单元格ID" />
        </Stack>
        <FormGroup>
          <FormControlLabel
            label="表格边框"
            labelPlacement="start"
            control={<Switch defaultChecked />}
            sx={{
              justifyContent: "start"
            }}
          />
        </FormGroup>
      </Box>
    </Box>
  )
};
export default TableInfoBlock;