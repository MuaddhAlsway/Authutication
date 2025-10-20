'use server';

import * as z from 'zod';
import { revalidatePath, revalidateTag } from "next/cache";
import { LoginScheme } from '@/schemas';

export const login = async (values: z.infer<typeof LoginScheme>) =>{
    const validatedFields = LoginScheme.safeParse(values);

    if(!validatedFields.success){
        return{error: 'Invalid fields!'};
    }

    return {success: 'Email sent!'}
}
