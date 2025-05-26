import React, { useRef, useState, useEffect } from "react";
import { validateData } from "@/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/Services/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";
import Header from "./Header";

function LoginForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  const username = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  // ✅ Navigate only after Redux state is set
  useEffect(() => {
    if (user && user.uid) {
      navigate("/");
    }
  }, [user, navigate]);

  const toggle = () => {
    setIsNewUser(!isNewUser);
    setError(null); // Clear error when switching modes
  };

  const handleSubmit = async () => {
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

    try {
      if (isNewUser) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: username.current.value,
        });

        dispatch(
          setUser({
            mail: user.email,
            displayName: username.current.value,
            uid: user.uid,
          })
        );
      } else {
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
      // ✅ No navigate() here – handled by useEffect
    } catch (err) {
      setError(
        err.code === "auth/invalid-credential"
          ? "Invalid credentials"
          : `${err.code} - ${err.message}`
      );
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
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {isNewUser && (
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    ref={username}
                    required
                    className="px-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-indigo-600"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  ref={email}
                  required
                  className="px-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  ref={password}
                  required
                  className="px-2 block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-indigo-600"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-800"
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
