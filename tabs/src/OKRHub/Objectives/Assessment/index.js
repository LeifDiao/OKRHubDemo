import Grid from "@mui/material/Grid";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";

// eslint-disable-next-line react/prop-types
const Assessment = ({ itemSetter }) => {
  // eslint-disable-next-line
  console.log(itemSetter);

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
                  Assessment 1: Strategic Alignment
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "Please assess from 1-5" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                onChange={(e) => {
                  itemSetter("StrategicAlignment", e.value);
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
                  Assessment 2: Business Growth
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "Please assess from 1-5" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                onChange={(e) => {
                  itemSetter("BusinessGrowth", e.value);
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
                  Assessment 3: Workforce Efficiency
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "Please assess from 1-5" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                onChange={(e) => {
                  itemSetter("WorkforceEfficiency", e.value);
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
                  Assessment 4: Employee Engagement
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "Please assess from 1-5" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                onChange={(e) => {
                  itemSetter("EmployeeEngagement", e.value);
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
                  Assessment 5: Relationship Maintenance
                </SuiTypography>
              </SuiBox>
              <SuiSelect
                defaultValue={{ value: "0", label: "Please assess from 1-5" }}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                ]}
                onChange={(e) => {
                  itemSetter("RelationshipMaintenance", e.value);
                }}
              />
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
};

export default Assessment;
