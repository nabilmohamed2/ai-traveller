import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "@/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/Services/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice"; // Adjust import path to your slice

function LoginForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setIsNewUser(!isNewUser);

  const email = useRef();
  const password = useRef();
  const username = useRef();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateData(
      email.current.value,
      password.current.value,
      isNewUser ? username.current.value : null
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    try {
      if (isNewUser) {
        // Sign up flow
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        // Wait for profile update to finish
        await updateProfile(userCredential.user, {
          displayName: username.current.value,
        });

        // Dispatch user data to Redux
        dispatch(
          setUser({
            mail: userCredential.user.email,
            displayName: username.current.value,
            uid: userCredential.user.uid,
          })
        );
      } else {
        // Sign in flow
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;

        dispatch(
          setUser({
            mail: user.email,
            displayName: user.displayName,
            uid: user.uid,
          })
        );
      }

      // Navigate only after dispatch
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            {isNewUser ? "Create a new account" : "Sign in to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {isNewUser && (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900"
                >
                  User name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    ref={username}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  ref={email}
                  type="email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={password}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
              >
                {isNewUser ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {isNewUser ? "Already a member? " : "Not a member? "}
            <button
              onClick={toggle}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {isNewUser ? "Sign in" : "Create a new account"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
