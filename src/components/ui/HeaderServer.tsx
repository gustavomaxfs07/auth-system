'use server'
import { getServerSession } from '@/lib/session';
import { HeaderComponent } from './Header';

export default async function ServerHeader() {
  const session = await getServerSession();
  console.log('Server Session:', session);
  return <HeaderComponent session={session} />;
}