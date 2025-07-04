'use client';
import { Icons, Input } from "../ui/Input";
import React, { useState } from "react";
import { Button } from "../ui/Button";

export function RegisterForm() {

  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  const userCredentials = {
    fullName: inputName,
    email: inputEmail,
    password: inputPassword
  };

  function getInputValue(){
    console.log(userCredentials);
  }
  
  return (
    <form action="">
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

      <Button onClick={getInputValue} children={"Register"} size={""} type={""}/>
    </form>
  );
}