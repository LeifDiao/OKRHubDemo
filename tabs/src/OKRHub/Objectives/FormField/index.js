import PropTypes from "prop-types";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiInput from "OKRHub/UI_Components/SuiInput";

function FormField({ label, ...rest }) {
  return (
    <>
      <SuiBox mb={1} ml={0.5} lineHeight={1} display="flex">
        <SuiTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SuiTypography>
      </SuiBox>
      <SuiInput {...rest} />
    </>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
