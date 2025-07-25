import { authClient } from "@/lib/auth-client";

export const useSignOut = () => {

  const signOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          }
        }
      });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return signOut;
};