import { FC } from "react";
import Sidebar from "../components/Sidebar";
import { Box, Grid } from "@mui/material";
import Headerbar from "../components/Headerbar";
import Content from "../components/Content";
import { Applogo } from "../components/Icons";

const Main: FC = () => {
  return (
    <Box sx={{ height: "100%",display: "flex", flexDirection: "column" }}> 
      <Box sx={{ width: "100%", height: "60px" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={1} sx={{ background: "#1976d2", textAlign: "center", lineHeight: "60px" }}>
            {/* <Applogo sx={{ fontSize: "24px", marginTop: "7px", color: "#fff" }}/> */}
          </Grid>
          <Grid item xs={11}>
            <Headerbar />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%",flex: 1 }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={11}>
            <Content />
          </Grid>
        </Grid>
      </Box>
    </Box> 
  )
};
export default Main;