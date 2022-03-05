import { LiveReload, Outlet, Links } from "remix";
import globalCss from "~/Assets/CSS/global.css";

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ?? "Test title"}</title>
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: globalCss }];
}
