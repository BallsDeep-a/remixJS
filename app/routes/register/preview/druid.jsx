import logo from "~/Assets/Img/placeholder.png";
import indexCss from "~/Assets/CSS/index.css";
import { CompleteClassPreview } from "~/Components/ClassPreview/Complete";
import { getSession } from "~/services/session.server";
import { Druid } from "~/Classes/Druid/Druid";
import { Link, redirect } from "remix";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("uuid")) {
    return redirect("/");
  }
  return null;
}

export default function DruidPreview() {
  return (
    <div className="flex flex-column items-center">
      <div className="container flex flex-column items-center max-width-1 py1 rounded">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <CompleteClassPreview
        className="mt1 max-width-1"
        theClass={new Druid()}
      />
      <Link
        to="/register/selected/druid"
        className="mt1 input-button p1 rounded h4 text-decoration-none bold"
      >
        SELECT
      </Link>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: indexCss }];
}
