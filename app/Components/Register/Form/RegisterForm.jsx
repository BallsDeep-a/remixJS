import { Form } from "remix";

export function RegisterForm({ selectedClass }) {
  return (
    <Form method="POST" className="flex flex-column items-center stretch">
      <input
        className="center input-username rounded px1"
        type="text"
        name="username"
        placeholder="Username"
      />

      <input
        className="center input-username rounded px1 mt1"
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        className="center input-username rounded px1 mt1"
        type="password"
        name="password"
        placeholder="Password"
      />

      <input type="hidden" name="class" value={selectedClass.slug} />

      <input
        type="submit"
        value="BEGIN"
        className="mt1 input-button p1 rounded h4"
      />
    </Form>
  );
}
