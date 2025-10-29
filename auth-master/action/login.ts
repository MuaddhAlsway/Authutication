"use client";

import { signIn } from 'next-auth/react';
import { LoginScheme } from '@/schemas';
import * as z from 'zod';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const login = async (values: z.infer<typeof LoginScheme>) => {
  const validatedFields = LoginScheme.safeParse(values);
  if (!validatedFields.success) return { error: 'Invalid fields!' };

  const { email, password } = validatedFields.data;

  const res = await signIn('credentials', {
    redirect: false,
    email,
    password,
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });

  if (!res || res.error) return { error: 'Invalid credentials!' };

  // Redirect manually
  if (res.url) window.location.href = res.url;

  return { success: true };
};
