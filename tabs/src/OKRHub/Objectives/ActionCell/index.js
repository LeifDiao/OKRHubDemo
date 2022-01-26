import Icon from "@mui/material/Icon";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import SuiBox from "OKRHub/UI_Components/SuiBox";
import SuiTypography from "OKRHub/UI_Components/SuiTypography";
import { deleteItem } from "OKRHub/Objectives/ObjectiveEdit";

let redirect;
let setRedirect;

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
      setRedirect(true);
    }
  });

// function for action 3 buttons
function ActionCell(someIDindex) {
  [redirect, setRedirect] = useState(false);
  return (
    <SuiBox display="flex" alignItems="center">
      {redirect ? <Redirect push to="/OKRHub/ObjectiveList" /> : null}
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
          placement="top"
          onClick={() => {
            showAlert(someIDindex);
          }}
        >
          <Link
            to={{
              pathname: "/OKRHub/ObjectiveList",
            }}
            className="refresh"
          >
            <Icon className="">delete</Icon>
          </Link>
        </Tooltip>
      </SuiTypography>
    </SuiBox>
  );
}

export default ActionCell;
