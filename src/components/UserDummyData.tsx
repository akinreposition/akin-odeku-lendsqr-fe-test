import {
  UsersIcon,
  ActiveUsersIcon,
 
} from "./Icons";

interface DashboardItem {
  id: number;
  title: string;
  numbers: string;
  icon: React.ReactElement;
}

  export const UserDummyData: DashboardItem[] = [
    {
      id: 1,
      title: "User",
      numbers: "2,453",
      icon: <UsersIcon />,
    },
    {
      id: 2,
      title: "Active User",
      numbers: "2,453",
      icon: <ActiveUsersIcon />,
    },
    {
      id: 3,
      title: "User with loan",
      numbers: "12,453",
      icon: <ActiveUsersIcon />,
    },
    {
      id: 4,
      title: "User with saving",
      numbers: "102,453",
      icon: <ActiveUsersIcon />,
    },
    
  ];