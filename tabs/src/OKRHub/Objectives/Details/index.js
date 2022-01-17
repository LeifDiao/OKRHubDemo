import { useState } from "react";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
// import SuiEditor from "OKRHub/UI_Components/SuiEditor";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";
import SuiDatePicker from "OKRHub/UI_Components/SuiDatePicker";
// NewProduct page components
// import FormField from "OKRHub/Objectives/FormField";

function Details() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSetStartDate = (newDate) => setStartDate(newDate);
  const handleSetEndDate = (newDate) => setEndDate(newDate);
  return (
    <SuiBox>
      <SuiTypography variant="h5">Objective Details</SuiTypography>
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
                  Strategic Theme
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "Digital Transformation", label: "Digital Transformation" }}
                options={[
                  { value: "Digital Transformation", label: "Digital Transformation" },
                  { value: "business development", label: "Business Development" },
                  { value: "strategy alignment", label: "Strategy Alignment" },
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
                  Objective Status
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "In Progress", label: "In Progress" }}
                options={[
                  { value: "done", label: "Done" },
                  { value: "In Progress", label: "In Progress" },
                  { value: "not start", label: "Not Start" },
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
                  Priority
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "high", label: "High" }}
                options={[
                  { value: "high", label: "High" },
                  { value: "medium", label: "Medium" },
                  { value: "low", label: "Low" },
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
                  Block
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "yes", label: "Yes" }}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
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
                  Start Date
                </SuiTypography>
              </SuiBox>
              <SuiDatePicker value={startDate} onChange={handleSetStartDate} />
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
                  End Date
                </SuiTypography>
              </SuiBox>
              <SuiDatePicker value={endDate} onChange={handleSetEndDate} />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

export default Details;
