import { useState } from "react";
import { Name } from "OKRHub/Objectives/NewObjective";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiEditor from "OKRHub/UI_Components/SuiEditor";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";

// NewProduct page components
import FormField from "OKRHub/Objectives/FormField";

function ObjectiveInfo() {
  const [editorValue, setEditorValue] = useState(
    "<p>Some initial <strong>bold</strong> text</p><br><br><br>"
  );

  return (
    <SuiBox>
      <SuiTypography variant="h5">Creating New Objective</SuiTypography>
      <SuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Name" placeholder="eg. New Objective Name" value={Name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={3}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                defaultValue={{ value: "value stream", label: "Value Stream" }}
                options={[
                  { value: "value stream", label: "Value Stream" },
                  { value: "business development", label: "Business Development" },
                  { value: "projects", label: "Projects" },
                  { value: "portfolios", label: "Portfolios" },
                  { value: "strategy alignment", label: "Strategy Alignment" },
                ]}
              />
            </SuiBox>
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
                  (optional)
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
            <SuiEditor value={editorValue} onChange={setEditorValue} />
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

export default ObjectiveInfo;
