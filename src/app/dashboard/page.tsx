import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { useSignOut } from '@/hooks/signOut';
import { Button } from '@/components/ui/Button';

export default async function DashboardPage() {
  
  const signOut = useSignOut();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Olá,</h1>
      <p>Esse conteúdo está protegido</p>
      <Button onClick={signOut} children={'Logout'} size={''} className={''} type={'button'} />
    </div>
  );
}
