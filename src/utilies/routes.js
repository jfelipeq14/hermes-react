import {
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  FolderPlusIcon,
  ShoppingCartIcon,
  TicketIcon,
  UserGroupIcon,
  UsersIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";

import Menu from "../pages/Menu";
import Dashboard from "../pages/Dashboard";
import Roles from "../pages/role/Role";
import Users from "../pages/user/Users";
import Services from "../pages/services/Services";
import Packages from "../pages/packages/Packages";
import CreatePackages from "../pages/packages/CreatePackages";
import Programming from "../pages/packages/Programing";
import Customers from "../pages/customers/Customers";
import Reservations from "../pages/reserve/Reservations";
import Payments from "../pages/pay/Payments";
import Pays from "../pages/pay/Sales";

import EditProfile from "../pages/user/EditProfile";

export const administrator = [
  {
    name: "Inicio",
    href: "administrator",
    component: Menu,
    icon: HomeIcon,
  },
  {
    name: "Dashboard",
    href: "administrator/dashboard",
    component: Dashboard,
    icon: ChartPieIcon,
  },
  {
    name: "Perfil",
    href: "administrator/profile",
    component: EditProfile,
    icon: UserIcon,
  },
  {
    name: "Configuración",
    href: "administrator/roles",
    component: Roles,
    icon: Cog6ToothIcon,
  },
  {
    name: "Usuarios",
    href: "administrator/users",
    component: Users,
    icon: UsersIcon,
  },
  {
    name: "Servicios",
    href: "administrator/services",
    component: Services,
    icon: ShoppingCartIcon,
  },
  {
    name: "Paquetes",
    href: "administrator/packages",
    component: Packages,
    submenu: [
      {
        name: "Crear paquetes",
        href: "administrator/packages/create",
        component: CreatePackages,
      },
      {
        name: "Programación de paquetes",
        href: "administrator/packages/programming",
        component: Programming,
      },
    ],
    icon: CubeIcon,
  },
  {
    name: "Clientes",
    href: "administrator/customers",
    component: Customers,
    icon: UserGroupIcon,
  },
  {
    name: "Reservas",
    href: "administrator/reservations",
    component: Reservations,
    icon: FolderPlusIcon,
  },
  {
    name: "Pagos",
    href: "administrator/pays",
    component: Pays,
    submenu: [
      {
        name: "Gestión de pagos",
        href: "administrator/payments",
        component: Payments,
      },
    ],
    icon: TicketIcon,
  },
];

export const customer = [
  {
    name: "Reserve",
    href: "/reserve",
    icon: UserGroupIcon,
  },
  {
    name: "Profile",
    href: "customer/profile",
    component: EditProfile,
    icon: UsersIcon,
  },
];
