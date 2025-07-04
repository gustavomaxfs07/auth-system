import { RegisterForm } from "@/components/auth/RegisterForm";
import { LoginForm } from "@/components/auth/LoginForm";
import { notFound } from "next/navigation";
import { CardForm } from "@/components/ui/CardForm";

interface AuthPageProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function AuthPage(props: AuthPageProps) {
  const params = await props.params;
  const { type } = params;

  if (type !== "login" && type !== "register") {
    return notFound();
  }

  const isLogin = type === "login";

  return (
    <div className="w-full mx-auto justify-center flex">
        <CardForm
            title={isLogin ? "Login User" : "Register User"}
            subTitle={isLogin ? "Sign in to your account" : "Create your account to get started"}
            form={isLogin ? <LoginForm /> : <RegisterForm />}
            forgotPassword={isLogin ? "Forgot my password" : ""}
            linkRouter={isLogin ? "register" : "login"}
        />
    </div>
  );
}
