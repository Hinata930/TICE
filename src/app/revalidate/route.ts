import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/home';
  revalidatePath(path, 'page');
  redirect(path);
}