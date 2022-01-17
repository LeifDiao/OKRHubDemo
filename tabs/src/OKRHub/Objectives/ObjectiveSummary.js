// import { useState } from "react";
import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TemperatureSlider from "layouts/dashboards/smart-home/components/TemperatureSlider";
// import Footer from "examples/Footer";
import ProgressDoughnutChart from "examples/Charts/DoughnutCharts/ProgressDoughnutChart";
import progressDoughnutChartData from "layouts/pages/projects/general/data/progressDoughnutChartData";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import progressLineChartData from "layouts/pages/projects/general/data/progressLineChartData";

function NewProject() {
  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(new Date());
  //   const [editorValue, setEditorValue] = useState(
  //     "<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><br><br>"
  //   );

  //   const handleSetStartDate = (newDate) => setStartDate(newDate);
  //   const handleSetEndDate = (newDate) => setEndDate(newDate);
  const [temperature, setTemperature] = useState(21);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={3} mb={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card className="overflow-visible">
              {/* Objective Header */}
              <SuiBox p={2} lineHeight={1}>
                <SuiTypography variant="h5" fontWeight="medium">
                  Objective 1 App Development
                </SuiTypography>
                <SuiTypography variant="button" fontWeight="regular" textColor="text">
                  The KPI of APP development Project analysed by key result data.
                </SuiTypography>

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
                            App Development in New Project
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
                            Value Stream
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
                            Digital Transformation
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
                            In Progress
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
                            Medium
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
                            Active
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
                            7-Jan-2022
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
                            20-July-2022
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry &apos;s standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
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
                        count={5}
                        chart={progressDoughnutChartData}
                      />
                    </Grid>
                    <Grid item xs={12} my={2}>
                      <ProgressLineChart
                        icon="date_range"
                        title="Key Result Scores by Month"
                        count={55.5}
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

export default NewProject;
