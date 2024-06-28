import React, { useRef, useState } from "react";
import Header from "./Header";
import { formCheck } from "../utils/formValidation";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef("");
  const password = useRef("");
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleClick = (e) => {
    const errorMessage = formCheck(email.current.value, password.current.value);
    setError(errorMessage);
    if (errorMessage) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError("Already Regsitered User! try Sign In" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError("User Not Found try Sign In..." + errorMessage);
        });
    }
  };
  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign Up " : "Sing In"}
        </h1>
        {isSignUp && (
          <>
            <input
              className="p-4 my-4 w-full bg-gray-700"
              type="text"
              placeholder="Enter Full Name"
            />
          </>
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
          type="email"
          placeholder="Enter Email"
        />
        <div className="flex">
          <input
            className="p-4 my-4 w-full bg-gray-700 border-red-500"
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />
          <div className="-ml-10 mt-7 cursor-pointer" onClick={handleEyeClick}>
            {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="cursor-pointer" onClick={handleSignUp}>
          {isSignUp
            ? " Already a user ? Sign In here!"
            : "New to Netfilx ? Sign Up here.."}
        </p>
      </form>
    </div>
  );
};

export default Login;