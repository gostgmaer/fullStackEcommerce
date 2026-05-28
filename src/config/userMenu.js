import { MdApps, MdFavorite, MdFeed, MdHelpOutline, MdList, MdPerson } from "react-icons/md";

export const UserMenu = [
  {
    icon: <MdApps />,
    title: "Dashboard",
    path: "dashboard",
  },
  {
    icon: <MdList />,
    title: "My Orders",
    path: "my-orders",
  },
  {
    icon: <MdPerson />,
    title: "Profile",
    path: "profile",
  },
  {
    icon: <MdFeed />,
    title: "Change Password",
    path: "update-password",
  },
  {
    icon: <MdFavorite />,
    title: "Wishlist",
    path: "wishlist",
  },
  {
    icon: <MdHelpOutline />,
    title: "Help & Support",
    path: "/help-center",
    external: true,
  },
];
