/**
=========================================================
* OKR Hub Router - Used fro Nav Bar
=========================================================

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import Automotive from "layouts/dashboards/automotive";
import SmartHome from "layouts/dashboards/smart-home";
import Overview from "layouts/ecommerce/overview";
// import ProfileOverview from "layouts/pages/profile/profile-overview";
// import Teams from "layouts/pages/profile/teams";
// import AllProjects from "layouts/pages/profile/all-projects";
// import Reports from "layouts/pages/users/reports";
// import NewUser from "layouts/pages/users/new-user";
// import Settings from "layouts/pages/account/settings";
// import Billing from "layouts/pages/account/billing";
// import Invoice from "layouts/pages/account/invoice";
// import Security from "layouts/pages/account/security";
// import General from "layouts/pages/projects/general";
// import Timeline from "layouts/pages/projects/timeline";
// import NewProject from "layouts/pages/projects/new-project";
// import Widgets from "layouts/pages/widgets";
// import Charts from "layouts/pages/charts";
// import SweetAlerts from "layouts/pages/sweet-alerts";
// import Notifications from "layouts/pages/notifications";
// import PricingPage from "layouts/pages/pricing-page";
// import RTL from "layouts/pages/rtl";
// import Kanban from "layouts/applications/kanban";
// import Wizard from "layouts/applications/wizard";
// import DataTables from "layouts/applications/data-tables";
// import calendar from "layouts/applications/calendar/index";
// import Analytics from "layouts/applications/analytics";
// import Overview from "layouts/ecommerce/overview";
// import NewProduct from "layouts/ecommerce/products/new-product";
// import EditProduct from "layouts/ecommerce/products/edit-product";
// import ProductPage from "layouts/ecommerce/products/product-page";
// import ProductsList from "layouts/ecommerce/products/products-list";
// import OrderList from "layouts/ecommerce/orders/order-list";
// import OrderDetails from "layouts/ecommerce/orders/order-details";
// import Referral from "layouts/ecommerce/referral";
// import SignInBasic from "layouts/authentication/sign-in/basic";
// import SignInCover from "layouts/authentication/sign-in/cover";
// import SignInIllustration from "layouts/authentication/sign-in/illustration";
// import SignUpBasic from "layouts/authentication/sign-up/basic";
// import SignUpCover from "layouts/authentication/sign-up/cover";
// import SignUpIllustration from "layouts/authentication/sign-up/illustration";
// import ResetBasic from "layouts/authentication/reset-password/basic";
// import ResetCover from "layouts/authentication/reset-password/cover";
// import ResetIllustration from "layouts/authentication/reset-password/illustration";
// import LockBasic from "layouts/authentication/lock/basic";
// import LockCover from "layouts/authentication/lock/cover";
// import LockIllustration from "layouts/authentication/lock/illustration";
// import VerificationBasic from "layouts/authentication/2-step-verification/basic";
// import VerificationCover from "layouts/authentication/2-step-verification/cover";
// import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
// import Error404 from "layouts/authentication/error/404";
// import Error500 from "layouts/authentication/error/500";

import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SettingsIcon from "examples/Icons/Settings";
// import Basket from "examples/Icons/Basket";
// import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
// import CustomerSupport from "examples/Icons/CustomerSupport";
// import CreditCard from "examples/Icons/CreditCard";
import Dashboard1 from "OKRHub/Dashboard1";
import ObjectiveList from "OKRHub/Objectives/ObjectiveList";
import ObjectiveSummary from "OKRHub/Objectives/ObjectiveSummary";
// import NewObjective from "OKRHub/Objectives/NewObjective";
import ObjectiveEdit from "OKRHub/Objectives/ObjectiveEdit";
import TestNew from "OKRHub/Objectives/TestNew";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Dashboard 1",
        key: "Dashboard1",
        route: "/OKRhub/Dashboard1",
        component: Dashboard1,
      },
    ],
  },

  { type: "title", title: "OKR's", key: "title-OKRs" },

  {
    type: "collapse",
    name: "Strategy",
    key: "strategy",
    icon: <Office size="12px" />,
    collapse: [
      {
        name: "Strategy Themes",
        key: "Dashboard1",
        route: "/OKRhub/Dashboard1",
        component: Dashboard1,
      },
      {
        name: "Summary",
        key: "automotive",
        route: "/OKRhub/Dashboard1",
        component: Dashboard1,
      },
      {
        name: "New Strategy",
        key: "smart-home",
        route: "/OKRhub/Dashboard1",
        component: Dashboard1,
      },
    ],
  },

  {
    type: "collapse",
    name: "ObjectiveList",
    key: "ObjectiveList",
    icon: <SettingsIcon size="12px" />,
    route: "/OKRHub/ObjectiveList",
    component: ObjectiveList,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Key Result",
    key: "KeyResult",
    icon: <SettingsIcon size="12px" />,
    collapse: [
      {
        name: "Key Results",
        key: "Dashboard1",
        route: "/OKRhub/Dashboard1",
        component: Dashboard1,
      },
      {
        name: "Summary",
        key: "automotive",
        route: "/dashboards/automotive",
        component: Automotive,
      },
      {
        name: "New Key Results",
        key: "smart-home",
        route: "/dashboards/smart-home",
        component: SmartHome,
      },
    ],
  },
  {
    type: "collapse",
    name: "Key Result Score",
    key: "KeyResults",
    icon: <SettingsIcon size="12px" />,
    collapse: [
      {
        name: "Key Result Scores",
        key: "Dashboard1",
        route: "/OKRhub/Dashboard1",
        component: Dashboard1,
      },
      {
        name: "Summary",
        key: "automotive",
        route: "/dashboards/automotive",
        component: Automotive,
      },
      {
        name: "New Key Result Scores",
        key: "smart-home",
        route: "/dashboards/smart-home",
        component: SmartHome,
      },
    ],
  },

  { type: "divider", key: "divider-1" },
  { type: "title", title: "Reports", key: "title-reports" },
  {
    type: "collapse",
    name: "Analytics",
    key: "analytics",
    icon: <SpaceShip size="12px" />,
    collapse: [
      {
        name: "Report1",
        key: "overview",
        route: "/ecommerce/overview",
        component: Overview,
      },
      {
        name: "Report2",
        key: "smart-home",
        route: "/dashboards/smart-home",
        component: SmartHome,
      },
    ],
  },
  {
    type: "",
    name: "Others",
    key: "others",
    icon: <SettingsIcon size="12px" />,
    collapse: [
      {
        name: "Summary",
        key: "Summary",
        route: "/OKRhub/Objectives/ObjectiveSummary",
        component: ObjectiveSummary,
      },
      {
        name: "New Objective",
        key: "TestNew",
        route: "/OKRhub/Objectives/TestNew",
        component: TestNew,
      },
      {
        name: "ObjectiveEdit",
        key: "ObjectiveEdit",
        route: "/OKRhub/Objectives/ObjectiveEdit",
        component: ObjectiveEdit,
      },
    ],
  },
];

export default routes;
