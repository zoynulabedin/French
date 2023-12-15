import MobileMenu from "./component/mobilenav/mobilenav";
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
  ...(styles
    ? [
        { rel: "stylesheet", href: styles },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800;900&display=swap",
        },
      ]
    : []),
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
            <div className="mobile">
              <MobileMenu />
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
