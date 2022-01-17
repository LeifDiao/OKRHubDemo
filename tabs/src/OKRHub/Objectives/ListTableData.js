/* eslint-disable react/prop-types */
// OKR ui components
import SuiBadge from "components/SuiBadge";

// ObjectiveList page components
import ObjectiveCell from "OKRHub/Objectives/ObjectiveCell";
import ActionCell from "OKRHub/Objectives/ActionCell";
import axios from "axios";

// Badges
const active = (
  <SuiBadge
    variant="contained"
    color="success"
    size="extra-small"
    badgeContent="Active"
    container
  />
);
const inactive = (
  <SuiBadge
    variant="contained"
    color="error"
    size="extra-small"
    badgeContent="Inactive"
    container
  />
);
export const getData = async () => {
  const rowdata = await axios({
    method: "get",
    url: "https://api.leoyun.xyz/api/objectives",
  });

  const rows = rowdata.data.data.map((item) => {
    const { Name, Type, Priority, Completion, NoKeyResults: KeyResults, Status } = item.attributes;
    return {
      Name: [Name, { checked: false }],
      Type,
      Priority,
      Completion,
      KeyResults,
      Status,
      action: <ActionCell />,
    };
  });

  const result = {
    columns: [
      {
        Header: "Name",
        accessor: "Name",
        width: "30%",
        Cell: ({ value: [name, data] }) => (
          <ObjectiveCell image={data.image} name={name} checked={data.checked} />
        ),
        // Cell: data => console.log(data),
      },
      { Header: "Type", accessor: "Type" },
      {
        Header: "Priority",
        accessor: "Priority",
      },
      { Header: "Completion", accessor: "Completion" },
      { Header: "No.Key Results", accessor: "KeyResults" },
      {
        Header: "Status",
        accessor: "Status",
        Cell: ({ value }) => (value === "active" ? active : inactive),
      },
      { Header: "action", accessor: "action" },
    ],

    rows,
  };

  return result;
};
export default {
  columns: [
    {
      Header: "product",
      accessor: "product",
      width: "40%",
      Cell: ({ value: [name, data] }) => (
        <ObjectiveCell image={data.image} name={name} checked={data.checked} />
      ),
    },
    { Header: "category", accessor: "category" },
    { Header: "price", accessor: "price" },
    { Header: "sku", accessor: "sku" },
    { Header: "quantity", accessor: "quantity" },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ value }) => (value === "active" ? active : inactive),
    },
    { Header: "action", accessor: "action" },
  ],

  rows: [],
};