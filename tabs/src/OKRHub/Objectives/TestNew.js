import { React, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiButton from "OKRHub/UI_Components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "OKRHub/Resources/DashboardLayout";
import DashboardNavbar from "OKRHub/Resources/DashboardNavbar";
import TemperatureSlider from "OKRHub/Resources/TemperatureSlider";
import ProgressDoughnutChart from "OKRHub/Resources/Charts/DoughnutCharts/ProgressDoughnutChart";
import ProgressLineChart from "OKRHub/Resources/Charts/LineCharts/ProgressLineChart";
import progressLineChartData from "layouts/pages/projects/general/data/progressLineChartData";
import progressDoughnutChartData from "layouts/pages/projects/general/data/progressDoughnutChartData";

export const getItems = async (objectId) => {
  const objective = await axios({
    method: "get",
    url: `https://api.leoyun.xyz/api/objectives/${objectId}`,
  });

  // console.log(objective.data.data.attributes);
  const {
    Name,
    Type,
    Priority,
    Completion,
    NoKeyResults: KeyResults,
    Status,
    StartDate,
    EndDate,
    Description,
    ObjectiveStatus,
  } = objective.data.data.attributes;

  return {
    Name,
    Type,
    Priority,
    Completion,
    NoKeyResults: KeyResults,
    Status,
    StartDate,
    EndDate,
    Description,
    ObjectiveStatus,
  };
};

function NewObjective() {
  const location = useLocation();

  const [itemData, setitemData] = useState();

  useEffect(async () => {
    const data1 = await getItems(location.state.ObjectiveID.someIDindex);
    setitemData(data1);
  }, []);

  const [temperature, setTemperature] = useState(21);

  if (!itemData) return false;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={3} mb={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card className="overflow-visible">
              {/* Objective Header */}
              <SuiBox p={3} lineHeight={1}>
                <SuiBox display="flex" justifyContent="space-between" alignItems="flex-start">
                  <SuiBox lineHeight={1}>
                    <SuiTypography variant="h5" fontWeight="medium">
                      {itemData.Name}
                    </SuiTypography>
                    <SuiTypography variant="button" fontWeight="regular" textColor="text">
                      Set objectives and track your performance by your key results.
                    </SuiTypography>
                  </SuiBox>
                  <Stack spacing={1} pr={4} mt={1} direction="row">
                    <Link to="/OKRHub/Objectives/ObjectiveList" className="backtolist">
                      <SuiButton variant="gradient" buttonColor="info" size="small">
                        Back to List
                      </SuiButton>
                    </Link>
                  </Stack>
                </SuiBox>
                <Divider />
                <Grid container sapcing={3}>
                  {/* part A */}
                  <Grid item xs={7}>
                    <SuiTypography variant="h6">Summary</SuiTypography>
                    {/* !!! column 1 */}
                    <Grid container spacing={3}>
                      {/* item-left */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Objecitve Name
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.Name}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                      {/* item-right */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Type
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.Type}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                    </Grid>

                    {/* !!! column 2 */}
                    <Grid container spacing={3}>
                      {/* item-left */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Strategic Theme
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            Need to Update
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                      {/* item-right */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Objective Status
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.ObjectiveStatus.replace(/_/g, " ")}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                    </Grid>

                    {/* !!! column 3 */}
                    <Grid container spacing={3}>
                      {/* item-left */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Priority
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.Priority}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                      {/* item-right */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Status
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.Status}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                    </Grid>

                    {/* !!! column 4 */}
                    <Grid container spacing={3}>
                      {/* item-left */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Start Date
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.StartDate}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                      {/* item-right */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              End Date
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            component="label"
                            variant="body2"
                            fontWeight="regular"
                          >
                            {itemData.EndDate}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                    </Grid>

                    {/* !!! column 5 Description */}
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Description
                            </SuiTypography>
                          </SuiBox>
                          <SuiTypography
                            mb={1}
                            ml={0.5}
                            mt={1}
                            pr={8}
                            component="label"
                            variant="h6"
                            fontWeight="regular"
                          >
                            {itemData.Description}
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                    </Grid>

                    {/* !!! column 5 Description */}
                    <SuiBox mt={3} mb={2}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <SuiBox mb={1} ml={0.5} lineHeight={0} display="flex">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Objective Block
                            </SuiTypography>
                          </SuiBox>
                          <SuiBox pl={0.5} pb={1.5}>
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="regular"
                              textColor="text"
                            >
                              The objective is blocked when it has been retired.
                            </SuiTypography>
                          </SuiBox>
                          <SuiBox ml={0.5} mb={0.25}>
                            <Switch />
                          </SuiBox>
                        </Grid>
                      </Grid>
                    </SuiBox>
                  </Grid>
                  {/* Part B */}
                  <Grid item xs={5}>
                    {/* <SuiTypography ml={2} variant="h6">
                      Analytic Chart
                    </SuiTypography> */}
                    <Grid item xs={12} sm={6} lg={12}>
                      <TemperatureSlider
                        handle1={{
                          value: temperature,
                          onChange: (v) => setTemperature(Math.round(v)),
                        }}
                        title="Objective Progress"
                        current={
                          <>
                            {temperature}
                            <SuiTypography component="span" variant="h4" textColor="text">
                              %
                            </SuiTypography>
                          </>
                        }
                        label="Completion"
                        start={<>0%</>}
                        end={<>100%</>}
                        minValue={0}
                        maxValue={100}
                      />
                    </Grid>
                    <Grid item xs={12} mt={2}>
                      <ProgressDoughnutChart
                        icon="workspace_premium"
                        title="Number of Key Results"
                        count={itemData.NoKeyResults}
                        chart={progressDoughnutChartData}
                      />
                    </Grid>
                    <Grid item xs={12} my={2}>
                      <ProgressLineChart
                        icon="date_range"
                        title="Key Result Scores by Month"
                        count={itemData.NoKeyResults}
                        progress={21}
                        chart={progressLineChartData}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </SuiBox>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default NewObjective;
