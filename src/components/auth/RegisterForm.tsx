'use client';
import { Icons, Input } from "../ui/Input";

export function RegisterForm() {
  return (
    <form action="">
      <Input
        icon={Icons.User}
        type="text"
        placeholder="Full Name"
      />

      <Input
        icon={Icons.Email}
        type="email"
        placeholder="Email Address"
      />

      <Input
        icon={Icons.Password}
        type="password"
        placeholder="Password"
        onChange={(e) => console.log(e.target.value)}
        required
      />
    </form>
  );
}