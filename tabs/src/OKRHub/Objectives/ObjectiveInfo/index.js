import Grid from "@mui/material/Grid";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";
import SuiInput from "OKRHub/UI_Components/SuiInput";
import FormField from "OKRHub/Objectives/FormField";

// eslint-disable-next-line react/prop-types
const ObjectiveInfo = ({ itemSetter }) => {
  // eslint-disable-next-line
  console.log(itemSetter);

  return (
    <SuiBox>
      <SuiTypography variant="h5">Creating New Objective</SuiTypography>
      <SuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} mt={1.5}>
            <FormField
              type="text"
              label="Name"
              placeholder="eg. New Objective Name"
              onChange={(e) => {
                itemSetter("Name", e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={1} ml={0} lineHeight={0} display="inline-block">
              <SuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Type
              </SuiTypography>
            </SuiBox>
            <SuiSelect
              defaultValue={{ value: "", label: "Select Types" }}
              options={[
                { value: "ValueStream", label: "ValueStream" },
                { value: "Business", label: "Business" },
                { value: "Portfolios", label: "Portfolios" },
                { value: "Development", label: "Development" },
              ]}
              onChange={(e) => {
                itemSetter("Type", e.value);
              }}
            />
          </Grid>
        </Grid>
      </SuiBox>
      <SuiBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} mt={2}>
            <FormField
              type="text"
              label="Objective Brief"
              placeholder="A short description of your objective."
              onChange={(e) => {
                itemSetter("Brief", e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </SuiBox>
      <SuiBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Description&nbsp;&nbsp;
                <SuiTypography variant="caption" fontWeight="regular" textColor="text">
                  (Narrarive of your new objective)
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
            <SuiInput
              placeholder="Entry the description of your objective."
              multiline
              rows={4}
              onChange={(e) => {
                itemSetter("Description", e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
};

export default ObjectiveInfo;
