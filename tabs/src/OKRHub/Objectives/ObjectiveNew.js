import { useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiButton from "OKRHub/UI_Components/SuiButton";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import DashboardLayout from "OKRHub/Resources/DashboardLayout";
import DashboardNavbar from "OKRHub/Resources/DashboardNavbar";
import ObjectiveInfo from "OKRHub/Objectives/ObjectiveInfo";
import Details from "OKRHub/Objectives/Details";
import Assessment from "OKRHub/Objectives/Assessment";
// import SuiAlert from "OKRHub/UI_Components/SuiAlert";

function getSteps() {
  return ["1. Objective Info", "2. Details", "3. Assessment"];
}
// let NewObjectiveItem;

function getStepContent(stepIndex, objectiveDataSetter) {
  switch (stepIndex) {
    case 0:
      return <ObjectiveInfo itemSetter={objectiveDataSetter} />;
    case 1:
      return <Details itemSetter={objectiveDataSetter} />;
    case 2:
      return <Assessment itemSetter={objectiveDataSetter} />;
    default:
      return null;
  }
}

function PostItem(data) {
  // eslint-disable-next-line
  console.log(data.data);
  axios
    .post(`https://api.leoyun.xyz/api/objectives`, {
      data,
    })
    .then((res) => {
      // eslint-disable-next-line
      console.log("res ", res);
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.log("err", err);
    });
}
function UpdataData(objectiveData) {
  PostItem(objectiveData);
  // eslint-disable-next-line
  console.log("UpdataData");
  // eslint-disable-next-line
  console.log(objectiveData);
}
function NewObjective() {
  const [data, setobjectiveData] = useState({});
  // const handleChange = (e) => {
  //   console.log(e.target);
  //   const { name, value } = e.target;
  //   setobjectiveData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  // const SaveAlert() {
  //   return <SuiAlert>This is an alert!</SuiAlert>;
  // }

  function handleChange(name, value) {
    setobjectiveData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  // eslint-disable-next-line
  console.log(data, setobjectiveData);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  // const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <Header /> */}
      <SuiBox display="flex" justifyContent="space-between" alignItems="end">
        <SuiBox lineHeight={1} ml={5} mt={4}>
          <SuiTypography variant="h5" fontWeight="medium">
            New Objective Form
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
      <SuiBox mt={2} mb={20}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card className="overflow-visible">
              <SuiBox p={2}>
                <SuiBox>
                  {getStepContent(activeStep, handleChange)}
                  <SuiBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <SuiBox />
                    ) : (
                      <SuiButton variant="gradient" buttonColor="secondary" onClick={handleBack}>
                        back
                      </SuiButton>
                    )}

                    {activeStep !== 2 && (
                      <SuiButton variant="gradient" buttonColor="dark" onClick={handleNext}>
                        Next
                      </SuiButton>
                    )}
                    {activeStep === 2 && (
                      <SuiButton
                        variant="gradient"
                        buttonColor="dark"
                        onClick={() => UpdataData(data)}
                      >
                        Save
                      </SuiButton>
                    )}
                  </SuiBox>
                </SuiBox>
              </SuiBox>
            </Card>
          </Grid>
        </Grid>
      </SuiBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default NewObjective;
