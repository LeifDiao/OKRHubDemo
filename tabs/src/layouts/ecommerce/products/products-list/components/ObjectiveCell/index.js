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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function ObjectiveCell({ name, checked }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <SuiBox mx={2} width="0.50rem">
        <SuiBox component="" src={name} alt={name} width="100%" />
      </SuiBox>
      <SuiTypography variant="button" fontWeight="medium">
        {name}
      </SuiTypography>
    </SuiBox>
  );
}

// Setting default value for the props of ProductCell
ObjectiveCell.defaultProps = {
  checked: false,
};

// Typechecking props for the ProductCell
ObjectiveCell.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default ObjectiveCell;
