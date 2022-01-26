import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiButton from "OKRHub/UI_Components/SuiButton";

import DashboardLayout from "OKRHub/Resources/DashboardLayout";
import DashboardNavbar from "OKRHub/Resources/DashboardNavbar";
import VerticalBarChart from "OKRHub/Resources/Charts/BarCharts/VerticalBarChart";
import verticalBarChartData from "OKRHub/Resources/ReportChart/data/verticalBarChartData";
import Social from "OKRHub/Resources/analytics/components/Social";
import ChannelsChart from "OKRHub/Resources/overview/components/ChannelsChart";

// get data from API & Map
export const getItems = async (objectId) => {
  const objective = await axios({
    method: "get",
    url: `https://api.leoyun.xyz/api/objectives/${objectId}`,
  });

  const {
    Name,
    Brief,
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
    Brief,
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

  if (!itemData) return false;

  // Form Content for objective summary
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
                      {itemData.Brief}
                    </SuiTypography>
                  </SuiBox>
                  <Stack spacing={1} pr={4} mt={1} direction="row">
                    <Link to="/OKRHub/ObjectiveList" className="backtolist">
                      <SuiButton variant="gradient" buttonColor="info" size="small">
                        Back to List
                      </SuiButton>
                    </Link>
                  </Stack>
                </SuiBox>
                <Divider />
                <Grid container sapcing={3}>
                  {/* part A Data Form */}
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

                    {/* !!! column 6 Block */}
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
                  {/* Part B Charts */}
                  <Grid item xs={5}>
                    <Grid item xs={12} sm={6} lg={12}>
                      <Social />
                    </Grid>
                    <Grid item xs={12} mt={2}>
                      <ChannelsChart />
                    </Grid>
                    <Grid item xs={12} mt={2}>
                      <VerticalBarChart title="Objective Assessment" chart={verticalBarChartData} />
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
