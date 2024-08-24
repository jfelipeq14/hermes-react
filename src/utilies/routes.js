import {
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  FolderPlusIcon,
  ShoppingCartIcon,
  TicketIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

export const administrator = [
  {
    id_permission: 1,
    name: "Dashboard",
    state: true,
    href: "administrator/dashboard",
    icon: ChartPieIcon,
  },
  {
    id_permission: 2,
    name: "Configuración",
    state: true,
    surmenu: [
      {
        name: "Gestion de Roles",
        href: "administrator/roles",
      },
    ],
    href: "administrator/roles",
    icon: Cog6ToothIcon,
  },
  {
    id_permission: 3,
    name: "Usuarios",
    state: true,
    surmenu: [
      {
        name: "Gestión de usuarios",
        href: "administrator/users",
      },
    ],
    href: "administrator/users",
    icon: UsersIcon,
  },
  {
    id_permission: 4,
    name: "Servicios",
    state: true,
    surmenu: [
      {
        name: "Gestión de servicios",
        href: "administrator/services",
      },
    ],
    href: "administrator/services",
    icon: ShoppingCartIcon,
  },
  {
    id_permission: 5,
    name: "Paquetes",
    state: true,
    surmenu: [
      {
        name: "Consultar paquetes",
        href: "administrator/packages/consult",
      },
      {
        name: "Crear paquetes",
        href: "administrator/packages/create",
      },
      {
        name: "Programacion de paquetes",
        href: "administrator/packages/program",
      },
    ],
    href: "administrator/users",
    icon: CubeIcon,
  },
  {
    id_permission: 6,
    name: "Clientes",
    state: true,
    surmenu: [
      {
        name: "Consultar clientes",
        href: "administrator/customers/consult",
      },
      {
        name: "Crear clientes",
        href: "administrator/customers/create",
      },
    ],
    href: "administrator/users",
    icon: UserGroupIcon,
  },
  {
    id_permission: 7,
    name: "Reservas",
    state: true,
    surmenu: [
      {
        name: "Consultar reservas",
        href: "administrator/reservations/consult",
      },
      {
        name: "Crear reserva",
        href: "administrator/reservations/create",
      },
    ],
    href: "administrator/users",
    icon: FolderPlusIcon,
  },{
    id_permission: 8,
    name: "Ventas",
    state: true,
    surmenu: [
      {
        name: "Consultar pagos",
        href: "administrator/payments/consult",
      },
      {
        name: "Gestion de pagos",
        href: "administrator/payments/manage",
      },
    ],
    href: "administrator/users",
    icon: TicketIcon,
  },
];

export const customer = [
  { name: "Reservations", href: "customer/reservations", icon: UserGroupIcon },
  { name: "Profile", href: "customer/profile", icon: UsersIcon },
];
