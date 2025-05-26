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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/utils/userSlice";

function LoginForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState();
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggle = () => {
    setIsNewUser(!isNewUser);
  };

  const handleSubmit = () => {
    const validate = validateData(
      email.current.value,
      password.current.value,
      isNewUser && username.current.value
    );
    if (validate) {
      setError(validate);
      return;
    }

    setError(null);

    if (isNewUser) {
      const name = username.current.value;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, { displayName: name });
          dispatch(
            setUser({
              mail: email.current.value,
              displayName: name,
              uid: user.uid,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          setError(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            setUser({
              mail: user.email,
              displayName: user.displayName,
              uid: user.uid,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          setError(
            error.code === "auth/invalid-credential"
              ? "Invalid Credential"
              : error.code + " - " + error.message
          );
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            {isNewUser ? "Create a new account" : "Sign in to your account"}
          </h2>
          <form
            className="mt-6 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {isNewUser && (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  ref={username}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                ref={email}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                ref={password}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isNewUser ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            {isNewUser ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={toggle}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {isNewUser ? "Sign in" : "Create one"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;