import Dashboard from "../components/TabsComponents/Dashboard";
import Banking from "../components/TabsComponents/Banking";
import Telefonie from "../components/TabsComponents/Telefonie";
import Accounting from "../components/TabsComponents/Accounting";
import Verkauf from "../components/TabsComponents/Verkauf";
import Statistik from "../components/TabsComponents/Statistik";
import PostOffice from "../components/TabsComponents/PostOffice";
import Administration from "../components/TabsComponents/Administration";
import Help from "../components/TabsComponents/Help";
import Warenbestand from "../components/TabsComponents/Warenbestand";
import Auswahllisten from "../components/TabsComponents/Auswahllisten";
import Einkauf from "../components/TabsComponents/Einkauf";
import Rechn from "../components/TabsComponents/Rechn";

export const tabs = [
  {
    name: "Dashboard",
    image: {
      src: "/images/dashboard-icon.svg",
      alt: "dashboard icon",
    },
    path: "dashboard",
    element: Dashboard,
  },
  {
    name: "Banking",
    image: {
      src: "/images/banking-icon.svg",
      alt: "banking icon",
    },
    path: "banking",
    element: Banking,
  },
  {
    name: "Telefonie",
    image: {
      src: "/images/telefonie-icon.svg",
      alt: "telefonie icon",
    },
    path: "telefonie",
    element: Telefonie,
  },
  {
    name: "Accounting",
    image: {
      src: "/images/user-add-icon.svg",
      alt: "accounting icon",
    },
    path: "accounting",
    element: Accounting,
  },
  {
    name: "Verkauf",
    image: {
      src: "/images/shop-icon.svg",
      alt: "verkauf icon",
    },
    path: "verkauf",
    element: Verkauf,
  },
  {
    name: "Statistik",
    image: {
      src: "/images/chart-pie-icon.svg",
      alt: "statistik icon",
    },
    path: "statistik",
    element: Statistik,
  },
  {
    name: "Post office",
    image: {
      src: "/images/post-icon.svg",
      alt: "post office icon",
    },
    path: "post-office",
    element: PostOffice,
  },
  {
    name: "Administration",
    image: {
      src: "/images/settings-icon.svg",
      alt: "administration icon",
    },
    path: "administration",
    element: Administration,
  },
  {
    name: "Help",
    image: {
      src: "/images/book-icon.svg",
      alt: "help icon",
    },
    path: "help",
    element: Help,
  },
  {
    name: "Warenbestand",
    image: {
      src: "/images/cube-icon.svg",
      alt: "warenbestand icon",
    },
    path: "warenbestand",
    element: Warenbestand,
  },
  {
    name: "Auswahllisten",
    image: {
      src: "/images/list-icon.svg",
      alt: "auswahllisten icon",
    },
    path: "auswahllisten",
    element: Auswahllisten,
  },
  {
    name: "Einkauf",
    image: {
      src: "/images/cart-icon.svg",
      alt: "einkauf icon",
    },
    path: "einkauf",
    element: Einkauf,
  },
  {
    name: "Rechn",
    image: {
      src: "/images/browser-icon.svg",
      alt: "rechn icon",
    },
    path: "rechn",
    element: Rechn,
  },
];
