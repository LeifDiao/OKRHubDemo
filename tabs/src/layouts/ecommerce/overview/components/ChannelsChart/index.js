/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";
import SuiBadgeDot from "components/SuiBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/ecommerce/overview/components/ChannelsChart/data";

function ChannelsChart() {
  return (
    <Card className="overflow-visible">
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6">Related Key Results</SuiTypography>
      </SuiBox>
      <SuiBox p={0} mt={1}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="100%" />
          </Grid>
          <Grid item xs={5}>
            <SuiBox px={1}>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="success" badgeContent="Done" />
              </SuiBox>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="info" badgeContent="In Progress" />
              </SuiBox>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="error" badgeContent="Not Started" />
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default ChannelsChart;
