import React, { lazy } from "react";
import {
  BankingIcon,
  BookIcon,
  BrowserIcon,
  CartIcon,
  CubeIcon,
  DashboardIcon,
  ListIcon,
  PostIcon,
  SettingsIcon,
  ShopIcon,
  StatistikIcon,
  TelefonieIcon,
  UserIcon,
} from "../components/Icon/CheckIcon";
// import { BankingIcon } from "../components/Icon/CheckIcon";
// import {
//   BankingIcon,
//   BookIcon,
//   BrowserIcon,
//   CartIcon,
//   CubeIcon,
//   DashboardIcon,
//   PostIcon,
//   SettingsIcon,
//   ShopIcon,
//   StatistikIcon,
//   TelefonieIcon,
//   UserIcon,
// } from "../components/Icon/CheckIcon";
// import {
//   ListIcon,
//   BankingIcon,
//   BookIcon,
//   BrowserIcon,
//   CartIcon,
//   CubeIcon,
//   DashboardIcon,
//   PostIcon,
//   SettingsIcon,
//   ShopIcon,
//   StatistikIcon,
//   TelefonieIcon,
//   UserIcon,
// } from "../components/Icon/CheckIcon";
const Dashboard = lazy(() => import("../components/TabsComponents/Dashboard"));
const Banking = lazy(() => import("../components/TabsComponents/Banking"));
const Telefonie = lazy(() => import("../components/TabsComponents/Telefonie"));
const Accounting = lazy(
  () => import("../components/TabsComponents/Accounting")
);
const Verkauf = lazy(() => import("../components/TabsComponents/Verkauf"));
const Statistik = lazy(() => import("../components/TabsComponents/Statistik"));
const PostOffice = lazy(
  () => import("../components/TabsComponents/PostOffice")
);
const Administration = lazy(
  () => import("../components/TabsComponents/Administration")
);
const Help = lazy(() => import("../components/TabsComponents/Help"));
const Warenbestand = lazy(
  () => import("../components/TabsComponents/Warenbestand")
);
const Auswahllisten = lazy(
  () => import("../components/TabsComponents/Auswahllisten")
);
const Einkauf = lazy(() => import("../components/TabsComponents/Einkauf"));
const Rechn = lazy(() => import("../components/TabsComponents/Rechn"));

export const tabs = [
  {
    name: "Dashboard",
    image: {
      icon: <DashboardIcon />,
      alt: "dashboard icon",
    },
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Banking",
    image: {
      icon: <BankingIcon />,
      alt: "banking icon",
    },
    path: "banking",
    element: <Banking />,
  },
  {
    name: "Telefonie",
    image: {
      icon: <TelefonieIcon />,
      alt: "telefonie icon",
    },
    path: "telefonie",
    element: <Telefonie />,
  },
  {
    name: "Accounting",
    image: {
      icon: <UserIcon />,
      alt: "accounting icon",
    },
    path: "accounting",
    element: <Accounting />,
  },
  {
    name: "Verkauf",
    image: {
      icon: <ShopIcon />,
      alt: "verkauf icon",
    },
    path: "verkauf",
    element: <Verkauf />,
  },
  {
    name: "Statistik",
    image: {
      icon: <StatistikIcon />,
      alt: "statistik icon",
    },
    path: "statistik",
    element: <Statistik />,
  },
  {
    name: "Post office",
    image: {
      icon: <PostIcon />,
      alt: "post office icon",
    },
    path: "post-office",
    element: <PostOffice />,
  },
  {
    name: "Administration",
    image: {
      icon: <SettingsIcon />,
      alt: "administration icon",
    },
    path: "administration",
    element: <Administration />,
  },
  {
    name: "Help",
    image: {
      icon: <BookIcon />,
      alt: "help icon",
    },
    path: "help",
    element: <Help />,
  },
  {
    name: "Warenbestand",
    image: {
      icon: <CubeIcon />,
      alt: "warenbestand icon",
    },
    path: "warenbestand",
    element: <Warenbestand />,
  },
  {
    name: "Auswahllisten",
    image: {
      icon: <ListIcon />,
      alt: "auswahllisten icon",
    },
    path: "auswahllisten",
    element: <Auswahllisten />,
  },
  {
    name: "Einkauf",
    image: {
      icon: <CartIcon />,
      alt: "einkauf icon",
    },
    path: "einkauf",
    element: <Einkauf />,
  },
  {
    name: "Rechn",
    image: {
      icon: <BrowserIcon />,
      alt: "rechn icon",
    },
    path: "rechn",
    element: <Rechn />,
  },
];
