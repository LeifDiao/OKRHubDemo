/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SuiBadge from "components/SuiBadge";

// ProductsList page components
import ObjectiveCell from "layouts/ecommerce/products/products-list/components/ObjectiveCell";
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Images
// const adidasHoodie =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg";
// const macBookPro =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg";
// const metroChair =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/metro-chair.jpg";
// const alchimiaChair =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/alchimia-chair.jpg";
// const fendiCoat =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/fendi-coat.jpg";
// const offWhiteJacket =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/off-white-jacket.jpg";
// const yohjiYamamoto =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yohji-yamamoto.jpg";
// const mcqueenShirt =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/mcqueen-shirt.jpg";
// const yellowChair =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yellow-chair.jpg";
// const heronTshirt =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/heron-tshirt.jpg";
// const livingChair =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/living-chair.jpg";
// const orangeSofa =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/orange-sofa.jpg";
// const burberry =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/burberry.jpg";
// const dgSkirt =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/d&g-skirt.jpg";
// const undercover =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/undercover.jpg";

// Badges
const outOfStock = (
  <SuiBadge
    variant="contained"
    color="error"
    size="extra-small"
    badgeContent="out of stock"
    container
  />
);
const inStock = (
  <SuiBadge
    variant="contained"
    color="success"
    size="extra-small"
    badgeContent="in stock"
    container
  />
);

export default {
  columns: [
    {
      Header: "Name",
      accessor: "Name",
      width: "30%",
      Cell: ({ value: [name, data] }) => (
        <ObjectiveCell image={data.image} name={name} checked={data.checked} />
      ),
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Priority", accessor: "Priority" },
    { Header: "Completion", accessor: "Completion" },
    { Header: "No.Key Results", accessor: "KeyResults" },
    {
      Header: "Status",
      accessor: "Status",
      Cell: ({ value }) => (value === "in stock" ? inStock : outOfStock),
    },
    { Header: "action", accessor: "action" },
  ],

  rows: [
    {
      Name: ["Go to the OKR Hub", { checked: false }],
      Type: "Buiness",
      Priority: "High",
      Completion: "80%",
      KeyResults: 5,
      status: "out of stock",
      action: <ActionCell />,
    },

    {
      Name: ["Go to the OKR Hub", { checked: false }],
      Type: "Buiness",
      Priority: "High",
      Completion: "80%",
      KeyResults: 5,
      Status: "in stock",
      action: <ActionCell />,
    },

    {
      Name: ["Go to the OKR Hub", { checked: false }],
      Type: "Buiness",
      Priority: "High",
      Completion: "80%",
      KeyResults: 5,
      status: "out of stock",
      action: <ActionCell />,
    },

    {
      Name: ["Go to the OKR Hub", { checked: false }],
      Type: "Buiness",
      Priority: "High",
      Completion: "80%",
      KeyResults: 5,
      status: "out of stock",
      action: <ActionCell />,
    },
  ],
};
