'use client';

import { Icons, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { authClient } from "@/lib/auth-client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email: inputEmail,
      password: inputPassword,
        callbackURL: "/dashboard"
      }, {
        onSuccess: (ctx) => {
          console.log(ctx);
          document.cookie = `token=${ctx.data.token}; path=/; max-age=${60 * 60 * 24 * 7}; secure; samesite=strict`;
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

      <Button disabled={!(inputEmail && inputPassword)} children={"Login"} size={""} type={"submit"}/>
    </form>
  );
}