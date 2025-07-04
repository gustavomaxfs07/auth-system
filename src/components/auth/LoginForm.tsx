'use client';

import { Icons, Input } from "../ui/Input";
import React, { useState } from "react";
import { Button } from "../ui/Button";

export function LoginForm() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const userCredentials = {
    email: inputEmail,
    password: inputPassword
  };

  function getInputValue(){
    console.log(userCredentials);
  }

  return (
    <form action="">
        <Input
          icon={Icons.Email}
          type="email"
          required={true}
          placeholder="Your email"
          value={inputEmail}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputEmail(e.target.value)}
        />
        
        <Input
          icon={Icons.Password}
          type="password"
          placeholder="Password"
          required={true}
          value={inputPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputPassword(e.target.value)}
        />

        <Button onClick={getInputValue} children={"Login"} size={""} type={""}/>
    </form>
  );
}