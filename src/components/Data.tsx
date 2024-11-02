// import { SvgIconProps } from "@mui/material/SvgIcon";
import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

// type IconComponent = (props: SvgIconProps) => JSX.Element;


interface SidebarItem {
  id: number;
  name: string;
  path: string;
  icon: React.ReactElement;
}

  export const SIDEBAR_DATA: SidebarItem[] = [
    {
      id: 1,
      name: "dashboards",
      path: "dashboards",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: "users",
      path: "users",
      icon: <UserIcon />,
    },
    {
      id: 3,
      name: "layouts",
      path: "layouts",
      icon: <LayoutIcon />,
    },
    {
      id: 4,
      name: "calendar",
      path: "calendar",
      icon: <CalendarIcon />,
    },
    {
      id: 5,
      name: "invoice",
      path: "invoice",
      icon: <InvoiceIcon />,
    },
    {
      id: 6,
      name: "roles & permissions",
      path: "roles",
      icon: <RolesIcon />,
    },
    {
      id: 7,
      name: "pages",
      path: "pages",
      icon: <PagesIcon />,
    },
    {
      id: 8,
      name: "authentication",
      path: "authentication",
      icon: <AuthIcon />,
    },
    {
      id: 9,
      name: "wizard examples",
      path: "wizard",
      icon: <WizardIcon />,
    },
    {
      id: 10,
      name: "modal examples",
      path: "modal",
      icon: <ModalIcon />,
    },
  ];