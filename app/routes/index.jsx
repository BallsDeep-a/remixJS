import { PrismaClient } from "@prisma/client";
import { redirect, useLoaderData } from "remix";
import { getSession, commitSession } from "~/services/session.server";
import indexCss from "~/Assets/CSS/index.css";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  // Redirect if no uuid session
  if (!session.has("uuid")) {
    return redirect("/login/");
  }

  const prisma = new PrismaClient();
  const uuid = session.get("uuid");

  const user = await prisma.user.findUnique({
    where: {
      uuid: uuid,
    },
    select: {
      username: true,
      Stats: {
        select: {
          strength: true,
          dexterity: true,
        },
      },
    },
  });

  // Redirect if user has been deleted or uuid has been tampered with
  if (user === null) {
    session.unset("uuid");

    return redirect("/login/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return user;
};

export default function Index() {
  const user = useLoaderData();
  return (
    <div>
      <span>{user.username}</span>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: indexCss }];
}
