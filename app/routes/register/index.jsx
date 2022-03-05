import { redirect, useActionData } from "remix";
import indexCss from "~/Assets/CSS/index.css";
import logo from "~/Assets/Img/placeholder.png";
import { getSession } from "~/services/session.server";
import { CompactClassPreview } from "~/Components/ClassPreview/Compact";
import { Barbarian } from "~/Classes/Barbarian/Barbarian";
import { Druid } from "~/Classes/Druid/Druid";
import { Paladin } from "~/Classes/Paladin/Paladin";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("uuid")) {
    return redirect("/");
  }
  return null;
}

export default function RegisterPage() {
  const classList = [new Barbarian(), new Druid(), new Paladin()];

  return (
    <div className="flex flex-column items-center">
      <div className="container flex flex-column items-center max-width-1 py1 rounded">
        <img src={logo} alt="logo" className="logo" />
        <span className="mt1 link-colored bold">Create your character</span>
      </div>
      <span className="mt2 h6 grey">Please select your starting class</span>

      <div className="mt1 stretch max-width-1">
        {classList.map((theClass) => (
          <CompactClassPreview theClass={theClass} />
        ))}
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: indexCss }];
}
