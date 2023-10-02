import { PiBookmarkSimple, PiCode, PiCubeLight } from "react-icons/pi";
const routes = [
  {
    name: "Badges",
    items: [
      {
        name: "Badges",
        path: "/badges",
        icon: <PiBookmarkSimple size={20} />,
      },
      {
        name: "Badges API",
        path: "/badges-api",
        icon: <PiCode size={20} />,
      },
    ],
  },
  {
    name: "Furnis",
    items: [
      {
        name: "Furnis",
        path: "/furnis",
        icon: <PiCubeLight size={20} />,
      },
      {
        name: "Furnis API",
        path: "/furnis-api",
        icon: <PiCode size={20} />,
      },
    ],
  },
];

export default routes;
