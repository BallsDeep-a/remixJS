import logo from "~/Assets/Img/placeholder.png";
import indexCss from "~/Assets/CSS/index.css";
import { commitSession, getSession } from "~/services/session.server";
import { redirect, useActionData, useLoaderData, useParams } from "remix";
import { RegisterForm } from "~/Components/Register/Form/RegisterForm";
import { validate } from "validate.js";
import {
  usernameConstraint,
  passwordConstraint,
  emailConstraint,
} from "~/Helpers/FieldConstraints";
import { PrismaClient } from "@prisma/client";
import { digestMessage } from "~/Helpers/Cryptography";
import { Errors } from "~/Components/Errors";
import { getClassByName } from "../../../Classes/getClassByName";

export async function loader({ request, params }) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("uuid")) {
    return redirect("/");
  }
  console.log(await getClassByName(params.name).name);
  return (await getClassByName(params.name)) ?? redirect("/");
}

export async function action({ request }) {
  const prisma = new PrismaClient();
  const body = await request.formData();
  const username = body.get("username");
  const email = body.get("email");
  const password = body.get("password");
  const selectedClass = body.get("class");
  const session = await getSession(request.headers.get("Cookie"));

  // if (session.has("uuid")) {
  //   return null;
  // }

  // Validate the constraints to the fields
  const errors = validate(
    {
      username: username,
      email: email,
      password: password,
    },
    {
      username: usernameConstraint,
      email: emailConstraint,
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
    },
  });

  // Check if user/username exists
  if (user !== null) {
    return { username: ["This username already exists"] };
  }

  const created = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: await digestMessage(password),
      lastActiveIP: "test",
      lastActiveAgent: "test",
      Profile: {
        create: {
          class: selectedClass,
        },
      },
      Stats: {
        create: {},
      },
      Equipment: {
        create: {},
      },
    },
    select: {
      uuid: true,
    },
  });

  if (created["uuid"]) {
    session.set("uuid", created["uuid"]);
    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return {
    server: "Database issues, your account has not been created",
  };
}

export default function Selected() {
  const selectedClass = useLoaderData();
  const actionData = useActionData();

  return (
    <div className="flex flex-column items-center">
      <div className="container flex flex-column items-center max-width-1 py1 rounded">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <Errors
        errors={actionData}
        className="max-width-1 container py1 flex flex-column rounded border-top border-red items-center m1 error-container h5"
      />

      <div className="container flex flex-column items-center max-width-1 py1 rounded mt2 border-top border-red">
        <span className="link-colored">You have selected</span>
        <img src={selectedClass.icon} className="class-preview-img mt1" />
        <span className="mt1 bold link-colored">
          {selectedClass.displayName}
        </span>
        <span className="grey px1 center">{selectedClass.description}</span>
      </div>
      <div className="container max-width-1 py1 rounded mt1">
        <RegisterForm selectedClass={selectedClass} />
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: indexCss }];
}
