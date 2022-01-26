// import { useState } from "react";
import Grid from "@mui/material/Grid";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";
import SuiDatePicker from "OKRHub/UI_Components/SuiDatePicker";

// eslint-disable-next-line react/prop-types
const Details = ({ item, itemSetter }) => {
  console.log(item);
  // eslint-disable-next-line react/prop-types
  const startDate = item.StartDate;
  // eslint-disable-next-line react/prop-types
  const endDate = item.EndDate;
  // eslint-disable-next-line react/prop-types
  const priority = item.Priority
    ? // eslint-disable-next-line react/prop-types
      { value: item.Priority, label: item.Priority }
    : { value: "", label: "select" };

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
                defaultValue={priority}
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
                // eslint-disable-next-line react/prop-types
                value={startDate}
                onChange={(e) => {
                  // setStartDate(e[0].toJson());
                  itemSetter("StartDate", e[0].toJSON());
                  console.log(e);
                  console.log(e[0]);
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
                value={endDate}
                // onChange={handleSetEndDate}
                onChange={(e) => {
                  // setEndDate(e);
                  itemSetter("EndDate", e[0].toJSON());
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
