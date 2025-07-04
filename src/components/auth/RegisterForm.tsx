'use client';
import { Icons, Input } from "../ui/Input";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { authClient } from "@/lib/auth-client";
import { on } from "events";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

type UserCredentials = {
  fullName: string;
  email: string;
  password: string;
};

export function RegisterForm() {

  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const router = useRouter();

  const userCredentials: UserCredentials = {
    fullName: inputName,
    email: inputEmail,
    password: inputPassword
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const {data, error} = await authClient.signUp.email({
      name: inputName,
      email: inputEmail,
      password: inputPassword,
    }, {
      onSuccess: (ctx) => {
        console.log("User registered successfully");
        router.replace("/dashboard");
      },
      onError: (error) => {
        console.log("Error registering user:" + error);
      },
      onRequest: (ctx) => {
        console.log("Registration request initiated");
      }
    });
  }
  
  return (
    <form onSubmit={onSubmit}>
      <Input
        icon={Icons.User}
        type="text"
        placeholder="Full Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        required
      />

      <Input
        icon={Icons.Email}
        type="email"
        placeholder="Email Address"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        required
      />

      <Input
        icon={Icons.Password}
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        required
      />

      <Button disabled={!(inputName && inputEmail && inputPassword)} children={"Register"} size={""} type={"submit"}/>
    </form>
  );
}