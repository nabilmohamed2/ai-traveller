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
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";


function LoginForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setIsNewUser(!isNewUser);
  };

  const email = useRef();
  const password = useRef();
  const username = useRef();

  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleSubmit = () => {

    const validate = validateData(
      email.current.value,
      password.current.value,
      isNewUser && username.current.value
    );
    console.log("Validation result:", validate);
    if (validate) {
      setError(validate); // Set the error message if validation fails
      return;
    }

    setError(null);

    if (isNewUser) {
      //sign up
      const name = username.current.value;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
          updateProfile(auth.currentUser, { displayName: name });
          // Dispatch user details to Redux
          dispatch(
            setUser({
              mail: email.current.value,
              displayName: name,
              uid: user.uid,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorCode + "-" + errorMessage);
        })

      navigate("/");
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          // Dispatch user details to Redux
          dispatch(
            setUser({
              mail: user.email,
              displayName: user.displayName,
              uid: user.uid,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorCode === "auth/invalid-credential"
            ? setError("Invalid Credential")
            : setError(errorCode + "-" + errorMessage);
        });
      navigate("/")
    }
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {isNewUser ? "Create a new account" : "Sign in to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            {isNewUser && (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  User name
                </label>
                <div className="mt-2">
                  <input
                    name="userName"
                    type="text"
                    ref={username}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
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
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={password}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isNewUser ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {isNewUser ? "Already a member? " : "Not a member? "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={toggle}
            >
              {isNewUser ? "Sign in" : "Create a new account"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
