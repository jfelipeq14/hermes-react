import {
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  TicketIcon,
  UserGroupIcon,
  UsersIcon,
  UserIcon,
  CubeTransparentIcon,
  CalendarIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  RectangleGroupIcon,
  UserCircleIcon,
} from "@heroicons/react/16/outline";

import DashboardPage from "../pages/dashboard/Index";
import ProfilePage from "../pages/profile/Index";
import RolesPage from "../pages/roles/Index";
import UsersPage from "../pages/users/Index";
import ServicesPage from "../pages/services/Index";
import PackagesPage from "../pages/packages/Index";
import FormPackage from "../pages/packages/FormPackage";
import ProgramingPage from "../pages/programming/Index";
import CustomersPage from "../pages/customers/Index";
import ReservationsPage from "../pages/reservations/Index";
import PaymentsPage from "../pages/payments/Index";
import PaysPage from "../pages/pays/Index";

export const createRoutes = (role) => {
  if (role === 1) {
    return [
      {
        name: "Dashboard",
        href: `administrator/dashboard`,
        component: DashboardPage,
        icon: ChartPieIcon,
      },
      {
        name: "Perfil",
        href: `administrator/profile`,
        component: ProfilePage,
        icon: UserCircleIcon,
      },
      {
        name: "Configuración",
        href: `administrator/roles`,
        component: RolesPage,
        icon: Cog6ToothIcon,
      },
      {
        name: "Usuarios",
        href: `administrator/users`,
        component: UsersPage,
        icon: UsersIcon,
      },
      {
        name: "Servicios",
        href: `administrator/services`,
        component: ServicesPage,
        icon: RectangleGroupIcon,
      },
      {
        name: "Paquetes",
        href: `administrator/packages`,
        component: PackagesPage,
        icon: CubeIcon,
      },
      {
        name: "Crear paquetes",
        href: `administrator/package`,
        component: FormPackage,
        icon: CubeTransparentIcon,
      },
      {
        name: "Programación de paquetes",
        href: `administrator/packages/programming`,
        component: ProgramingPage,
        icon: CalendarIcon,
      },
      {
        name: "Clientes",
        href: `administrator/customers`,
        component: CustomersPage,
        icon: UserGroupIcon,
      },
      {
        name: "Reservas",
        href: `administrator/reservations`,
        component: ReservationsPage,
        icon: TicketIcon,
      },
      {
        name: "Gestión de pagos",
        href: `administrator/payments`,
        component: PaymentsPage,
        icon: CurrencyDollarIcon,
      },
      {
        name: "Pagos",
        href: `administrator/pays`,
        component: PaysPage,
        icon: BanknotesIcon,
      },
    ];
  } else if (role === 2) {
    return [
      {
        name: "Perfil",
        href: `administrator/profile`,
        component: ProfilePage,
        icon: UserIcon,
      },
      {
        name: "Reservas",
        href: `administrator/reservations`,
        component: ReservationsPage,
        icon: TicketIcon,
      },
      {
        name: "Gestión de pagos",
        href: `administrator/payments`,
        component: PaymentsPage,
        icon: CurrencyDollarIcon,
      },
    ];
  } else {
    return [];
  }
};
