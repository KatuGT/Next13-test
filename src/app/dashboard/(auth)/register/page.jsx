"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [errores, setErrores] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const pass = e.target[2].value;
    const confirmPass = e.target[3].value;

    if (pass !== confirmPass) {
      setErrores(true);
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          pass,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setErrores(true);
      console.error(error);
      console.error('aqui error?');
    }
  };
  return (
    <div className="mx-auto my-0 text-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          required
          name="name"
          placeholder="name"
          className="p-3 bg-transparent border-2 border-solid border-white rounded  "
        />
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
        <input
          required
          name="confirmPassword"
          placeholder="confirmPassword"
          className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          type="password"
        />
        <button
          type="submit"
          className="text-xl cursor-pointer bg-green-600 p-3 text-white rounded"
        >
          Register
        </button>
      </form>
      <p>or</p>
      <p>
        Login with a{" "}
        <Link className="underline underline-offset-2" href="/dashboard/login">
          existing account
        </Link>
      </p>
      {errores && <p className="text-red-600">Algo salio mal</p>}
    </div>
  );
};

export default Register;
