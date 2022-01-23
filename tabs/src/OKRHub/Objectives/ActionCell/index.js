// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import Button from "@mui/material/Button";
import Swal from "sweetalert2";
// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { deleteItem } from "OKRHub/Objectives/ObjectiveEdit";
// import { showAlert } from "OKRHub/Objectives/ObjectiveList";
// import { needUpdate } from "../ObjectiveList";

const showAlert = (itemsID) =>
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your objective has been deleted.", "success");
      deleteItem(itemsID.someIDindex);
      // needUpdate();
    }
  });

// function for action 3 buttons
function ActionCell(someIDindex) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography
        variant="body1"
        textColor="secondary"
        customClass="cursor-pointer line-height-0"
      >
        <Tooltip title="Preview Objective" placement="top">
          <Link
            to={{
              pathname: "/OKRHub/Objectives/ObjectiveSummary",
              state: { ObjectiveID: someIDindex },
            }}
            className="previewobjective"
          >
            <Icon className="">visibility</Icon>
          </Link>
        </Tooltip>
      </SuiTypography>
      <SuiBox mx={2}>
        <SuiTypography
          variant="body1"
          textColor="secondary"
          customClass="cursor-pointer line-height-0"
        >
          <Tooltip title="Edit Objective" placement="top">
            <Link
              to={{
                pathname: "/OKRHub/Objectives/ObjectiveEdit",
                state: { ObjectiveID: someIDindex },
              }}
              className="editobjective"
            >
              <Icon className="">edit</Icon>
            </Link>
          </Tooltip>
        </SuiTypography>
      </SuiBox>
      <SuiTypography
        variant="body1"
        textColor="secondary"
        customClass="cursor-pointer line-height-0"
      >
        <Tooltip
          title="Delete Objective"
          placement="left"
          onClick={() => {
            showAlert(someIDindex);
          }}
        >
          <Icon className="">delete</Icon>
        </Tooltip>
      </SuiTypography>
    </SuiBox>
  );
}

export default ActionCell;
