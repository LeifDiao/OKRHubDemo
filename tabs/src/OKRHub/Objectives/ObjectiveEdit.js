import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiButton from "OKRHub/UI_Components/SuiButton";
import SuiDatePicker from "OKRHub/UI_Components/SuiDatePicker";
import DashboardLayout from "OKRHub/Resources/DashboardLayout";
import DashboardNavbar from "OKRHub/Resources/DashboardNavbar";
import FormField from "OKRHub/Objectives/FormField";
import SuiSelect from "OKRHub/UI_Components/SuiSelect";
import SuiInput from "OKRHub/UI_Components/SuiInput";

// Get API Data
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
    ObjectiveStatus,
    NoKeyResults: KeyResults,
    Status,
    Description,
    StartDate,
    EndDate,
    StrategicAlignment,
    BusinessGrowth,
    WorkforceEfficiency,
    EmployeeEngagement,
    RelationshipMaintenance,
  } = objective.data.data.attributes;

  return {
    Name,
    Brief,
    Type,
    Priority,
    Completion,
    ObjectiveStatus,
    NoKeyResults: KeyResults,
    Status,
    Description,
    StartDate,
    EndDate,
    StrategicAlignment,
    BusinessGrowth,
    WorkforceEfficiency,
    EmployeeEngagement,
    RelationshipMaintenance,
  };
};

// Update API Data

function putItem(objectId, data) {
  axios.put(`https://api.leoyun.xyz/api/objectives/${objectId}`, {
    data,
  });
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

// Delete API Data
export function deleteItem(objectId) {
  axios
    .delete(`https://api.leoyun.xyz/api/objectives/${objectId}`, {
      objectId,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("deleteItem", objectId);
}

// Create New API Data
export function newItem() {
  axios
    .post(`https://api.leoyun.xyz/api/objectives/`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function NewObjective() {
  const location = useLocation();
  const [itemData, setitemData] = useState();
  const ObjectiveID = location.state.ObjectiveID.someIDindex;

  useEffect(async () => {
    const data1 = await getItems(ObjectiveID);
    setitemData(data1);
  }, []);

  const [changed, setchanged] = useState(false);

  if (!itemData) return false;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={3} md={5}>
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
                    {changed && (
                      <SuiButton
                        onClick={() => {
                          setchanged(false);
                          putItem(ObjectiveID, itemData);
                        }}
                        variant="gradient"
                        buttonColor="error"
                        size="small"
                      >
                        Update
                      </SuiButton>
                    )}
                    <Link to="/OKRHub/ObjectiveList" className="backtolist">
                      <SuiButton variant="gradient" buttonColor="info" size="small">
                        Back to List
                      </SuiButton>
                    </Link>
                  </Stack>
                </SuiBox>
                <Divider />
                <Grid container sapcing={3}>
                  {/* part A */}
                  <Grid item xs={12}>
                    <SuiTypography variant="h6">Summary</SuiTypography>
                    <SuiTypography
                      component="label"
                      variant="caption"
                      fontWeight="regular"
                      textColor="text"
                    >
                      Please update the details of your objective.
                    </SuiTypography>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Objective Name
                            </SuiTypography>
                            <FormField
                              type="text"
                              label=""
                              defaultValue={itemData.Name}
                              onChange={(e) => {
                                itemData.Name = e.target.value;
                                setchanged(true);
                                console.log(itemData);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Type
                            </SuiTypography>

                            <SuiSelect
                              defaultValue={{ value: [itemData.Type], label: [itemData.Type] }}
                              options={[
                                { value: "Business", label: "Business" },
                                { value: "ValueStream", label: "ValueStream" },
                                { value: "Portfolios", label: "Portfolios" },
                                { value: "Development", label: "Development" },
                              ]}
                              onChange={(e) => {
                                itemData.Type = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Brief
                            </SuiTypography>

                            <FormField
                              type="text"
                              label=""
                              defaultValue={itemData.Brief}
                              onChange={(e) => {
                                itemData.Brief = e.target.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Objective Status
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{
                                value: [itemData.ObjectiveStatus],
                                label: [itemData.ObjectiveStatus],
                              }}
                              options={[
                                { value: "In_Progress", label: "In Progress" },
                                { value: "Done", label: "Done" },
                                { value: "Not_Started", label: "Not Started" },
                              ]}
                              onChange={(e) => {
                                itemData.ObjectiveStatus = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Priority
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{
                                value: [itemData.Priority],
                                label: [itemData.Priority],
                              }}
                              options={[
                                { value: "High", label: "High" },
                                { value: "Medium", label: "Medium" },
                                { value: "Low", label: "Low" },
                              ]}
                              onChange={(e) => {
                                itemData.Priority = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Status
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{ value: [itemData.Status], label: [itemData.Status] }}
                              options={[
                                { value: "Active", label: "Active" },
                                { value: "Inactive", label: "Inactive" },
                              ]}
                              onChange={(e) => {
                                itemData.Status = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Strategic Theme
                            </SuiTypography>
                            <FormField
                              type="text"
                              label=""
                              defaultValue="Function need to be upgrade"
                              // onChange={(e) => {
                              //   itemData.Brief = e.target.value;
                              //   setchanged(true);
                              // }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Start Date
                            </SuiTypography>
                            <SuiDatePicker
                              value={itemData.StartDate}
                              onChange={(e) => {
                                itemData.StartDate = e.value;
                                console.log(e);
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
                        </SuiBox>
                      </Grid>
                    </Grid>

                    {/* !!! column 5 */}
                    <Grid container spacing={3}>
                      {/* item-left */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              End Date
                            </SuiTypography>
                            <SuiDatePicker
                              value={itemData.EndDate}
                              onChange={(e) => {
                                itemData.EndDate = e.value;
                                // console.log(e);
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
                        </SuiBox>
                        {/* item-right */}
                      </Grid>
                    </Grid>

                    {/* !!! column 6 */}
                    <Grid container spacing={3}>
                      {/* item-left */}
                      <Grid item xs={12}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Description
                            </SuiTypography>
                            <SuiInput
                              defaultValue={itemData.Description}
                              multiline
                              rows={4}
                              onChange={(e) => {
                                itemData.Description = e.target.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
                        </SuiBox>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* part B Assessment */}
                  <Grid item xs={12} mt={3}>
                    <SuiTypography variant="h6">Assessment</SuiTypography>
                    <SuiTypography
                      component="label"
                      variant="caption"
                      fontWeight="regular"
                      textColor="text"
                    >
                      Please assess the objective base on the impact of following criteria from
                      Minor (1) to Max (5).
                    </SuiTypography>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Strategic Alignment
                            </SuiTypography>

                            <SuiSelect
                              defaultValue={{
                                value: [itemData.StrategicAlignment],
                                label: [itemData.StrategicAlignment],
                              }}
                              options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                              ]}
                              onChange={(e) => {
                                itemData.StrategicAlignment = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Business Growth
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{
                                value: [itemData.BusinessGrowth],
                                label: [itemData.BusinessGrowth],
                              }}
                              options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                              ]}
                              onChange={(e) => {
                                itemData.BusinessGrowth = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Workforce Efficiency
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{
                                value: [itemData.WorkforceEfficiency],
                                label: [itemData.WorkforceEfficiency],
                              }}
                              options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                              ]}
                              onChange={(e) => {
                                itemData.WorkforceEfficiency = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
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
                          <SuiBox ml={0.5} mt={0} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Employee Engagement
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{
                                value: [itemData.EmployeeEngagement],
                                label: [itemData.EmployeeEngagement],
                              }}
                              options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                              ]}
                              onChange={(e) => {
                                itemData.EmployeeEngagement = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
                        </SuiBox>
                      </Grid>
                    </Grid>
                    {/* !!! column 3 */}
                    <Grid container spacing={3} marginBottom={3}>
                      {/* item-left */}
                      <Grid item xs={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox ml={0.5} mt={0} pd={2} lineHeight={2} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Relationship Maintenance
                            </SuiTypography>
                            <SuiSelect
                              defaultValue={{
                                value: [itemData.RelationshipMaintenance],
                                label: [itemData.RelationshipMaintenance],
                              }}
                              options={[
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "4", label: "4" },
                                { value: "5", label: "5" },
                              ]}
                              onChange={(e) => {
                                itemData.RelationshipMaintenance = e.value;
                                setchanged(true);
                              }}
                            />
                          </SuiBox>
                        </SuiBox>
                      </Grid>
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
