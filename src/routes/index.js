import ListEmployees from "../Components/DetailsEmployees/listEmployees/ListEmployees";
import Addcommondity from "../Components/StoreManager/AddCommondity/Addcommondity";
import AddEmployee from "../Components/DetailsEmployees/addEmployee/AddEmployee"
import EditEmployee from "../Components/DetailsEmployees/editEmployee/EditEmployee"
import AuthEmployee from "../Components/DetailsEmployees/authEmployee/AuthEmployee"
import AddList from "../Components/StoreManager/AddListStore/AddList";
import ChainStores from "../Components/StoreManager/ChainStores/ChainStores";
import Commodity from "../Components/StoreManager/Commodity/Commodity";
import DetailsStore from "../Components/StoreManager/DetailsStore/DetailsStore";
import EditCommondity from "../Components/StoreManager/EditCommondity/EditCommondity";
import EditListStore from "../Components/StoreManager/EditListStore/EditListStore";
import ListStore from "../Components/StoreManager/ListStore/ListStore";
import Money from "../Components/StoreManager/Money/Money";
import AddWareHouse from "../Components/WareHouse/AddWareHouse";
import WareHouse from "../Components/WareHouse/ListWareHouse";
import DetailsPawn from "./../Components/DetailsPawn/DetailsPawn";
import Home from "./../Components/Home/Home";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: '/detaipawn',
        component: DetailsPawn,
    },
    {
        path: '/chainstores',
        component: ChainStores,
    },
    {
        path: '/commodity',
        component: Commodity,
    },
    {
        path: '/commodity/edit',
        component: EditCommondity,
    },
    {
        path: '/commodity/add',
        component: Addcommondity,
    },
    {
        path: '/detailsStore',
        component: DetailsStore,
    },
    {
        path: '/liststore',
        component: ListStore,
    },
    {
        path: '/Addliststore/add',
        component: AddList,
    },
    {
        path: '/editliststore/edit/:id',
        component: EditListStore,
    },
    {
        path: '/money',
        component: Money,
    },
    {
        path: '/warehouse',
        component: WareHouse,
    },
    {
        path: '/warehouse/add',
        component: AddWareHouse,
    },

    {
        path:'/listemployees',
        component:ListEmployees
      },
      {
        path:'/addemployee',
        component:AddEmployee
      },
      {
        path:'/editemployee/:id',
        component:EditEmployee
      },
      {
        path:'/authorization',
        component:AuthEmployee
      },
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };

