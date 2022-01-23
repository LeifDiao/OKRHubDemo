import { useState } from "react";
// import axios from "axios";
// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "OKRHub/Resources/DashboardLayout";
import DashboardNavbar from "OKRHub/Resources/DashboardNavbar";
// import Footer from "examples/Footer";

// NewProduct page components
// import Header from "layouts/ecommerce/products/new-product/components/Header";
import ObjectiveInfo from "OKRHub/Objectives/ObjectiveInfo";
import Details from "OKRHub/Objectives/Details";
import Assessment from "OKRHub/Objectives/Assessment";
// import Pricing from "layouts/ecommerce/products/new-product/components/Pricing";

function getSteps() {
  return ["1. Objective Info", "2. Details", "3. Assessment"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ObjectiveInfo />;
    case 1:
      return <Details />;
    case 2:
      return <Assessment />;
    default:
      return null;
  }
}

function NewObjective() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <Header /> */}
      <SuiBox mt={8} mb={20}>
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
                  {getStepContent(activeStep)}
                  <SuiBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <SuiBox />
                    ) : (
                      <SuiButton variant="gradient" buttonColor="secondary" onClick={handleBack}>
                        back
                      </SuiButton>
                    )}
                    <SuiButton
                      variant="gradient"
                      buttonColor="dark"
                      onClick={!isLastStep && handleNext}
                    >
                      {isLastStep ? "send" : "next"}
                    </SuiButton>
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
