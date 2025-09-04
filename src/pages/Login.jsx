import { useState } from "react";

function Login() {
  const [isSignin, setIsSignin] = useState(true);
  const toggleMode = () => setIsSignin((prev) => !prev);

  return (
    <div className="min-h-[calc(100vh-150px)] flex items-center justify-center bg-gradient-to-br">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6 animate-fade-in">
          {isSignin ? "Welcome Back 👋" : "Create Your Account"}
        </h1>

        <form className="flex flex-col gap-4">
          {!isSignin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input-field"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-field"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200">
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={toggleMode}
          className="mt-4 text-sm text-center text-blue-500 cursor-pointer hover:underline transition">
          {isSignin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </div>
    </div>
  );
}

export default Login;
