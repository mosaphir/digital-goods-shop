import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await signIn("credentials", { username, password });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
