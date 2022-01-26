import PropTypes from "prop-types";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";

function ObjectiveCell({ name }) {
  return (
    <SuiBox display="flex" alignItems="left">
      <SuiBox mx={0} width="0.50rem">
        <SuiBox component="" src={name} alt={name} width="100%" />
      </SuiBox>
      <SuiTypography variant="button" fontWeight="medium">
        {name}
      </SuiTypography>
    </SuiBox>
  );
}

// Typechecking props for the ProductCell
ObjectiveCell.propTypes = {
  name: PropTypes.string.isRequired,
  // checked: PropTypes.bool,
};

export default ObjectiveCell;
