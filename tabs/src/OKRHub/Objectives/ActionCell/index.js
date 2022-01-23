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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function ActionCell(someIDindex) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography
        variant="body1"
        textColor="secondary"
        customClass="cursor-pointer line-height-0"
      >
        <Tooltip title="Preview Objective" placement="top">
          <Link
            to={{
              pathname: "/OKRHub/Objectives/ObjectiveSummary",
              state: { ObjectiveID: someIDindex },
            }}
            className="previewobjective"
          >
            <Icon className="">visibility</Icon>
          </Link>
        </Tooltip>
      </SuiTypography>
      <SuiBox mx={2}>
        <SuiTypography
          variant="body1"
          textColor="secondary"
          customClass="cursor-pointer line-height-0"
        >
          <Tooltip title="Edit Objective" placement="top">
            <Link
              to={{
                pathname: "/OKRHub/Objectives/ObjectiveEdit",
                state: { ObjectiveID: someIDindex },
              }}
              className="editobjective"
            >
              <Icon className="">edit</Icon>
            </Link>
          </Tooltip>
        </SuiTypography>
      </SuiBox>
      <SuiTypography
        variant="body1"
        textColor="secondary"
        customClass="cursor-pointer line-height-0"
      >
        <Tooltip title="Delete Objective" placement="left">
          <Icon className="">delete</Icon>
        </Tooltip>
      </SuiTypography>
    </SuiBox>
  );
}

export default ActionCell;
