'use server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export async function getServerSession() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch (error) {
    console.error('Erro ao obter sessão:', error);
    return null;
  }
}

export async function requireAuth() {
  const session = await getServerSession();
  if (!session) {
    throw new Error('Usuário não autenticado');
  }
  return session;
}