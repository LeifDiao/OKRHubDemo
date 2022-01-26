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

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import RedditIcon from "@mui/icons-material/Reddit";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Analytics application components
import SocialItem from "layouts/applications/analytics/components/SocialItem";

function Social() {
  return (
    <Card className="h-100">
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6">Objective Progress</SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <SocialItem
          icon={{ color: "facebook", component: "" }}
          title="Objective Completion"
          percentage={45}
        />
      </SuiBox>
    </Card>
  );
}

export default Social;
