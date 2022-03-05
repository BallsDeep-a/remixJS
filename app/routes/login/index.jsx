import { Form, Link, redirect, useActionData } from "remix";
import indexCss from "~/Assets/CSS/index.css";
import logo from "~/Assets/Img/placeholder.png";
import newIcon from "~/Assets/Img/new.png";
import { validate } from "validate.js";
import {
  usernameConstraint,
  passwordConstraint,
} from "~/Helpers/FieldConstraints";
import { commitSession, getSession } from "~/services/session.server";
import { PrismaClient } from "@prisma/client";
import { unDigest } from "~/Helpers/Cryptography";
import { Errors } from "~/Components/Errors";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("uuid")) return redirect("/");
  return null;
}

export async function action({ request }) {
  const prisma = new PrismaClient();
  const body = await request.formData();
  const username = body.get("username");
  const password = body.get("password");
  const session = await getSession(request.headers.get("Cookie"));

  // Validate the constraints to the fields
  const errors = validate(
    {
      username: username,
      password: password,
    },
    {
      username: usernameConstraint,
      password: passwordConstraint,
    }
  );

  // Check if we have any errors with the fields
  if (errors) {
    return errors;
  }

  // Retrieve user from database
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      uuid: true,
      password: true,
    },
  });

  // Check if user/username exists
  if (user === null) {
    return { username: ["Such username does not exist"] };
  }

  // Check if passwords match
  const passwordsMatch = password == (await unDigest(user["password"]));

  if (passwordsMatch) {
    session.set("uuid", user["uuid"]);
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  // Passwords dont match
  return {
    password: ["Password just isnt quite right"],
  };
}

export default function LoginPage() {
  const actionData = useActionData();

  return (
    <div className="flex flex-column items-center">
      <img src={logo} alt="logo" className="logo" />
      <span className="py1 h5 grey italic">
        ===Insert random bullshit here===
      </span>
      <div className="max-width-1 container py1 flex flex-column rounded mb2">
        <span>
          <img src={newIcon} alt="icon-new" className="pl1" />
          <span className="ml1">Announcements here</span>
        </span>
      </div>

      <Errors
        errors={actionData}
        className="max-width-1 container py1 flex flex-column rounded border-top border-red items-center m1 error-container h5"
      />
      <Form
        className="max-width-1 container py1 flex flex-column rounded border-top border-red items-center"
        method="POST"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input-username mb1 rounded border border-yellow center"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-password mb1 rounded border border-yellow center"
        />
        <input
          type="submit"
          value="LOGIN"
          className="input-login p1 rounded h4"
        />
      </Form>

      <Link
        to="/register/"
        className="mt1 input-register p1 rounded h4 text-decoration-none"
      >
        REGISTER
      </Link>

      <div className="container rounded max-width-1 py1 flex flex-column items-center h6 mt1">
        <span className="px1 center">
          Welcome to <b>Bl**k Dragon RPG!</b>
        </span>
        <span className="mt1 center px1 center">
          Here you can explore huge fantasy world full of monsters you can fight
          with. Get stronger, find clanmates, level up and reach the ultimate
          goal - slay the mighty Bl**k Dragon who has been terrifying our lands
          for years.
        </span>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: indexCss }];
}
