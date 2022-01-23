import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
// OKR ui components
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import SuiButton from "OKRHub/UI_Components/SuiButton";
// OKR ui layout
import DashboardLayout from "OKRHub/Resources/DashboardLayout";
import DashboardNavbar from "OKRHub/Resources/DashboardNavbar";
import DataTable from "OKRHub/Resources/DataTable";
// Data
import ListTableData, { getData } from "OKRHub/Objectives/ListTableData";
// import Swal from "sweetalert2";
// import { deleteItem } from "OKRHub/Objectives/ObjectiveEdit";

let Listupdated;
// let setListupdated;

function ObjectiveList() {
  const [data, setData] = useState(ListTableData);

  // [Listupdated, setListupdated] = useState(false);

  useEffect(async () => {
    const data1 = await getData();
    setData(data1);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox my={3}>
        <Card>
          <SuiBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <SuiBox lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                All Objectives
              </SuiTypography>
              <SuiTypography variant="button" fontWeight="regular" textColor="text">
                Set objectives and track your performance by your key results.
              </SuiTypography>
            </SuiBox>
            <Stack spacing={1} direction="row">
              <Link to="/OKRHub/Objectives/NewObjective" className="addnewobjective">
                <SuiButton variant="gradient" buttonColor="info" size="small">
                  + New Objective
                </SuiButton>
              </Link>
              {/* <SuiButton variant="outlined" buttonColor="info" size="small">
                import
              </SuiButton>
              <SuiButton variant="outlined" buttonColor="info" size="small">
                export
              </SuiButton> */}
            </Stack>
          </SuiBox>
          {!Listupdated && (
            <DataTable
              table={data}
              entriesPerPage={{
                defaultValue: 10,
                entries: [5, 10, 15],
              }}
            />
          )}
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}
// export function needUpdate() {
//   setListupdated(true);
// }
export default ObjectiveList;
