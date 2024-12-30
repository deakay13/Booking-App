import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function HandleSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  // Handle login form submission
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Admin"); 
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
    return {
      email,
      password,
      error,
      handleSignIn,
      setEmail,
      setPassword,
    };
}
