import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { ButtonSignOut } from '@/hooks/signOut';

export default async function DashboardPage() {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Olá,</h1>
      <p>Esse conteúdo está protegido 🎯</p>
      <ButtonSignOut/>
    </div>
  );
}
