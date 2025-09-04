import React, { use, useState } from "react";

function Login() {
  const [isSignin, setIssignIn] = useState(true);

  return (
    <div className="mt-28 min-h-screen flex justify-center items-center">
      <div className=" flex gap-3 flex-col shadow-md p-4">
        <h1>{isSignin ? "Login" : "Sign Up"}</h1>
        {!isSignin ? <input type="text" placeholder="Name" name="email" /> : ""}
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Password" name="password" />
        <p
          onClick={() => setIssignIn((prev) => !prev)}
          className="text-end cursor-alias text-[12px] text-blue-500">
          {isSignin ? "Create Account" : "Sign In"}
        </p>
        <button className="w-full bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded">
          {isSignin ? "Sign in" : "Sign up"}
        </button>
      </div>
    </div>
  );
}

export default Login;
