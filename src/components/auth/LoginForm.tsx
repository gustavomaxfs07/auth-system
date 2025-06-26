'use client';
import { Icons, Input } from "../ui/Input";

export function LoginForm() {
  return (
    <form action="">
        <Input
          icon={Icons.Email}
          type="email"
          placeholder="Digite seu email"
        />
        
        <Input
          icon={Icons.Password}
          type="password"
          placeholder="Senha"
          onChange={(e) => console.log(e.target.value)}
          required
        />
    </form>
  );
}