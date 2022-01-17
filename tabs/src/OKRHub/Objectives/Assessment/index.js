// import { useState } from "react";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
// import SuiEditor from "OKRHub/UI_Components/SuiEditor";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";
// import SuiDatePicker from "OKRHub/UI_Components/SuiDatePicker";
// NewProduct page components
// import FormField from "OKRHub/Objectives/FormField";

function Assessment() {
  return (
    <SuiBox>
      <SuiTypography variant="h5">Assessment</SuiTypography>
      <SuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={1}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Assessment 1: Customer Focus
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "0" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </SuiBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={1}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Assessment 2: Environmental Issue
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "0" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </SuiBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={1}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Assessment 3: Profitability
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "0" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </SuiBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SuiBox mb={1}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Assessment 4: Future Growth and Sustainability
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "0" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
              />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

export default Assessment;
