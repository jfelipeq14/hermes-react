import {
  ChartPieIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

export const administrator = [
  {
    name: "Dashboard",
    href: "administrator/dashboard",
    icon: ChartPieIcon,
  },
  { name: "Roles", href: "administrator/roles", icon: UserGroupIcon },
  { name: "Users", href: "administrator/users", icon: UsersIcon },
];

export const customer = [
  { name: "Reservations", href: "customer/reservations", icon: UserGroupIcon },
  { name: "Profile", href: "customer/profile", icon: UsersIcon },
];
