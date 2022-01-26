import { useState } from "react";
import Grid from "@mui/material/Grid";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";
import SuiDatePicker from "OKRHub/UI_Components/SuiDatePicker";

// eslint-disable-next-line react/prop-types
const Details = ({ itemSetter }) => {
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
                defaultValue={{ value: "", label: "Assign Strategic Theme" }}
                options={[
                  { value: "Digital Transformation", label: "Digital Transformation" },
                  { value: "business development", label: "Business Development" },
                  { value: "strategy alignment", label: "Strategy Alignment" },
                ]}
                // onChange={(e) => {
                //   itemSetter("StrategicAlignment", e.value);
                //   console.log(itemSetter);
                // }}
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
                defaultValue={{ value: "", label: "Select Objective Status" }}
                options={[
                  { value: "Done", label: "Done" },
                  { value: "In_Progress", label: "In Progress" },
                  { value: "Not_Started", label: "Not Started" },
                ]}
                onChange={(e) => {
                  itemSetter("ObjectiveStatus", e.value);
                }}
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
                defaultValue={{ value: "", label: "Select Priority" }}
                options={[
                  { value: "High", label: "High" },
                  { value: "Medium", label: "Medium" },
                  { value: "Low", label: "Low" },
                ]}
                onChange={(e) => {
                  itemSetter("Priority", e.value);
                }}
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
                  Status
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "Active", label: "Active" }}
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
                onChange={(e) => {
                  itemSetter("Status", e.value);
                }}
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
              <SuiDatePicker
                format="YYYY-MM-DD"
                value={startDate}
                onChange={(e) => {
                  handleSetStartDate(e);
                  itemSetter("StartDate", startDate);
                  console.log(startDate);
                }}
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
                  End Date
                </SuiTypography>
              </SuiBox>
              <SuiDatePicker
                Value={endDate}
                // onChange={handleSetEndDate}
                onChange={(e) => {
                  handleSetEndDate(e);
                  itemSetter("EndDate", endDate);
                  console.log(endDate);
                }}
              />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
};

export default Details;
