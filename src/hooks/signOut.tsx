'use client';

import { Button } from "@/components/ui/Button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function ButtonSignOut() {
    const router = useRouter();

    async function signOut() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/auth/login");
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
            }
        });
    }

    return (
        <Button className={"mt-4"} children={'Logout'} size={'sm'} type={'button'} onClick={signOut} />
    );
}