import Navbar from "./component/navbar/Navbar";
import styles from "./styles/main.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  Link,
  ScrollRestoration,
} from "@remix-run/react";
export const links = () => [
  ...(styles ? [{ rel: "stylesheet", href: styles }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container m-auto">
          <div className="grid grid-cols-2">
            <div className="logo">
              <Link to="/">
                <img src="../../../img/logo.png " alt="" />
              </Link>
            </div>
            <div className="menu flex items-center">
              <Navbar />
            </div>
          </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
