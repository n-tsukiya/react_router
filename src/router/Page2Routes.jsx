import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/page2",
    children: <Page2 />,
  },
  {
    path: "/page2/:id",
    children: <UrlParameter />,
  },
];
