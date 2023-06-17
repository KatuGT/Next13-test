"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const pass = e.target[1].value;

    signIn("credentials", { email, pass });
  };
  return (
    <div className="text-center mx-auto my-0">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-md">
        <input
          required
          name="email"
          placeholder="email"
          className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          type="email"
        />
        <input
          required
          name="password"
          placeholder="password"
          className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          type="password"
        />
        <button
          type="submit"
          className="text-xl cursor-pointer bg-green-600 p-3 text-white rounded"
        >
          Login
        </button>
      </form>
      <p>or</p>
      <button
        onClick={async () => await signIn("google")}
        className="border-2 border-solid border-green-400 rounded w-full py-4"
      >
        Login with Gooogle
      </button>
    </div>
  );
};

export default Login;
